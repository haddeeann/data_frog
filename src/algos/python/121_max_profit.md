---
layout: "html_wrapper.njk"
---

# Best Time to Buy and Sell Stock

Choose one day to buy a stock and a later day to sell it.

Return the maximum profit, or 0 when no profitable transaction exists.

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), for profit = 6-1 = 5. The sale must follow the purchase.
Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: No profitable transaction exists, so the maximum profit is 0.

```python
class Solution(object):
    def maxProfit(self, prices):
        """
        :type prices: List[int]
        :rtype: int
        """
        min_price = float('inf')
        max_profit = 0
        for i in range(len(prices)):
            if prices[i] < min_price:
                min_price = prices[i]
            elif prices[i] - min_price > max_profit:
                max_profit = prices[i] - min_price

        return max_profit
```
