---
layout: "html_wrapper.njk"
---

# Remove Nth Node From End of List

Given the head of a linked list, remove the nth node from the end of the list and return its head.

Example 1:

Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]
Example 2:

Input: head = [1], n = 1
Output: []
Example 3:

Input: head = [1,2], n = 1
Output: [1]

```python
# Definition for singly-linked list.
class ListNode(object):
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution(object):
    def findLengthList(self, head):
        count = 0
        node = head
        while node:
            count += 1
            node = node.next
        return count

    def removeNode(self, head, node_remove):
        count = 0
        node = head
        answer = []
        while node:
            if count != node_remove:
                answer.append(node.val)
            node = node.next
            count += 1

        return answer

    def makeNodeList(self, values):
        h = None
        for val in reversed(values):
            h = ListNode(val, h)
        return h

    def removeNthFromEnd(self, head, n):
        """
        :type head: ListNode
        :type n: int
        :rtype: ListNode
        """
        l = self.findLengthList(head)
        node_remove = l - n
        values = self.removeNode(head, node_remove)
        print(values)
        node_answer = self.makeNodeList(values)
        return node_answer


def createLinkedList(values):
    h = None
    for val in reversed(values):
        h = ListNode(val, h)
    return h


test_case = {
    "no": "one",
    "input": ([1, 2, 3, 4, 5], 2),
    "answer": [1, 2, 3, 5],
}

s = Solution()
c = [1, 2, 3, 4, 5]
node_list = createLinkedList(c)
s.removeNthFromEnd(node_list, 2)
```