---
layout: "html_wrapper.njk"
---
# Integer to Roman

Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9.
X can be placed before L (50) and C (100) to make 40 and 90.
C can be placed before D (500) and M (1000) to make 400 and 900.
Given an integer, convert it to a roman numeral.

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