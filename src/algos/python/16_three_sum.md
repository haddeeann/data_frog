---
layout: "html_wrapper.njk"
---
# 3Sum Closest

Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.

Return the sum of the three integers.

You may assume that each input would have exactly one solution.

Example 1:

Input: nums = [-1,2,1,-4], target = 1
Output: 2
Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

Example 2:

Input: nums = [0,0,0], target = 1
Output: 0

```python
class Solution(object):
    def threeSumClosest(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: int
        """
        nums.sort()
        print('starting array: ', nums)
        least_diff = None
        least_sum = None
        sums_arr = []
        # check to see if outside of range of list
        if target < 0:
            low_sum = nums[0] + nums[1] + nums[2]
            if target < low_sum:
                return low_sum
        elif target > 0:
            r_index = len(nums) - 1
            hi_sum = nums[r_index] + nums[r_index - 1] + nums[r_index - 2]
            if target > hi_sum:
                return hi_sum

        def process_first_row(arr):
            # need to return
            sums_arr = []
            least_diff = None
            least_sum = None
            found = None
            # starting index
            m_index = 1
            middle = arr[m_index]

            r_index = len(arr) - 1
            right = arr[r_index]
            while m_index < r_index:
                sum = left + middle + right
                sums_arr.append(sum)
                diff = abs(sum - target)
                if least_diff is None or diff < least_diff:
                    least_diff = diff
                    least_sum = sum

                if sum > target:
                    # move right index
                    r_index -= 1
                    right = nums[r_index]
                elif sum < target:
                    # move middle index
                    m_index += 1
                    middle = nums[m_index]
                elif sum == target:
                    return [sums_arr, least_diff, least_sum, sum]

            return [sums_arr, least_diff, least_sum, found]

        for l_index, left in enumerate(nums[:-2]):
            if l_index == 0:
                sums_arr, least_diff, least_sum, found = process_first_row(nums)
            if found is not None:
                return found

            if l_index > 0:
                # find diff between this l and previous left
                prev_left = nums[l_index - 1]
                diff_left = abs(left - prev_left)
                # removes the first item in the sums array
                sums_arr.pop(0)
                for i, s in enumerate(sums_arr):
                    sums_arr[i] = s + diff_left
                    if sums_arr[i] == target:
                        return sums_arr[i]
                    diff = abs(sums_arr[i] - target)
                    if diff < least_diff:
                        least_diff = diff
                        least_sum = sums_arr[i]
                print(sums_arr)
        return least_sum


sol = Solution()
```