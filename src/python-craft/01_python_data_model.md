---
layout: "html_wrapper.njk"
id: "python-data-model"
title: "The Python Data Model"
track: "python-craft"
type: "concept"
status: "drafted"
difficulty: "beginner"
order: 1
prerequisites: []
---

# The Python Data Model

If you come to Python from Java or C#, you bring a reflex: to make an object *do* something, you call a method on it — `list.size()`, `str.length()`. Python inverts that. You don't call the object; the interpreter calls the object, and your job is to say what happens when it does.

That contract between your objects and the language is the data model, and almost everything that makes Python feel like Python — `len()`, `for` loops, `in`, truthiness, `with` — runs through it. For data work it matters twice over: the libraries you'll use are built on these protocols, and the code you write becomes pleasant exactly when you implement them.

## The protocol idea

Python doesn't have interfaces you declare. It has behaviors it looks up, by special-name method, when a syntax asks for them. When you write:

```python
# illustrative fragment
len(records)
```

the interpreter executes `type(records).__len__(records)`. When you write:

```python
# illustrative fragment
for r in records:
    ...
```

it looks for `type(records).__iter__` — and if that's missing, falls back to `__getitem__`, calling it with 0, 1, 2, ... until it raises `IndexError`. The for loop isn't a construct that works on lists. It's a construct that works on *anything that answers those lookups*.

These special names are dunder ("double underscore") methods, and there are two facts about the lookup that explain most of the surprises you'll ever hit:

1. **Lookup happens on the type, not the instance.** `len(x)` means `type(x).__len__(x)`, not `x.__len()`. Special methods aren't found through normal attribute lookup, so you can't monkey-patch `__len__` onto an instance and expect `len()` to see it.
2. **The fallback chain is fixed.** Each syntax tries a specific sequence of dunders. If you know the chain, you can predict exactly what an object will do — and implement exactly as much of it as you need.

## The chains you'll use weekly

| You write | Python tries, in order |
| --- | --- |
| `len(x)` | `__len__` |
| `for x in obj` | `__iter__`, then `__getitem__` with 0, 1, 2, ... |
| `x in obj` | `__contains__`, then iteration |
| `if x:` | `__bool__`, then `__len__` (nonzero = true) |
| `repr(x)` | `__repr__` |
| `str(x)` | `__str__`, then `__repr__` |

That `if x:` chain is where the first surprise lives, so let's build something real and watch it.

## A runnable example

Say you've pulled a small batch of records and want it to behave like a proper collection — length, iteration, membership, honest display — without wrapping it in a class that fights the language.

```python
# python 3.10+, stdlib only
class RecordBatch:
    """A named batch of dict records that behaves like a collection."""

    def __init__(self, name, records):
        self.name = name
        self._records = list(records)

    def __len__(self):
        return len(self._records)

    def __getitem__(self, index):
        return self._records[index]

    def __contains__(self, record):
        return record in self._records

    def __repr__(self):
        return f"RecordBatch({self.name!r}, {len(self._records)} records)"
```

Notice we never wrote `__iter__`. Iteration falls back to `__getitem__`, which slices fine here. Now the class works with the whole language:

```python
batch = RecordBatch("penguins", [
    {"species": "Adelie", "flipper_mm": 181},
    {"species": "Gentoo", "flipper_mm": 210},
    {"species": "Adelie", "flipper_mm": 186},
])

print(len(batch))                 # 3
print(batch[1])                   # {'species': 'Gentoo', 'flipper_mm': 210}
print({"species": "Adelie", "flipper_mm": 181} in batch)   # True
print([r for r in batch if r["flipper_mm"] > 180])          # all three records
print(batch)                      # RecordBatch('penguins', 3 records)
```

Four lines of protocol implementation, and `RecordBatch` now works with `for`, list comprehensions, `in`, `len`, f-strings, and every function in the standard library that expects "a sequence" — which is a much larger club than "a list".

That last point is the practical payoff. Libraries write their code against protocols, not concrete types. A function with `for x in data:` accepts your `RecordBatch`, a generator, a file object, a database cursor. This is why Python code that respects the protocols composes, and code that type-checks `isinstance(data, list)` doesn't.

## Failure modes

**`__bool__` falls back to `__len__`.** Our `RecordBatch` has no `__bool__`, so an empty batch is falsy:

```python
empty = RecordBatch("none", [])
if not empty:
    print("no records — is that an error, or just a quiet day?")
```

