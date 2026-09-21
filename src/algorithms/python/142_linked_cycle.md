---
layout: "html_wrapper.njk"
title: "Linked List Cycle II"
track: "algorithms"
type: "practice"
status: "published"
difficulty: "beginner"
order: 142
series: "python"
---

# Linked List Cycle II

A cycle exists when repeated traversal through next reaches an earlier node. In the examples, pos identifies the zero-based node connected to tail, or -1 when no cycle exists; it is not an input parameter.

Return the cycle's entry node without modifying the list.

Example 1:


Input: head = [3,2,0,-4], pos = 1
Output: tail connects to node index 1
Explanation: The tail reconnects at the second node, index 1.
Example 2:


Input: head = [1,2], pos = 0
Output: tail connects to node index 0
Explanation: The tail reconnects at the first node, index 0.
Example 3:


Input: head = [1], pos = -1
Output: no cycle
Explanation: The tail does not reconnect to the list.

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
