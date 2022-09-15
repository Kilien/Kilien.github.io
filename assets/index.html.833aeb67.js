import{_ as e,o as i,c as n,a as s}from"./app.73ef3f56.js";const l={},d=s(`<h1 id="linked-list-cycle" tabindex="-1"><a class="header-anchor" href="#linked-list-cycle" aria-hidden="true">#</a> Linked List Cycle</h1><p><strong>Leetcode 141.Linked List Cycle</strong> Given a linked list, determine if it has a cycle in it. To represent a cycle in the given linked list, we use an integerposwhich represents the position (0-indexed)in the linked list where tail connects to. Ifposis-1, then there is no cycle in the linked list.</p><p><strong>Example :</strong></p><p><strong>Input:</strong> head = [3,2,0,-4], pos = 1</p><p><strong>Output:</strong> true</p><p><strong>Explanation:</strong> There is a cycle in the linked list, where tail connects to the second node.</p><p>\u9898\u610F\uFF1A \u7ED9\u5B9A\u4E00\u4E2A\u94FE\u8868\uFF0C\u5224\u65AD\u94FE\u8868\u4E2D\u662F\u5426\u6709\u73AF\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># Author:kilien
# Leetcode 141.Linked List Cycle
# \u601D\u8DEF1\uFF1A\u4F7F\u7528set\u8BB0\u5F55\u94FE\u8868\u5143\u7D20\uFF0C\u91CD\u590D\u5373\u6709\u73AF
# time:O(n) space:O(n)
class Solution(object):
    def hasCycle(self, head):
        &quot;&quot;&quot;
        :type head: ListNode
        :rtype: bool
        &quot;&quot;&quot;
        key = set()
        while head:
            if head in key:
                return True
            else:
                key.add(head)
            head = head.next
        return False


# \u601D\u8DEF2\uFF1A\u4F7F\u7528\u5FEB\u6162\u6307\u9488\uFF0C\u5F53\u4E24\u8005\u76F8\u9047\u5219\u6709\u73AF
# time\uFF1AO(n) space:O(1)
# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution(object):
    def hasCycle(self, head):
        &quot;&quot;&quot;
        :type head: ListNode
        :rtype: bool
        &quot;&quot;&quot;
        fast = slow = head
        while fast and slow and fast.next:
            fast = fast.next.next
            slow = slow.next
            if fast is slow:
                return True
        return False
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FC7\u7A0B\u5982\u56FE\uFF1A</p><p><img src="https://cdn.jsdelivr.net/gh/KiLien/Pics/Algm/LC_141_ListCycle1.png" alt=""></p><p><img src="https://cdn.jsdelivr.net/gh/KiLien/Pics/Algm/LC_141_ListCycle2.png" alt=""></p><p><img src="https://cdn.jsdelivr.net/gh/KiLien/Pics/Algm/LC_141_ListCycle3.png" alt=""></p><p><img src="https://cdn.jsdelivr.net/gh/KiLien/Pics/Algm/LC_141_ListCycle4.png" alt=""></p>`,13),t=[d];function a(c,r){return i(),n("div",null,t)}var o=e(l,[["render",a],["__file","index.html.vue"]]);export{o as default};
