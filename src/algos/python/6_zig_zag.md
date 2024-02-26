---
layout: "html_wrapper.njk"
---
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);

Example 1:

Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"
Example 2:

Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:
P     I    N
A   L S  I G
Y A   H R
P     I
Example 3:

Input: s = "A", numRows = 1
Output: "A"

```python
class Solution(object):
    def fill(self, numRows, arr):
        col = len(arr)
        arr.append([])
        for x in range(numRows):
            arr[col].append('')

    def convert(self, s, numRows):
        """
        :type s: str
        :type numRows: int
        :rtype: str
        """
        # set up once
        arr = []
        z = 0
        i = 0

        s_length = len(s)

        while z < s_length:
            # pattern one
            self.fill(numRows, arr)
            y = 0
            while y < numRows:
                if z == s_length:
                    break
                arr[i][y] = s[z]
                y += 1
                z += 1

            # pattern two
            i += 1
            j = numRows - 2
            while j > 0:
                if z == s_length:
                    break
                self.fill(numRows, arr)
                arr[i][j] = s[z]
                i += 1
                j -= 1
                z += 1

        row = 0
        build_string = ''
        while row < numRows:
            col = 0
            while col < len(arr):
                if arr[col][row] != '':
                    build_string += arr[col][row]
                col += 1
            row += 1

        return build_string


sol = Solution()
sol.convert("PAYPALISHIRING", 3)
```