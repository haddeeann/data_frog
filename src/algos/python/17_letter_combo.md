---
layout: "html_wrapper.njk"
---
Letter Combinations of a Phone Number

Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

Example 1:

Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
Example 2:

Input: digits = ""
Output: []
Example 3:

Input: digits = "2"
Output: ["a","b","c"]

```python
class Solution(object):
    def letterCombinations(self, digits):
        """
        :type digits: str
        :rtype: List[str]
        """
        answer = ['']
        lookup = {
            "2": "abc",
            "3": "def",
            "4": "ghi",
            "5": "jkl",
            "6": "mno",
            "7": "pqrs",
            "8": "tuv",
            "9": "wxyz"
        }

        for s in digits:
            if s in lookup:
                build = []
                for a in answer:
                    for letter in lookup[s]:
                        build.append(a + letter)
                answer = build

        return [a for a in answer if not a == '']


sol = Solution()

test_cases = [
    {
        "no": "one",
        "input": "234",
        "answer": ["adg", "adh", "adi", "aeg", "aeh", "aei", "afg", "afh", "afi",
                   "bdg", "bdh", "bdi", "beg", "beh", "bei", "bfg", "bfh", "bfi",
                   "cdg", "cdh", "cdi", "ceg", "ceh", "cei", "cfg", "cfh", "cfi"]
    },
    {
        "no": "two",
        "input": "",
        "answer": []
    },
    {
        "no": "three",
        "input": "2",
        "answer": ["a", "b", "c"]
    }
]

for test in test_cases:
    result = sol.letterCombinations(test["input"])
    if result == test["answer"]:
        print("answer is RIGHT")
    else:
        print("failed")
```