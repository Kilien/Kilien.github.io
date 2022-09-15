import{_ as n,o as s,c as a,a as t}from"./app.6fedf891.js";const e={},p=t(`<p><strong>Leetcode 232.Implement Queue using Stacks</strong></p><p>Implement the following operations of a queue using stacks.</p><ul><li>push(x) \u2014 Push element x to the back of queue.</li><li>pop() \u2014 Removes the element from in front of queue.</li><li>peek() \u2014 Get the front element.</li><li>empty() \u2014 Return whether the queue is empty.</li></ul><p><strong>Example:</strong></p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>MyQueue queue <span class="token operator">=</span> new MyQueue<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

queue<span class="token punctuation">.</span>push<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
queue<span class="token punctuation">.</span>push<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
queue<span class="token punctuation">.</span>peek<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token operator">//</span> returns <span class="token number">1</span>
queue<span class="token punctuation">.</span>pop<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token operator">//</span> returns <span class="token number">1</span>
queue<span class="token punctuation">.</span>empty<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token operator">//</span> returns false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># @Author\uFF1AKilien</span>
<span class="token comment"># @lc app=leetcode id=232 lang=python3</span>
<span class="token comment"># [232] Implement Queue using Stacks</span>
<span class="token comment"># time:O(1) space:O(n)</span>
<span class="token comment">#\u601D\u8DEF\uFF1A\u4E24\u4E2A\u6570\u7EC4\uFF0C\u6A21\u62DF\u5165\u6808\u51FA\u6808\uFF0C\u5B9E\u73B0\u961F\u5217\uFF1B\u5177\u4F53\u89C1\u56FE\u89E3</span>
<span class="token keyword">class</span> <span class="token class-name">MyQueue</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;
        initialize your data structure here.
        &quot;&quot;&quot;</span>
        self<span class="token punctuation">.</span>inStack<span class="token punctuation">,</span> self<span class="token punctuation">.</span>outStack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

    <span class="token keyword">def</span> <span class="token function">push</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> x<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;
        :type x: int
        :rtype: nothing
        &quot;&quot;&quot;</span>
        self<span class="token punctuation">.</span>inStack<span class="token punctuation">.</span>append<span class="token punctuation">(</span>x<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">pop</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;
        :rtype: nothing
        &quot;&quot;&quot;</span>
        self<span class="token punctuation">.</span>move<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>outStack<span class="token punctuation">.</span>pop<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">peek</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;
        :rtype: int
        &quot;&quot;&quot;</span>
        self<span class="token punctuation">.</span>move<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>outStack<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>

    <span class="token keyword">def</span> <span class="token function">empty</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;
        :rtype: bool
        &quot;&quot;&quot;</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token keyword">not</span> self<span class="token punctuation">.</span>inStack<span class="token punctuation">)</span> <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token keyword">not</span> self<span class="token punctuation">.</span>outStack<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">move</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;
        :rtype nothing
        &quot;&quot;&quot;</span>
        <span class="token keyword">if</span> <span class="token keyword">not</span> self<span class="token punctuation">.</span>outStack<span class="token punctuation">:</span>
            <span class="token keyword">while</span> self<span class="token punctuation">.</span>inStack<span class="token punctuation">:</span>
                self<span class="token punctuation">.</span>outStack<span class="token punctuation">.</span>append<span class="token punctuation">(</span>self<span class="token punctuation">.</span>inStack<span class="token punctuation">.</span>pop<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># Your MyQueue object will be instantiated and called as such:</span>
<span class="token comment"># obj = MyQueue()</span>
<span class="token comment"># obj.push(x)</span>
<span class="token comment"># param_2 = obj.pop()</span>
<span class="token comment"># param_3 = obj.peek()</span>
<span class="token comment"># param_4 = obj.empty()</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u521D\u59CB\u5EFA\u4E24\u4E2A\u6570\u7EC4\u6A21\u62DF\u6808\uFF1A</p><p><img src="https://cdn.jsdelivr.net/gh/KiLien/Pics/Algm/LC_232_stack1.png" alt=""></p><p>\u5B57\u7B26\u4E32\u201D1\uFF0C2\uFF0C3\u201C\u5165\u6808\uFF1A</p><p><img src="https://cdn.jsdelivr.net/gh/KiLien/Pics/Algm/LC_232_stack2.png" alt=""></p><p>\u201D1\uFF0C2\uFF0C3\u201C\u79FB\u52A8\u81F3 outStack\uFF1A <img src="https://cdn.jsdelivr.net/gh/KiLien/Pics/Algm/LC_232_stack3.png" alt=""></p><p>\u201D4\uFF0C5\u201C\u5165\u6808\uFF0C\u201D1\uFF0C2\uFF0C3\u201C\u4F9D\u6B21\u51FA\u6808\uFF0C\u8F93\u51FA\u5B57\u7B26\u4E32\u201D1\uFF0C2\uFF0C3\u201C\uFF1A <img src="https://cdn.jsdelivr.net/gh/KiLien/Pics/Algm/LC_232_stack4.png" alt=""></p><p>\u201D4\uFF0C5\u201C\u79FB\u52A8\u81F3 outStack\uFF1A <img src="https://cdn.jsdelivr.net/gh/KiLien/Pics/Algm/LC_232_stack5.png" alt=""></p><p>\u8F93\u51FA\u201D4\uFF0C5\u201C\uFF1A <img src="https://cdn.jsdelivr.net/gh/KiLien/Pics/Algm/LC_232_stack6.png" alt=""></p>`,14),i=[p];function o(c,u){return s(),a("div",null,i)}var d=n(e,[["render",o],["__file","index.html.vue"]]);export{d as default};
