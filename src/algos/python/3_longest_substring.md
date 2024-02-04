---
layout: "html_wrapper.njk"
---

Given a string s, find the length of the longest substring without repeating characters.

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.


Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.

````python
class Solution(object):
    def lengthOfLongestSubstring(self, s):
        """
        :type s: str
        :rtype: int
        """
        if len(s) == 0:
            return 0

        longest = 1
        for index, str in enumerate(s):
            str_dict = {}
            found = s.find(str, index + 1)
            if found != -1:
                substring = s[index:found]
            else:
                substring = s[index:]
            if len(substring) > longest:
                for x in substring:
                    if str_dict.get(x) is not None:
                        break

                    if str_dict.get(x) is None:
                        str_dict[x] = 1

                    if len(str_dict) > longest:
                        longest = len(str_dict)

        print(longest)
        return longest


sol = Solution()
sol.lengthOfLongestSubstring('pwwkew')
````