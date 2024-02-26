---
layout: "html_wrapper.njk"
---

Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer (similar to C/C++'s atoi function).

The algorithm for myAtoi(string s) is as follows:

Read in and ignore any leading whitespace.
Check if the next character (if not already at the end of the string) is '-' or '+'. Read this character in if it is either. This determines if the final result is negative or positive respectively. Assume the result is positive if neither is present.
Read in next the characters until the next non-digit character or the end of the input is reached. The rest of the string is ignored.
Convert these digits into an integer (i.e. "123" -> 123, "0032" -> 32). If no digits were read, then the integer is 0. Change the sign as necessary (from step 2).
If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then clamp the integer so that it remains in the range. Specifically, integers less than -231 should be clamped to -231, and integers greater than 231 - 1 should be clamped to 231 - 1.
Return the integer as the final result.
Note:

Only the space character ' ' is considered a whitespace character.
Do not ignore any characters other than the leading whitespace or the rest of the string after the digits.

Example 1:

Input: s = "42"
Output: 42
Explanation: The underlined characters are what is read in, the caret is the current reader position.
Step 1: "42" (no characters read because there is no leading whitespace)
^
Step 2: "42" (no characters read because there is neither a '-' nor '+')
^
Step 3: "42" ("42" is read in)
^
The parsed integer is 42.
Since 42 is in the range [-231, 231 - 1], the final result is 42.
Example 2:

Input: s = "   -42"
Output: -42
Explanation:
Step 1: "   -42" (leading whitespace is read and ignored)
^
Step 2: "   -42" ('-' is read, so the result should be negative)
^
Step 3: "   -42" ("42" is read in)
^
The parsed integer is -42.
Since -42 is in the range [-231, 231 - 1], the final result is -42.
Example 3:

Input: s = "4193 with words"
Output: 4193
Explanation:
Step 1: "4193 with words" (no characters read because there is no leading whitespace)
^
Step 2: "4193 with words" (no characters read because there is neither a '-' nor '+')
^
Step 3: "4193 with words" ("4193" is read in; reading stops because the next character is a non-digit)
^
The parsed integer is 4193.
Since 4193 is in the range [-231, 231 - 1], the final result is 4193.

```python
import re


class Solution(object):
    def myAtoi(self, s):
        """
        :type s: str
        :rtype: int
        """
        hex_lower = -0x80000000
        hex_upper = 0x7fffffff
        trimmed_s = s.strip()
        zero = 0
        answer_int = 0
        pos = True
        if trimmed_s == "":
            return answer_int
        if trimmed_s[0] == "-":
            pos = False
            trimmed_s = trimmed_s[1:]
        elif trimmed_s[0] == "+":
            trimmed_s = trimmed_s[1:]

        letter_index = re.search("[a-zA-Z\s\.\-\+]", trimmed_s)
        if letter_index is not None:
            end_index = letter_index.start()
            number_group = trimmed_s[:end_index]
        else:
            number_group = trimmed_s
        if not number_group.isdigit():
            return answer_int
        else:
            int_group = int(number_group) if pos else int("-" + number_group)
        if pos or int_group == zero:
            if int_group == int_group & hex_upper:
                answer_int = int_group
            else:
                return hex_upper
        else:
            if hex_lower == int_group & hex_lower:
                answer_int = int_group
            else:
                return hex_lower

        return answer_int


sol = Solution()
print(sol.myAtoi("  -0k4"))
```