---
layout: "html_wrapper.njk"
---
Integer array height of length n defines n vertical lines from (i, 0) to (i, height[i]).

Choose two lines that, with the x-axis, form the highest-capacity container.

Return that maximum capacity.

The container cannot slant.

```python
class Solution(object):
    def maxArea(self, height):
        """
        :type height: List[int]
        :rtype: int
        """
        area = 0
        start = 0
        end = len(height) - 1

        while start < end:
            if height[start] < height[end]:
                area = max(area, height[start] * (end - start))
                start += 1
            else:
                area = max(area, height[end] * (end - start))
                end -= 1

        return area


test_a = [1,8,6,2,5,4,8,3,7]
right_answer_a = 49
sol = Solution()
```
