import{_ as i,o as e,c as n,d as s}from"./app.5a27c236.js";const d={},l=s(`<p><strong>Leetcode 242.Valid Anagram</strong></p><p>Given two strings <em>s</em> and <em>t</em> , write a function to determine if <em>t</em> is an anagram of <em>s</em>.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Example\uFF1A
Input: s = \u201Canagram\u201D, t = \u201Cnagaram\u201D
Output: true

Input: s = \u201Crat\u201D, t = \u201Ccar\u201D
Output: false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-Python ext-Python line-numbers-mode"><pre class="language-Python"><code># @Author\uFF1AKilien
# @lc app=leetcode id=242 lang=python3
#
# [242] Valid Anagram
#
class Solution:

# \u601D\u8DEF\uFF1A\u6570\u7EC4\u6392\u5E8F\u540E\u6BD4\u8F83\u5DEE\u5F02
#    def isAnagram(self, s: str, t: str) -&gt; bool:
#        return sorted(s) == sorted(t)

# \u601D\u8DEF\uFF1A\u624B\u52A8\u6A21\u62DFhashtable\uFF0C\u5C06\u5B57\u7B26\u4E32\u201Da-z\u201C\u7684ASCII\u7801\u4F5Ckey\uFF0C
#\u8BA1\u6570\u6C42\u5DEE\u5F02
    def isAnagram(self, s: str, t: str) -&gt; bool:
        arr1, arr2 = [0]*26, [0]*26
        for i in s:
            arr1[ord(i) - ord(&#39;a&#39;)] += 1
        for i in t:
            arr2[ord(i) - ord(&#39;a&#39;)] += 1
        return arr1 == arr2

# \u601D\u8DEF\uFF1Amap\u8BA1\u6570\uFF0C\u5BF9\u6BD4\u8BA1\u6570\u5DEE\u5F02
&quot;&quot;&quot;
    def isAnagram(self, s: str, t: str) -&gt; bool:
        dict1, dict2 = {}, {}
        for item in s:
            dict1[item] = dict1.get(item,0) + 1
        for item in t:
            dict2[item] = dict2.get(item,0) + 1
        return dict1 == dict2
&quot;&quot;&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),r=[l];function a(t,v){return e(),n("div",null,r)}var m=i(d,[["render",a],["__file","index.html.vue"]]);export{m as default};
