---
layout: "html_wrapper.njk"
---

# Linked List Cycle II

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to (0-indexed). It is -1 if there is no cycle. Note that pos is not passed as a parameter.

Do not modify the linked list.

Example 1:


Input: head = [3,2,0,-4], pos = 1
Output: tail connects to node index 1
Explanation: There is a cycle in the linked list, where tail connects to the second node.
Example 2:


Input: head = [1,2], pos = 0
Output: tail connects to node index 0
Explanation: There is a cycle in the linked list, where tail connects to the first node.
Example 3:


Input: head = [1], pos = -1
Output: no cycle
Explanation: There is no cycle in the linked list.

```python
# Definition for singly-linked list.
class ListNode(object):
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution(object):
    def detectCycle(self, head):
        """
        :type head: ListNode
        :rtype: ListNode
        """
        h = {}
        while head and head.next:
            if head in h:
                return h
            h[head] = 0
            head = head.next


# https://stackoverflow.com/questions/71569455/traverse-listnode-in-python
def createLinkedList(values):
    h = None
    for val in reversed(values):
        h = ListNode(val, h)

    return h


l = createLinkedList([3, 2, 0, -4, 2, 5])
s = Solution()
s.detectCycle(l)
```
