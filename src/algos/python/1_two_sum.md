---
layout: "html_wrapper.njk"
---

# Two Sum
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

### Example 1:
```
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
```

### Example 2:
```
Input: nums = [3,2,4], target = 6
Output: [1,2]
```

### Example 3:
```
Input: nums = [3,3], target = 6
Output: [0,1]
```

```python
class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        for x_idx, x in enumerate(nums[:-1]):
            for y_idx, y in enumerate(nums[x_idx + 1:], start=x_idx + 1):
                if x + y == target:
                    return [x_idx, y_idx]


sol = Solution()

print(sol.twoSum([2, 11, 1111, 115, 7], 9))
```