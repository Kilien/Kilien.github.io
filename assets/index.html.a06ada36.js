import{_ as e,o as n,c as i,a as s}from"./app.6fedf891.js";const l={},a=s(`<p><strong>Leetcode 20.Valid Parentheses</strong></p><p>Given a string containing just the characters\u2019(\u2018,\u2019)\u2019,\u2019{\u2018,\u2019}\u2019,\u2019[\u2018and\u2019]\u2019, determine if the input string is valid. An input string is valid if:</p><ol><li>Open brackets must be closed by the same type of brackets.</li><li>Open brackets must be closed in the correct order.</li></ol><p>Note that an empty string isalso considered valid.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Example1\uFF1A
Input: \u201C()[]{}\u201D
Output: true

Example2:
Input: \u201C([)]\u201D
Output: false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Python ext-Python line-numbers-mode"><pre class="language-Python"><code># @Author\uFF1AKilien
# @lc app=leetcode id=20 lang=python3
#
# [20] Valid Parentheses
# \u601D\u8DEF\uFF1A\u4F7F\u7528hashtable\u6807\u8BB0\u62EC\u53F7\uFF0C\u62C6\u5206\u5B57\u7B26\u4E32
# \u82E5\u5B57\u7B26\u4E32\u4E0D\u5728hashtable\u4E2D\uFF0C\u6A21\u62DF\u5165\u6808
# \u82E5\u6808\u4E0D\u4E3A\u7A7A\uFF0C\u6808\u9876\u5143\u7D20\u51FA\u6808\uFF0C\u5339\u914D\u62EC\u53F7\u5219\u6D88\u9664\uFF0C\u4E0D\u5339\u914D\u5219\u62A5\u9519
class Solution:
    def isValid(self, s: str) -&gt; bool:
        stack = []
        par_map = {&#39;)&#39;:&#39;(&#39;,&#39;]&#39;:&#39;[&#39;,&#39;}&#39;:&#39;{&#39;}

        for c in s:
            if c not in par_map:
                stack.append(c)
            elif not stack or par_map[c] != stack.pop():
                return False
        return not stack

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),d=[a];function t(r,c){return n(),i("div",null,d)}var u=e(l,[["render",t],["__file","index.html.vue"]]);export{u as default};
