---
layout: "html_wrapper.njk"
title: "Count and Say"
track: "algorithms"
type: "practice"
status: "published"
difficulty: "beginner"
order: 38
series: "python"
---
# Count and Say

The count-and-say sequence recursively describes runs of digits:

countAndSay(1) = "1"
countAndSay(n) describes countAndSay(n-1). Split the previous term into maximal runs of one digit, state each run's length and digit, then concatenate the results.

For example, describe "3322251" as:

Given positive integer n, return the nth term.

23 32 15 11

Example 1:

Input: n = 1
Output: "1"
Explanation: This is the base case.
Example 2:

Input: n = 4
Output: "1211"
Explanation:
countAndSay(1) = "1"
countAndSay(2) = say "1" = one 1 = "11"
countAndSay(3) = say "11" = two 1's = "21"
countAndSay(4) = say "21" = one 2 + one 1 = "12" + "11" = "1211"

```python
class Solution(object):
    def countAndSay(self, n):
        """
        :type n: int
        :rtype: str
        :type current int
        """
        if n == 1:
            return n
        counter = 1
        build = ''
        while counter < n:
            if build == '':
                test = str(counter)
            else:
                test = build
            add = ''
            count = 1
            while len(test) > 0:
                first = test[:1]
                test = test[1:]
                while len(test) > 0 and first == test[0]:
                    count += 1
                    test = test[1:]
                add += str(count) + first
            counter += 1
            build = add
        return build


input = 4
sol = Solution()
answer = sol.countAndSay(input)
print(answer == "1211")
```
