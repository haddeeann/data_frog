---
layout: "html_wrapper.njk"
---
You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

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