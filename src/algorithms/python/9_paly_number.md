---
layout: "html_wrapper.njk"
title: "Palindrome Number"
track: "algorithms"
type: "practice"
status: "published"
difficulty: "beginner"
order: 9
series: "python"
---
# Palindrome Number

Given integer x, return true when it is a palindrome.

An integer is palindromic when it reads identically forward and backward.

For example, 121 qualifies; 123 does not.


Example 1:

Input: x = 121
Output: true
Explanation: 121 reads the same in both directions.
Example 2:

Input: x = -121
Output: false
Explanation: Reversing -121 produces 121-, so it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reversing 10 produces 01, so it is not a palindrome.

```python
import math

class Solution(object):
    def isPalindrome(self, x):
        """
        :type x: int
        :rtype: bool
        """
        str_x = str(x)
        start = 0
        end = len(str_x) - 1
        midpoint = math.floor(len(str_x) / 2)
        while start < midpoint:
            if str_x[start] != str_x[end]:
                return False
            start += 1
            end -= 1

        return True


sol = Solution()
print(sol.isPalindrome(-123321))
```
