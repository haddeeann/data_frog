---
layout: "html_wrapper.njk"
title: "Roman to Integer"
track: "algorithms"
type: "practice"
status: "published"
difficulty: "beginner"
order: 13
series: "python"
---
Roman numerals use seven symbols: I, V, X, L, C, D, and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is II, 12 is XII (X + II), and 27 is XXVII (XX + V + II).

Roman numerals usually descend from left to right. Six subtractive pairs handle values such as 4 (IV) and 9 (IX):

I can be placed before V (5) and X (10) to make 4 and 9.
X can be placed before L (50) and C (100) to make 40 and 90.
C can be placed before D (500) and M (1000) to make 400 and 900.
Convert a given Roman numeral to an integer.

Example 1:

Input: s = "III"
Output: 3
Explanation: III = 3.
Example 2:

Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.
Example 3:

Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

```python
class Solution(object):
    def romanToInt(self, str):
        """
        :type s: str
        :rtype: int
        """
        lookup = {
            'CM': 900,
            'M': 1000,
            'CD': 400,
            'D': 500,
            'XC': 90,
            'C': 100,
            'XL': 40,
            'L': 50,
            'IX': 9,
            'X': 10,
            'IV': 4,
            'V': 5,
            'I': 1
        }
        lc = ''
        skip_letter = False
        int_value = 0
        for i, s in enumerate(str):
            if skip_letter:
                skip_letter = False
                continue

            if i != len(str) - 1:
                lc = str[i] + str[i+1]
                if lookup.get(lc) is not None:
                    print(lc, lookup[lc])
                    int_value += lookup[lc]
                    skip_letter = True
                    continue

            if lookup.get(s) is not None:
                print(s, lookup[s])
                int_value += lookup[s]
                continue

        return int_value



sol = Solution()
s = "III"
a = 3
if sol.romanToInt(s) == a:
    print("test one passed")
else:
    print("test one failed")

s = "LVIII"
a = 58
if sol.romanToInt(s) == a:
    print("test two passed")
else:
    print("test two failed")

s = "MCMXCIV"
a = 1994
if sol.romanToInt(s) == a:
    print("test three passed")
else:
    print("test three failed")
```
