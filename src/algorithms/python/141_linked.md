---
layout: "html_wrapper.njk"
title: "Linked List Cycle"
track: "algorithms"
type: "practice"
status: "published"
difficulty: "beginner"
order: 141
series: "python"
---

Given linked-list head, determine whether the list contains a cycle.

A cycle exists when repeated traversal through next reaches an earlier node. In the examples, pos identifies the zero-based node connected to tail; it is not an input parameter.

Return true for a cycle; otherwise return false.



Example 1:


Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: The tail connects to node index 1, creating a cycle.
Example 2:


Input: head = [1,2], pos = 0
Output: true
Explanation: The tail connects to node index 0, creating a cycle.
Example 3:


Input: head = [1], pos = -1
Output: false
Explanation: The tail does not reconnect to the list.

```python
class ListNode(object):
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution(object):
    def hasCycle(self, head):
        """
        :type head: ListNode
        :rtype: bool
        """
        fast = head
        slow = head
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next
            if slow == fast:
                return True

        return False


def makeListNode(list_input):
    h = None
    for val in reversed(list_input):
        h = ListNode(val, h)
    return h


l = makeListNode([1, 2])
s = Solution()
s.hasCycle(l)
```
