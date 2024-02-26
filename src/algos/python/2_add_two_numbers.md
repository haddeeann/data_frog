---
layout: "html_wrapper.njk"
---

## Add Two Numbers
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

### Example 1:

```
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
```

### Example 2:

```
Input: l1 = [0], l2 = [0]
Output: [0]
```

### Example 3:

```
Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
Explanation: 9,999,999 + 9,999 = 10,009,998
```

```python
# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution(object):
    def addTwoNumbers(self, l1, l2):
        """
        :type l1: ListNode
        :type l2: ListNode
        :rtype: ListNode
        """
        return_list = ListNode()
        loop = return_list

        l1_list = l1
        l2_list = l2
        carry = 0

        while l1_list is not None or l2_list is not None:
            # find the add in
            if l1_list is not None and l2_list is not None:
                addSum = l1_list.val + l2_list.val + carry
            elif l1_list is not None:
                addSum = l1_list.val + carry
            elif l2_list is not None:
                addSum = l2_list.val + carry

            if addSum > 9:
                strSum = str(addSum)
                loop.val = int(strSum[1])
                carry = int(strSum[0])
            else:
                loop.val = addSum
                carry = 0

            if (l1_list is not None and l1_list.next is not None) or (l2_list is not None and l2_list.next is not None):
                loop.next = ListNode()

            # loop replacements
            l1_list = l1_list.next if l1_list is not None else None
            l2_list = l2_list.next if l2_list is not None else None

            if l1_list is None and l2_list is None and carry != 0:
                new_node = ListNode()
                new_node.val = 1
                loop.next = new_node
            else:
                loop = loop.next

        return return_list
```