Sometimes an empty batch means "nothing to do"; sometimes it means the upstream job broke. If the difference matters, implement `__bool__` and raise, or return `True` unconditionally — but do it *consciously*. Silent falsiness on custom containers causes real bugs; people write `if batch:` without thinking about what emptiness means.

**Returning nonsense from `__len__`.** The protocol promises a nonnegative integer. Return `-1` or a float and callers get garbage or a `TypeError` from the interpreter itself. When a method is invoked *by the language*, you're writing an API for every caller in the program, not just yourself.

**Mutating while iterating.** The `__getitem__` fallback indexes eagerly — modify the batch mid-loop and you'll skip records. This isn't exotic; it's the classic bug of filtering a list while looping over it. Build a new container instead.

**Confusing `__repr__` and `__str__`.** `__repr__` is for developers and logs: unambiguous, ideally something you could paste back to reconstruct the object. `__str__` is for users. If you implement only one, make it `__repr__` — `str()` falls back to it, and the REPL uses it, so you'll see the benefit every debugging session.

## What this buys you later

Everything downstream in this track builds here. `dataclasses` write `__repr__` and `__eq__` for you. `pytest`'s assertion introspection, `functools.total_ordering`, the way `enumerate` and `zip` consume anything iterable — protocols underneath. And when you reach pandas, the reason `df["x"]` and `df.loc[...]` feel different is that they're answering different protocols: `__getitem__` versus a method with its own rules. Same idea, different chain.

<div class="exercise">
  <p class="exercise-prompt"><strong>Exercise 1.</strong> Add an <code>__iter__</code> method to <code>RecordBatch</code> that yields records directly. Then explain: does the class behave any differently? When would writing it matter?</p>
  <details class="exercise-solution">
    <summary>Solution</summary>
    <p><code>def __iter__(self): return iter(self._records)</code>. Behavior is nearly identical — the fallback was already indexing. It matters when indexing doesn't describe your data: infinite sequences, expensive random access (a database cursor), or tree traversal where "position 7" is meaningless. If iteration is natural but indexing isn't, implement <code>__iter__</code> and leave <code>__getitem__</code> out — then <code>batch[0]</code> raises <code>TypeError</code> instead of silently doing the wrong thing.</p>
  </details></div>

<div class="exercise">
  <p class="exercise-prompt"><strong>Exercise 2.</strong> Without running it, predict what happens: <code>batch.__len__ = lambda: 99</code>, then <code>len(batch)</code>.</p>
  <details class="exercise-solution">
    <summary>Solution</summary>
    <p><code>len(batch)</code> still returns 3. The assignment puts <code>__len__</code> on the <em>instance</em>, but the interpreter looks special methods up on the <em>type</em>. You'd have to set it on <code>RecordBatch</code> itself to change the answer — which is exactly the "lookup on the type" rule doing its job: it keeps built-in syntax predictable no matter what's been splattered on an object.</p>
  </details></div>

<div class="exercise">
  <p class="exercise-prompt"><strong>Exercise 3.</strong> A colleague writes <code>if batch:</code> to guard against running analysis on an empty batch — but an empty batch should raise an error, not be skipped. Change <code>RecordBatch</code> so the empty case fails loudly, and explain what your <code>__bool__</code> does to the truthiness of non-empty batches.</p>
  <details class="exercise-solution">
    <summary>Solution</summary>
    <p>Implement <code>def __bool__(self):</code> to raise <code>ValueError(f"{self.name} batch is empty")</code> if <code>len(self._records) == 0</code>, else return <code>True</code>. Now any truthiness check on an empty batch explodes — loud is the point. Non-empty batches are truthy, so <code>if batch:</code> keeps working for the legitimate use. The uncomfortable question this raises — "should a container be able to be false <em>and</em> mean it?" — is why many teams prefer explicit <code>len(batch) == 0</code> checks and reserve <code>__bool__</code> for objects where truthiness is unambiguous.</p>
  </details></div>

## Takeaway

Python's syntax is a set of fixed dunder lookup chains, resolved on the type. Implement the protocols and your objects work with the entire language — loops, comprehensions, membership, libraries that "just take a sequence." The two chains to burn in: iteration (`__iter__`, then `__getitem__`) and truthiness (`__bool__`, then `__len__`). When something behaves surprisingly in Python, check which chain is answering — it's almost always one of these.
