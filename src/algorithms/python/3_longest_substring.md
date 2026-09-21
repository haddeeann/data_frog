---
layout: "html_wrapper.njk"
title: "Longest Substring Without Repeating Characters"
track: "algorithms"
type: "practice"
status: "published"
difficulty: "beginner"
order: 3
series: "python"
---

Given string s, return the length of its longest substring with no repeated characters.

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: "abc" has length 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: "b" has length 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: "wke" has length 3. "pwke" is a subsequence, not a substring.

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
