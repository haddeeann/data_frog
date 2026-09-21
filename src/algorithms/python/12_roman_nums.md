---
layout: "html_wrapper.njk"
title: "Integer to Roman"
track: "algorithms"
type: "practice"
status: "published"
difficulty: "beginner"
order: 12
series: "python"
---
# Integer to Roman

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
Convert a given integer to a Roman numeral.

```python
class Solution(object):
    def findLargest(self, n):
        lookup = {
            900: 'CM',
            1000: 'M',
            400: 'CD',
            500: 'D',
            90: 'XC',
            100: 'C',
            40: 'XL',
            50: 'L',
            9: 'IX',
            10: 'X',
            4: 'IV',
            5: 'V',
            1: 'I'
        }
        search = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1, 0]
        x = n
        last_elem = len(search) - 1
        letter = ''
        r = 0
        for i, value in enumerate(search):
            if i < last_elem:
                next = search[i+1]
                if x >= value:
                    # use the value plain
                    letter = lookup[value]
                    r = x - value
                    return letter, r

        return letter, r


    def intToRoman(self, num):
        """
        :type num: int
        :rtype: str
        """
        letter = ''
        letter_combo = ''
        # remainer
        r = num
        while num > 0:
            if r <= 0:
                break
            letter, r = self.findLargest(r)
            letter_combo = letter_combo + letter
            num -= 1

        return letter_combo

sol = Solution()

num_one = 3
output = "III"
print(sol.intToRoman(num_one))

num_two = 58
output = "LVIII"
print(sol.intToRoman(num_two))

num_three = 1994
output = "MCMXCIV"
# Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
print(sol.intToRoman(num_three))
```
