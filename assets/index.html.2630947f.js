import{_ as n,o as s,c as a,d as e}from"./app.73491e54.js";const t={},p=e(`<h1 id="implement-stack-using-queues" tabindex="-1"><a class="header-anchor" href="#implement-stack-using-queues" aria-hidden="true">#</a> Implement Stack using Queues</h1><p><strong>Leetcode 225. Implement Stack using Queues</strong></p><p>Implement the following operations of a stack using queues.</p><ul><li>push(x) \u2014 Push element x onto stack.</li><li>pop() \u2014 Removes the element on top of the stack.</li><li>top() \u2014 Get the top element.</li><li>empty() \u2014 Return whether the stack is empty.</li></ul><p><strong>Example:</strong></p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>MyStack stack <span class="token operator">=</span> new MyStack<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

stack<span class="token punctuation">.</span>push<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
stack<span class="token punctuation">.</span>push<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
stack<span class="token punctuation">.</span>top<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token operator">//</span> returns <span class="token number">2</span>
stack<span class="token punctuation">.</span>pop<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token operator">//</span> returns <span class="token number">2</span>
stack<span class="token punctuation">.</span>empty<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token operator">//</span> returns false

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># @Author\uFF1AKilien</span>
<span class="token comment"># @lc app=leetcode id=225 lang=python3</span>
<span class="token comment"># [225] Implement Stack using Queues</span>
<span class="token comment"># time:O(1)  space:O(n)</span>
<span class="token comment"># \u601D\u8DEF\uFF1A\u53CC\u7AEF\u961F\u5217\uFF0C\u5DE6\u8FDB\u53F3\u51FA\u6A21\u62DF\u6808</span>
<span class="token keyword">class</span> <span class="token class-name">MyStack</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;
        Initialize your data structure here.
        &quot;&quot;&quot;</span>
        self<span class="token punctuation">.</span>stack <span class="token operator">=</span> collections<span class="token punctuation">.</span>deque<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
        

    <span class="token keyword">def</span> <span class="token function">push</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> x<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;
        Push element x onto stack.
        &quot;&quot;&quot;</span>
        self<span class="token punctuation">.</span>stack<span class="token punctuation">.</span>append<span class="token punctuation">(</span>x<span class="token punctuation">)</span>


    <span class="token keyword">def</span> <span class="token function">pop</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token builtin">int</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;
        Removes the element on top of the stack and returns that element.
        &quot;&quot;&quot;</span>
        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>stack<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            self<span class="token punctuation">.</span>stack<span class="token punctuation">.</span>append<span class="token punctuation">(</span>self<span class="token punctuation">.</span>stack<span class="token punctuation">.</span>popleft<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>stack<span class="token punctuation">.</span>popleft<span class="token punctuation">(</span><span class="token punctuation">)</span>        

    <span class="token keyword">def</span> <span class="token function">top</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token builtin">int</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;
        Get the top element.
        &quot;&quot;&quot;</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>stack<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>

    <span class="token keyword">def</span> <span class="token function">empty</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token builtin">bool</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;
        Returns whether the stack is empty.
        &quot;&quot;&quot;</span>
        <span class="token keyword">return</span> <span class="token builtin">len</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>stack<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span>


<span class="token comment"># Your MyStack object will be instantiated and called as such:</span>
<span class="token comment"># obj = MyStack()</span>
<span class="token comment"># obj.push(x)</span>
<span class="token comment"># param_2 = obj.pop()</span>
<span class="token comment"># param_3 = obj.top()</span>
<span class="token comment"># param_4 = obj.empty()</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Deque</strong>\u5B9A\u4E49\uFF1A</p><blockquote><p><strong>Deque</strong>\u961F\u5217\u662F\u7531\u6808\u6216\u8005queue\u961F\u5217\u751F\u6210\u7684\uFF08\u53D1\u97F3\u662F \u201Cdeck\u201D\uFF0C\u201Ddouble-ended queue\u201D\u7684\u7B80\u79F0\uFF09\u3002 <strong>Deque</strong>\u652F\u6301\u7EBF\u7A0B\u5B89\u5168\uFF0C\u5185\u5B58\u9AD8\u6548\u6DFB\u52A0(append)\u548C\u5F39\u51FA(pop)\uFF0C\u4ECE\u4E24\u7AEF\u90FD\u53EF\u4EE5\uFF0C\u4E24\u4E2A\u65B9\u5411\u7684\u5927\u6982\u5F00\u9500\u90FD\u662F O(1) \u590D\u6742\u5EA6\u3002</p></blockquote><p><strong>Deque</strong>\u65B9\u6CD5\uFF1A</p><p><strong>append</strong>(x) \u6DFB\u52A0x\u5230\u53F3\u7AEF\u3002 <strong>appendleft</strong>(x) \u6DFB\u52A0x\u5230\u5DE6\u7AEF\u3002 <strong>pop()</strong> \u79FB\u53BB\u5E76\u4E14\u8FD4\u56DE\u4E00\u4E2A\u5143\u7D20\uFF0Cdeque\u6700\u53F3\u4FA7\u7684\u90A3\u4E00\u4E2A\u3002\u5982\u679C\u6CA1\u6709\u5143\u7D20\u7684\u8BDD\uFF0C\u5C31\u5347\u8D77 <a href="https://docs.python.org/zh-cn/3/library/exceptions.html#IndexError" target="_blank" rel="noopener noreferrer">IndexError</a> \u7D22\u5F15\u9519\u8BEF\u3002 <strong>popleft()</strong> \u79FB\u53BB\u5E76\u4E14\u8FD4\u56DE\u4E00\u4E2A\u5143\u7D20\uFF0Cdeque\u6700\u5DE6\u4FA7\u7684\u90A3\u4E00\u4E2A\u3002\u5982\u679C\u6CA1\u6709\u5143\u7D20\u7684\u8BDD\uFF0C\u5C31\u5347\u8D77 <a href="https://docs.python.org/zh-cn/3/library/exceptions.html#IndexError" target="_blank" rel="noopener noreferrer">IndexError</a> \u7D22\u5F15\u9519\u8BEF\u3002</p><div class="language-Python ext-Python line-numbers-mode"><pre class="language-Python"><code>&gt;&gt;&gt; from collections import deque
&gt;&gt;&gt; d = deque(&#39;ghi&#39;)                 # make a new deque with three items
&gt;&gt;&gt; for elem in d:                   # iterate over the deque&#39;s elements
...     print(elem.upper())
G
H
I

&gt;&gt;&gt; d.append(&#39;j&#39;)                    # add a new entry to the right side
&gt;&gt;&gt; d.appendleft(&#39;f&#39;)                # add a new entry to the left side
&gt;&gt;&gt; d                                # show the representation of the deque
deque([&#39;f&#39;, &#39;g&#39;, &#39;h&#39;, &#39;i&#39;, &#39;j&#39;])

&gt;&gt;&gt; d.pop()                          # return and remove the rightmost item
&#39;j&#39;
&gt;&gt;&gt; d.popleft()                      # return and remove the leftmost item
&#39;f&#39;
&gt;&gt;&gt; list(d)                          # list the contents of the deque
[&#39;g&#39;, &#39;h&#39;, &#39;i&#39;]
&gt;&gt;&gt; d[0]                             # peek at leftmost item
&#39;g&#39;
&gt;&gt;&gt; d[-1]                            # peek at rightmost item
&#39;i&#39;


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5177\u4F53\u53EF\u89C1\u5B98\u65B9\u6587\u6863\uFF1A <a href="https://docs.python.org/zh-cn/3/library/collections.html?highlight=deque#collections.deque" target="_blank" rel="noopener noreferrer">collections \u2014 \u5BB9\u5668\u6570\u636E\u7C7B\u578B \u2014 Python 3.7.3 \u6587\u6863</a></p>`,13),o=[p];function i(l,c){return s(),a("div",null,o)}var r=n(t,[["render",i],["__file","index.html.vue"]]);export{r as default};
