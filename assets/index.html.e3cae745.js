import{_ as e,o as n,c as i,a as d}from"./app.0a6c4110.js";const s={},a=d(`<h2 id="array-flat-flatmap" tabindex="-1"><a class="header-anchor" href="#array-flat-flatmap" aria-hidden="true">#</a> Array#{flat,flatMap}</h2><p>ECMAScript 2019 \u5728 <code>Array.prototype</code> \u4E0A\u589E\u52A0\u4E86\u4E24\u4E2A\u65B9\u6CD5:<code>flat()</code>\u548C <code>flatMap()</code>\u3002</p><p>\u8FD9\u4E24\u4E2A\u65B9\u6CD5\u4E3A\u6253\u5E73\u6570\u7EC4\u63D0\u4F9B\u4E86\u4FBF\u5229\u3002\u5982\u679C\u6CA1\u6709\u8FD9\u4E24\u4E2A\u65B9\u6CD5\uFF0C\u5219\u6253\u5E73\u6570\u7EC4\u5C31\u8981\u4F7F\u7528\u8FED\u4EE3\u6216\u9012\u5F52</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u624B\u5199\u5B9E\u73B0
/*
\u6570\u7EC4\u4E2D\u6BCF\u4E2A\u5143\u7D20\u90FD\u50CF\u4E00\u4E2A\u5B50\u8282\u70B9\uFF0C\u975E\u6570\u7EC4\u5143\u7D20\u662F\u53F6\u8282\u70B9\u3002
\u56E0\u6B64\uFF0C\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\u7684\u8F93\u5165\u6570\u7EC4\u662F\u4E00\u4E2A\u9AD8\u5EA6\u4E3A 2 \u6709 7 \u4E2A\u53F6\u8282\u70B9\u7684\u6811\u3002\u6253\u5E73\u8FD9\u4E2A\u6570\u7EC4\u672C\u8D28\u4E0A\u662F\u5BF9\u53F6\u8282\u70B9\u7684\u6309
\u5E8F\u904D\u5386\u3002

\u7B2C\u4E00\u4E2A\u53C2\u6570:\u6E90\u6570\u7EC4
\u7B2C\u4E8C\u4E2A\u53C2\u6570:\u6307\u5B9A\u6253\u5E73\u5230\u7B2C\u51E0\u7EA7\u5D4C\u5957
\u7B2C\u4E09\u4E2A\u53C2\u6570:\u65B0\u6570\u7EC4

*/

function flatten(sourceArray, depth, flattenedArray = []) {
  for (const element of sourceArray) {
    if (Array.isArray(element) &amp;&amp; depth &gt; 0) {
      flatten(element, depth - 1, flattenedArray);
    } else {
      flattenedArray.push(element);
    }
  }
  return flattenedArray;
}

const arr = [[0], 1, 2, [3, [4, 5]], 6];

console.log(flatten(arr, 1));

// [0, 1, 2, 3, [4, 5], 6]
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6570\u7EC4\u7684\u6210\u5458\u6709\u65F6\u8FD8\u662F\u6570\u7EC4\uFF0C<code>Array.prototype.flat()</code>\u7528\u4E8E\u5C06\u5D4C\u5957\u7684\u6570\u7EC4 \u201C\u62C9\u5E73\u201D\uFF0C\u53D8\u6210\u4E00\u7EF4\u7684\u6570\u7EC4\u3002\u8BE5\u65B9\u6CD5\u8FD4\u56DE\u4E00\u4E2A\u65B0\u6570\u7EC4\uFF0C\u5BF9\u539F\u6570\u636E\u6CA1\u6709\u5F71\u54CD\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat());
// expected output: [0, 1, 2, 3, 4]

const arr2 = [0, 1, 2, [[[3, 4]]]];

console.log(arr2.flat(2));
// expected output: [0, 1, 2, [3, 4]]
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>flatMap()</code>\u53EA\u80FD\u5C55\u5F00\u4E00\u5C42\u6570\u7EC4\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u76F8\u5F53\u4E8E [[[2]], [[4]], [[6]], [[8]]].flat()
[1, 2, 3, 4].flatMap((x) =&gt; [[x * 2]]);
// [[2], [4], [6], [8]]
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5178\u578B\u573A\u666F: \u5C06\u5305\u542B\u51E0\u53E5\u8BDD\u7684\u6570\u7EC4\u62C6\u5206\u6210\u5355\u4E2A\u8BCD\u7EC4\u6210\u7684\u65B0\u6570\u7EC4</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>let arr1 = [&quot;it&#39;s Sunny in&quot;, &quot;&quot;, &quot;California&quot;];

arr1.map((x) =&gt; x.split(&quot; &quot;));
// [[&quot;it&#39;s&quot;,&quot;Sunny&quot;,&quot;in&quot;],[&quot;&quot;],[&quot;California&quot;]]

arr1.flatMap((x) =&gt; x.split(&quot; &quot;));
// [&quot;it&#39;s&quot;,&quot;Sunny&quot;,&quot;in&quot;, &quot;&quot;, &quot;California&quot;]
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8BE6\u7EC6\u5185\u5BB9\u53C2\u8003 <a href="https://link.juejin.cn/?target=https%3A%2F%2Fes6.ruanyifeng.com%2F%23docs%2Farray%23%25E6%2595%25B0%25E7%25BB%2584%25E5%25AE%259E%25E4%25BE%258B%25E7%259A%2584-flat%25EF%25BC%258CflatMap" target="_blank" rel="noopener noreferrer">ES \u5165\u95E8 - flat</a></p><h2 id="object-fromentries" tabindex="-1"><a class="header-anchor" href="#object-fromentries" aria-hidden="true">#</a> Object.fromEntries</h2><p>\u63D0\u51FA\u80CC\u666F: \u524D\u7AEF\u4F7F\u7528 Map \u7ED3\u6784\u5B58\u50A8\u6570\u636E\uFF0C\u4F46\u662F\u8C03\u7528\u540E\u7AEF API \u65F6\u9700\u8981\u4F20\u9012\u666E\u901A\u5BF9\u8C61\uFF0C\u8FD9\u65F6\u5019\u5C31\u53EF\u4EE5\u4F7F\u7528<code>Object.fromEntries()</code>\u8FDB\u884C\u8F6C\u6362</p><p><code>Object.fromEntries</code> \u662F\u4E0E <code>Object.entries()</code> \u76F8\u53CD\u7684\u65B9\u6CD5\uFF0C\u7528\u4E8E\u5C06\u4E00\u4E2A\u952E\u503C\u5BF9\u6570\u7EC4\u8F6C\u4E3A\u5BF9\u8C61\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Object.fromEntries([
  [&quot;foo&quot;, &quot;bar&quot;],
  [&quot;baz&quot;, 42],
]);
// { foo: &quot;bar&quot;, baz: 42 }
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8BE5\u65B9\u6CD5\u7684\u4E3B\u8981\u76EE\u7684\uFF0C\u662F\u5C06\u952E\u503C\u5BF9\u7684\u6570\u636E\u7ED3\u6784\u8FD8\u539F\u4E3A\u5BF9\u8C61\uFF0C\u56E0\u6B64\u7279\u522B\u9002\u5408\u5C06 <code>Map</code> \u7ED3\u6784\u8F6C\u4E3A\u5BF9\u8C61\u3002</p><p>\u4F7F\u7528\u573A\u666F:</p><h3 id="map-\u952E\u503C\u5BF9\u7ED3\u6784\u8F6C\u6362\u4E3A\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#map-\u952E\u503C\u5BF9\u7ED3\u6784\u8F6C\u6362\u4E3A\u5BF9\u8C61" aria-hidden="true">#</a> Map \u952E\u503C\u5BF9\u7ED3\u6784\u8F6C\u6362\u4E3A\u5BF9\u8C61</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u4F8B\u4E00
const entries = new Map([
  [&quot;foo&quot;, &quot;bar&quot;],
  [&quot;baz&quot;, 42],
]);

Object.fromEntries(entries);
// { foo: &quot;bar&quot;, baz: 42 }

// \u4F8B\u4E8C
const map = new Map().set(&quot;foo&quot;, true).set(&quot;bar&quot;, false);
Object.fromEntries(map);
// { foo: true, bar: false }
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="array-\u8F6C\u5316\u4E3A-object" tabindex="-1"><a class="header-anchor" href="#array-\u8F6C\u5316\u4E3A-object" aria-hidden="true">#</a> Array \u8F6C\u5316\u4E3A Object</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const arr = [
  [&quot;0&quot;, &quot;a&quot;],
  [&quot;1&quot;, &quot;b&quot;],
  [&quot;2&quot;, &quot;c&quot;],
];
const obj = Object.fromEntries(arr);
console.log(obj); // { 0: &quot;a&quot;, 1: &quot;b&quot;, 2: &quot;c&quot; }
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6D4F\u89C8\u5668\u67E5\u8BE2\u53C2\u6570\u8F6C\u6362\u4E3A\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#\u6D4F\u89C8\u5668\u67E5\u8BE2\u53C2\u6570\u8F6C\u6362\u4E3A\u5BF9\u8C61" aria-hidden="true">#</a> \u6D4F\u89C8\u5668\u67E5\u8BE2\u53C2\u6570\u8F6C\u6362\u4E3A\u5BF9\u8C61</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>let query = Object.fromEntries(new URLSearchParams(&quot;foo=bar&amp;baz=qux&quot;));
// {foo: &quot;bar&quot;, baz: &quot;qux&quot;}
console.log(query);
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5C06\u5BF9\u8C61\u7684\u503C\u91CD\u65B0\u7EC4\u5408" tabindex="-1"><a class="header-anchor" href="#\u5C06\u5BF9\u8C61\u7684\u503C\u91CD\u65B0\u7EC4\u5408" aria-hidden="true">#</a> \u5C06\u5BF9\u8C61\u7684\u503C\u91CD\u65B0\u7EC4\u5408</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>let arr = [
  { name: &quot;Alice&quot;, age: 40 },
  { name: &quot;Bob&quot;, age: 36 },
];
let obj = Object.fromEntries(arr.map(({ name, age }) =&gt; [name, age]));
// {Alice: 40, Bob: 36}
console.log(obj);
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="string-trimstart-trimend" tabindex="-1"><a class="header-anchor" href="#string-trimstart-trimend" aria-hidden="true">#</a> String#{trimStart,trimEnd}</h2><p>ES2019 \u5BF9\u5B57\u7B26\u4E32\u5B9E\u4F8B\u65B0\u589E\u4E86<code>trimStart()</code>\u548C<code>trimEnd()</code>\u8FD9\u4E24\u4E2A\u65B9\u6CD5\u3002\u5B83\u4EEC\u7684\u884C\u4E3A\u4E0E<code>trim()</code>\u4E00\u81F4\uFF0C</p><ul><li><code>trimStart()</code>\u6D88\u9664\u5B57\u7B26\u4E32\u5934\u90E8\u7684\u7A7A\u683C\uFF0C</li><li><code>trimEnd()</code>\u6D88\u9664\u5C3E\u90E8\u7684\u7A7A\u683C\u3002</li></ul><p>\u5B83\u4EEC\u8FD4\u56DE\u7684\u90FD\u662F\u65B0\u5B57\u7B26\u4E32\uFF0C\u4E0D\u4F1A\u4FEE\u6539\u539F\u59CB\u5B57\u7B26\u4E32\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const s = &quot;  abc  &quot;;

s.trim(); // &quot;abc&quot;
s.trimStart(); // &quot;abc  &quot;
s.trimEnd(); // &quot;  abc&quot;
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="symbol-description" tabindex="-1"><a class="header-anchor" href="#symbol-description" aria-hidden="true">#</a> Symbol#description</h2><p>\u521B\u5EFA <code>Symbol</code> \u7684\u65F6\u5019\uFF0C\u53EF\u4EE5\u6DFB\u52A0\u4E00\u4E2A\u63CF\u8FF0\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const sym = Symbol(&quot;foo&quot;);
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C<code>sym</code> \u7684\u63CF\u8FF0\u5C31\u662F\u5B57\u7B26\u4E32 <code>foo</code>\u3002</p><p>\u4F46\u662F\uFF0C\u8BFB\u53D6\u8FD9\u4E2A\u63CF\u8FF0\u9700\u8981\u5C06 <code>Symbol</code> \u663E\u5F0F\u8F6C\u4E3A\u5B57\u7B26\u4E32\uFF0C\u5373\u4E0B\u9762\u7684\u5199\u6CD5\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const sym = Symbol(&quot;foo&quot;);

String(sym); // &quot;Symbol(foo)&quot;
sym.toString(); // &quot;Symbol(foo)&quot;
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u7684\u7528\u6CD5\u4E0D\u662F\u5F88\u65B9\u4FBF\u3002ES2019 \u63D0\u4F9B\u4E86\u4E00\u4E2A\u5B9E\u4F8B\u5C5E\u6027 <code>description</code>\uFF0C\u76F4\u63A5\u8FD4\u56DE Symbol \u7684\u63CF\u8FF0\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const sym = Symbol(&quot;foo&quot;);

sym.description; // &quot;foo&quot;
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ES2019 \u63D0\u4F9B\u4E86\u4E00\u4E2A\u5B9E\u4F8B\u5C5E\u6027<code>description</code>\uFF0C\u76F4\u63A5\u8FD4\u56DE Symbol \u7684\u63CF\u8FF0\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u521B\u5EFA Symbol \u7684\u65F6\u5019\uFF0C\u53EF\u4EE5\u6DFB\u52A0\u4E00\u4E2A\u63CF\u8FF0\u3002
const sym = Symbol(&quot;foo&quot;);

sym.description; // &quot;foo&quot;
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C<code>sym</code> \u7684\u63CF\u8FF0\u5C31\u662F\u5B57\u7B26\u4E32 <code>foo</code>\u3002</p><h2 id="try-catch-optional-binding" tabindex="-1"><a class="header-anchor" href="#try-catch-optional-binding" aria-hidden="true">#</a> try {} catch {} // optional binding</h2><p>\u65E7\u7248\u672C\u7684<code>try / catch</code>\u8BED\u53E5\u4E2D\u7684<code>catch</code>\u5B50\u53E5\u9700\u8981\u4E00\u4E2A\u53D8\u91CF\u3002 \u73B0\u5728\u53EF\u4EE5\u4E0D\u52A0\u4E86</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u65E7\u7248\u672C
try {
  console.log(a);
} catch (error) {
  console.log(&quot;\u62A5\u9519\u4E86&quot;);
}

// ES2019-SE10

// \u5982\u679C\u6211\u4EEC\u5BF9\u9519\u8BEF\u4FE1\u606F\u6F20\u4E0D\u5173\u5FC3\uFF0C\u53EA\u60F3\u77E5\u9053\u662F\u5426\u62A5\u9519\uFF0C\u5C31\u53EF\u4EE5\u5FFD\u7565catch\u7684\u53C2\u6570
try {
  console.log(a);
  return true;
} catch {
  console.log(&quot;\u62A5\u9519\u4E86&quot;);
  return false;
}
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="u-2028-\u548C-u-2029" tabindex="-1"><a class="header-anchor" href="#u-2028-\u548C-u-2029" aria-hidden="true">#</a> U+2028 \u548C U+2029</h2><p>\u5728 ES2019 \u4E4B\u524D\u7684\u7248\u672C\u4E2D\uFF0C\u4E0D\u63A5\u53D7\u4E0D\u8F6C\u4E49\u7684</p><ul><li>\u884C\u5206\u9694\u7B26<code>U + 2028</code></li><li>\u6BB5\u843D\u5206\u9694\u7B26<code>U + 2029</code></li></ul><p>ES2019 \u5141\u8BB8 JavaScript \u5B57\u7B26\u4E32\u76F4\u63A5\u8F93\u5165 U+2028\uFF08\u884C\u5206\u9694\u7B26\uFF09\u548C U+2029\uFF08\u6BB5\u5206\u9694\u7B26\uFF09\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/*
ES2019\u4E4B\u524D\uFF0C\u4E0B\u9762\u7684\u4EE3\u7801\u4F1A\u62A5\u9519

ES2019 \u4E0B\u9762\u4EE3\u7801\u4E0D\u4F1A\u62A5\u9519\u3002
*/
const PS = eval(&quot;&#39;\\u2029&#39;&quot;);
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://link.juejin.cn/?target=https%3A%2F%2Fes6.ruanyifeng.com%2F%23docs%2Fstring%23%25E7%259B%25B4%25E6%258E%25A5%25E8%25BE%2593%25E5%2585%25A5-U-2028-%25E5%2592%258C-U-2029" target="_blank" rel="noopener noreferrer">ES \u5165\u95E8 - U+2028 \u548C U+2029</a></p><h2 id="json-stringify-\u7684\u6539\u9020" tabindex="-1"><a class="header-anchor" href="#json-stringify-\u7684\u6539\u9020" aria-hidden="true">#</a> JSON-stringify - \u7684\u6539\u9020</h2><p>\u4E3A\u4E86\u786E\u4FDD\u8FD4\u56DE\u7684\u662F\u5408\u6CD5\u7684 UTF-8 \u5B57\u7B26\uFF0CES2019 \u6539\u53D8\u4E86 <code>JSON.stringify()</code>\u7684\u884C\u4E3A\u3002\u5982\u679C\u9047\u5230 <code>0xD800</code> \u5230 <code>0xDFFF</code> \u4E4B\u95F4\u7684\u5355\u4E2A\u7801\u70B9\uFF0C\u6216\u8005\u4E0D\u5B58\u5728\u7684\u914D\u5BF9\u5F62\u5F0F\uFF0C\u5B83\u4F1A\u8FD4\u56DE\u8F6C\u4E49\u5B57\u7B26\u4E32\uFF0C\u7559\u7ED9\u5E94\u7528\u81EA\u5DF1\u51B3\u5B9A\u4E0B\u4E00\u6B65\u7684\u5904\u7406\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>JSON.stringify(&quot;\\u{D834}&quot;); // &quot;&quot;\\\\uD834&quot;&quot;
JSON.stringify(&quot;\\uDF06\\uD834&quot;); // &quot;&quot;\\\\udf06\\\\ud834&quot;&quot;
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://link.juejin.cn/?target=https%3A%2F%2Fes6.ruanyifeng.com%2F%23docs%2Fstring%23JSON-stringify-%25E7%259A%2584%25E6%2594%25B9%25E9%2580%25A0" target="_blank" rel="noopener noreferrer">ES \u5165\u95E8 - JSON-stringify - \u7684\u6539\u9020</a></p><h2 id="array-prototype-sort-\u7684\u7A33\u5B9A\u6392\u5E8F" tabindex="-1"><a class="header-anchor" href="#array-prototype-sort-\u7684\u7A33\u5B9A\u6392\u5E8F" aria-hidden="true">#</a> Array.prototype.sort() \u7684\u7A33\u5B9A\u6392\u5E8F</h2><p>\u65E9\u5148\u7684 ECMAScript \u6CA1\u6709\u89C4\u5B9A\uFF0C<code>Array.prototype.sort()</code>\u7684\u9ED8\u8BA4\u6392\u5E8F\u7B97\u6CD5\u662F\u5426\u7A33\u5B9A\uFF0C\u7559\u7ED9\u6D4F\u89C8\u5668\u81EA\u5DF1\u51B3\u5B9A\uFF0C\u8FD9\u5BFC\u81F4\u67D0\u4E9B\u5B9E\u73B0\u662F\u4E0D\u7A33\u5B9A\u7684\u3002<strong>ES2019</strong> \u660E\u786E\u89C4\u5B9A\uFF0C<code>Array.prototype.sort()</code>\u7684\u9ED8\u8BA4\u6392\u5E8F\u7B97\u6CD5\u5FC5\u987B\u7A33\u5B9A\u3002\u8FD9\u4E2A\u89C4\u5B9A\u5DF2\u7ECF\u505A\u5230\u4E86\uFF0C\u73B0\u5728 JavaScript \u5404\u4E2A\u4E3B\u8981\u5B9E\u73B0\u7684\u9ED8\u8BA4\u6392\u5E8F\u7B97\u6CD5\u90FD\u662F\u7A33\u5B9A\u7684\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const arr = [&quot;peach&quot;, &quot;straw&quot;, &quot;apple&quot;, &quot;spork&quot;];

const stableSorting = (s1, s2) =&gt; {
  if (s1[0] &lt; s2[0]) return -1;
  return 1;
};

arr.sort(stableSorting);
// [&quot;apple&quot;, &quot;peach&quot;, &quot;straw&quot;, &quot;spork&quot;]
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://link.juejin.cn/?target=https%3A%2F%2Fes6.ruanyifeng.com%2F%23docs%2Farray%23Array-prototype-sort-%25E7%259A%2584%25E6%258E%2592%25E5%25BA%258F%25E7%25A8%25B3%25E5%25AE%259A%25E6%2580%25A7" target="_blank" rel="noopener noreferrer">ES \u5165\u95E8 - \u6392\u5E8F\u7A33\u5B9A\u6027</a></p><h2 id="revised-function-tostring" tabindex="-1"><a class="header-anchor" href="#revised-function-tostring" aria-hidden="true">#</a> revised Function#toString</h2><p>ES2019 \u5BF9\u51FD\u6570\u5B9E\u4F8B\u7684 <code>toString()</code>\u65B9\u6CD5\u505A\u51FA\u4E86\u4FEE\u6539\u3002</p><p><code>toString()</code>\u65B9\u6CD5\u8FD4\u56DE\u51FD\u6570\u4EE3\u7801\u672C\u8EAB\uFF0C\u4EE5\u524D\u4F1A\u7701\u7565\u6CE8\u91CA\u548C\u7A7A\u683C\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function /* foo comment */ foo() {}

// \u8001\u7248\u672C
foo.toString();
// function foo() {}

// \u65B0\u7248
foo.toString();
// &quot;function /* foo comment */ foo () {}&quot;
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,62),r=[a];function t(l,o){return n(),i("div",null,r)}var u=e(s,[["render",t],["__file","index.html.vue"]]);export{u as default};
