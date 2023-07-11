import{_ as e,o as a,c as s,d as n}from"./app.73491e54.js";var i="/assets/3bc9940b75b44afca2c8dab8ebeda4a0.a589ff59.png",r="/assets/3b4f6ce6c4854b5aa9979cb459b43379.16e6f495.png",l="/assets/399c606bdb084f65873fd7bee1d1f732.5b3a5519.png",o="/assets/499daa6079644d32b2c80d0e6bd65a9e.17284424.png",d="/assets/6020a4c07b6848c28b4f70eff3765d9d.4c951875.png";const t={},p=n('<p>\u56E0\u4E3A MacBook \u6027\u80FD\u6709\u4E9B\u8DDF\u4E0D\u4E0A\u7684\u5173\u7CFB\uFF0C\u6700\u8FD1\u65B0\u7EC4\u4E86\u53F0\u5F0F\uFF0C\u88C5\u5B8C\u8F6F\u4EF6\u540E\u53D1\u73B0 Windows \u7684 cmd \u662F\u771F\u7684\u4E11\uFF0C\u9042\u60F3\u6539\u9020\u4E00\u4E0B\u3002</p><p>\u5728\u4F53\u9A8C\u5B8C Cmder \u548C Hyper \u607C\u4EBA\u7684 bug \u540E\uFF0C\u53D1\u73B0\u7CFB\u7EDF\u81EA\u5E26\u7684 <code>Windows Terminal</code> \u633A\u597D\u7528\u7684\uFF0C\u800C\u4E14\u591A\u4E86\u4E00\u4E9B\u6709\u610F\u601D\u7684\u529F\u80FD\uFF1A</p><ul><li>\u652F\u6301 WSL2\uFF0CSSH\uFF0CPowershell\uFF0Ccmd \u548C\u5176\u4ED6\u547D\u4EE4\u884C</li><li>\u591A\u4E2A\u9009\u9879\u5361\u548C\u62C6\u5206\u7A97\u683C</li><li>\u641C\u7D22\u6846</li><li>\u81EA\u5B9A\u4E49\u952E\u7ED1\u5B9A</li><li>GPU\u52A0\u901F\u6587\u5B57\u6E32\u67D3</li><li>\u7F8E\u89C2\u7684\u65B0\u5B57\u4F53Cascadia Code</li><li>\u8D44\u6E90\u4F7F\u7528\u7387\u4F4E\uFF08\u6BCF\u4E2A\u9009\u9879\u5361\u901A\u5E3810MB\uFF09</li><li>\u5B83\u662F\u5F00\u6E90\u7684\uFF01</li></ul><p>PS: window11 \u7CFB\u7EDF\u9ED8\u8BA4\u4F1A\u81EA\u52A8\u5B89\u88C5 Windows Terminal \u7684\uFF0C \u5982\u679C\u662F windows 10 \u7684\u7CFB\u7EDF\u9700\u8981\u5148 \u4E0B\u8F7D <a href="https://apps.microsoft.com/store/detail/windows-terminal/9N0DX20HK701?hl=zh-cn&amp;gl=cn" target="_blank" rel="noopener noreferrer">windows-terminal</a></p><p>\u5F53\u7136\u5149\u6709\u7EC8\u7AEF\u4E0D\u591F\uFF0C\u8FD8\u9700\u8981\u52A0\u4E00\u70B9\u70B9 Magic\u3002\u4E0B\u9762\u6211\u4EEC\u4F7F\u7528 Oh My Posh \u7F8E\u5316\u4E00\u4E0B\u754C\u9762\u3002 <img src="'+i+`" alt="bb98e6d7024b6c269702fdb5969c6d7c.png"></p><h2 id="\u5B89\u88C5-oh-my-posh" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5-oh-my-posh" aria-hidden="true">#</a> \u5B89\u88C5 <a href="https://ohmyposh.dev/" target="_blank" rel="noopener noreferrer">Oh My Posh</a></h2><p>win+X\u7136\u540E\u518D\u6309A\uFF0C\u4EE5\u7BA1\u7406\u5458\u6A21\u5F0F\u6253\u5F00powershell\uFF0C\u8F93\u5165\u4EE5\u4E0B\u6307\u4EE4\u5B89\u88C5oh-my-posh\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>winget <span class="token function">install</span> JanDeDobbeleer.OhMyPosh <span class="token parameter variable">-s</span> winget
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>PS\uFF1A\u4E0D\u8981\u518D\u4F7F\u7528\u6709\u4E9B\u6559\u7A0B\u4E2D\u7684 <a href="https://ohmyposh.dev/docs/migrating" target="_blank" rel="noopener noreferrer">Install-Module</a> \u547D\u4EE4\u6765\u5B89\u88C5\u4E86\uFF0C\u5B98\u7F51\u6362\u4E86\u5B89\u88C5\u65B9\u5F0F\u3002</li></ul><h2 id="powershell-\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#powershell-\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> PowerShell \u914D\u7F6E\u6587\u4EF6</h2><p>PowerShell \u914D\u7F6E\u6587\u4EF6\u662F\u5728 PowerShell \u542F\u52A8\u65F6\u8FD0\u884C\u7684\u811A\u672C\uFF0C\u53EF\u4EE5\u5C06\u914D\u7F6E\u6587\u4EF6\u7528\u4F5C\u767B\u5F55\u811A\u672C\u6765\u81EA\u5B9A\u4E49\u73AF\u5883\uFF0C \u53EF\u4EE5\u6DFB\u52A0\u547D\u4EE4\u3001\u522B\u540D\u3001\u51FD\u6570\u3001\u53D8\u91CF\u3001\u7BA1\u7406\u5355\u5143\u3001\u6A21\u5757\u548C PowerShell \u9A71\u52A8\u5668\uFF0C \u8FD8\u53EF\u4EE5\u5C06\u5176\u4ED6\u7279\u5B9A\u4E8E\u4F1A\u8BDD\u7684\u5143\u7D20\u6DFB\u52A0\u5230\u60A8\u7684\u914D\u7F6E\u6587\u4EF6\u4E2D\uFF0C\u4EE5\u4FBF\u5728\u6BCF\u4E2A\u4F1A\u8BDD\u4E2D\u90FD\u53EF\u4EE5\u4F7F\u7528\u5B83\u4EEC\uFF0C\u800C\u65E0\u9700\u5BFC\u5165\u6216\u91CD\u65B0\u521B\u5EFA\u5B83\u4EEC\u3002</p><p>\u53EF\u4EE5\u4F7F\u7528\u4EE5\u4E0B\u547D\u4EE4 \u67E5\u770B\u5F53\u524D\u662F\u5426\u5B58\u5728 PowerShell \u914D\u7F6E\u6587\u4EF6\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>Test-Path <span class="token variable">$Profile</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5982\u679C\u6CA1\u6709 <strong>Microsoft.PowerShell_profile.ps1</strong> \u6587\u4EF6\uFF0C\u4F7F\u7528\u547D\u4EE4\u521B\u5EFA\u4E00\u4E2A\u914D\u7F6E\u6587\u4EF6</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>New-Item <span class="token parameter variable">-Path</span> <span class="token variable">$PROFILE</span> <span class="token parameter variable">-Type</span> File <span class="token parameter variable">-Force</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5728\u521B\u5EFA\u597D PowerShell \u914D\u7F6E\u6587\u4EF6\u6587\u4EF6\u540E\u67E5\u770B\u4E0B \u5F53\u524D\u7684 PowerShell \u6267\u884C\u7B56\u7565:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>get-ExecutionPolicy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5C06\u6267\u884C\u7B56\u7565\u8BBE\u7F6E\u4E3A <code>RemoteSigned</code>\uFF0C\u6267\u884C\u547D\u4EE4\u662F\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>set-ExecutionPolicy RemoteSigned
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5982\u679C\u4E0D\u8BBE\u7F6E\u53EF\u80FD\u4F1A\u62A5\u9519 <code>\u65E0\u6CD5\u52A0\u8F7D\u914D\u7F6E\u6587\u4EF6</code></p><h3 id="\u5FEB\u901F\u6253\u5F00\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5FEB\u901F\u6253\u5F00\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> \u5FEB\u901F\u6253\u5F00\u914D\u7F6E\u6587\u4EF6</h3><p>\u53EF\u4EE5\u4F7F\u7528\u4EE5\u4E0B\u547D\u4EE4\u6253\u5F00\u914D\u7F6E\u6587\u4EF6\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>code <span class="token variable">$Profile</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="oh-my-posh-\u4E3B\u9898\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#oh-my-posh-\u4E3B\u9898\u914D\u7F6E" aria-hidden="true">#</a> Oh My Posh \u4E3B\u9898\u914D\u7F6E</h2><ul><li><p><a href="https://ohmyposh.dev/docs/installation/customize" target="_blank" rel="noopener noreferrer">\u5B9A\u5236\u5316\u914D\u7F6E</a></p></li><li><p><a href="https://ohmyposh.dev/docs/themes" target="_blank" rel="noopener noreferrer">Oh My Posh \u4E3B\u9898</a></p></li></ul><p>\u5728\u4E0A\u9762\u6253\u5F00\u7684\u914D\u7F6E\u6587\u4EF6\u4E2D\u8F93\u5165\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>oh-my-posh init pwsh <span class="token parameter variable">--config</span> <span class="token string">&quot;<span class="token variable">$env</span>:POSH_THEMES_PATH/atomic.omp.json&quot;</span> <span class="token operator">|</span> Invoke-Expression
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6700\u540E\u8FD4\u56DE\u7EC8\u7AEF\uFF0C\u8F93\u5165 <strong>. $PROFILE</strong> \u4FDD\u5B58\u914D\u7F6E\u5373\u53EF\u751F\u6548\u3002</p><h2 id="\u4E3B\u9898\u6587\u672C\u5B57\u4F53\u8BBE\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u4E3B\u9898\u6587\u672C\u5B57\u4F53\u8BBE\u7F6E" aria-hidden="true">#</a> \u4E3B\u9898\u6587\u672C\u5B57\u4F53\u8BBE\u7F6E</h2><p><img src="`+r+`" alt="14bd8778e71b8b6eead46e2a1b7f322b.png"> \u5982\u679C\u6B65\u9AA4\u6CA1\u9519\u4F1A\u51FA\u73B0\u4E0A\u9762\u7684\u6548\u679C\uFF0C\u6587\u672C\u53D8\u6210\u4E71\u7801\u4E86\u3002\u8FD9\u662F\u56E0\u4E3A Oh My Posh\u662F\u4E3A\u4F7F\u7528 <a href="https://www.nerdfonts.com/" target="_blank" rel="noopener noreferrer">Nerd Fonts</a> \u8BBE\u8BA1\u7684\u3002Nerd Fonts\u662F\u6D41\u884C\u7684\u5B57\u4F53\uFF0C\u7ECF\u8FC7\u4FEE\u8865\u540E\u5305\u62EC\u56FE\u6807\u3002\u8FD9\u65F6\u5019\u9700\u8981\u8BBE\u7F6E\u4E00\u4E0B\u5B57\u4F53\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>oh-my-posh font <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u9009\u62E9\u4E00\u79CD\u5B57\u4F53\u5B89\u88C5\u5373\u53EF\u3002\u8FD9\u91CC\u63A8\u8350 <strong>JetBrainsMono Nerd Font</strong>\u3002</p><p>\u5728\u5B89\u88C5\u4E86 Nerd Font \u540E\uFF0C\u9700\u8981\u914D\u7F6EWindows\u7EC8\u7AEF\u6765\u4F7F\u7528\u5B83\u3002</p><h2 id="\u8BBE\u7F6E-windows-terminal-\u73AF\u5883\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u8BBE\u7F6E-windows-terminal-\u73AF\u5883\u914D\u7F6E" aria-hidden="true">#</a> \u8BBE\u7F6E Windows Terminal \u73AF\u5883\u914D\u7F6E</h2><p>\u9996\u5148\uFF0C\u6211\u4EEC\u8FDB\u5165 Windows Terminal \u7684\u8BBE\u7F6E\u6587\u4EF6\u3002\u5728 Windows Terminal \u7684\u4E0B\u62C9\u83DC\u5355\u4E2D\uFF0C\u9009\u62E9 Settings\uFF08\u6216\u4F7F\u7528\u5FEB\u6377\u952E Ctrl + ,\uFF09\u518D\u5DE6\u4E0B\u89D2\u9009\u62E9 \u6253\u5F00JSON\u6587\u4EF6\uFF0C\u5373\u53EF\u6253\u5F00\u914D\u7F6E\u6587\u4EF6\u3002\uFF08\u6216\u4F7F\u7528\u9ED8\u8BA4\u5FEB\u6377\u952E\uFF1ACTRL + SHIFT + \uFF0C\uFF09 <img src="`+l+'" alt="83295449bf70fecb7cb2424845e0d188.png"></p><p>Windows Terminal \u7684\u914D\u7F6E\u6587\u4EF6\u662F\u4E00\u4E2A JSON \u683C\u5F0F\u7684\u6587\u4EF6\uFF0C\u6211\u4EEC\u4F1A\u5728\u5176\u4E2D\u5B9A\u4E49\u5168\u90E8 Windows Terminal \u7684\u5C5E\u6027\u3002\u7B80\u5355\u6765\u8BB2\uFF0C\u8FD9\u4E2A\u914D\u7F6E\u6587\u4EF6\u5305\u542B\u4E86\u5982\u4E0B\u7684\u51E0\u4E2A\u90E8\u5206\uFF1A <img src="'+o+`" alt="d84db2da4b1e3e89333afe7c3a9683a0.png"></p><p>\u5728\u4F60\u7684settings.json\u6587\u4EF6\u4E2D\uFF0C\u5728 profiles\u4E2D\u7684defaults\u5C5E\u6027\u4E0B\u6DFB\u52A0font.face\u5C5E\u6027\u3002</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;profiles&quot;</span><span class="token operator">:</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;defaults&quot;</span><span class="token operator">:</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;font&quot;</span><span class="token operator">:</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;face&quot;</span><span class="token operator">:</span> <span class="token string">&quot;JetBrainsMono Nerd Font&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">14</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4FDD\u5B58\u540E\u9875\u9762\u5C31\u6062\u590D\u6B63\u5E38\u4E86\u3002 <img src="`+d+`" alt="75d3db84e9791a5ecb4becabdcb73d27.png"></p><h2 id="\u63D2\u4EF6\u53CA\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u63D2\u4EF6\u53CA\u95EE\u9898" aria-hidden="true">#</a> \u63D2\u4EF6\u53CA\u95EE\u9898</h2><h3 id="gsudo" tabindex="-1"><a class="header-anchor" href="#gsudo" aria-hidden="true">#</a> gsudo</h3><p>gsudo \u80FD\u5728 Windows \u4E0A\u63D0\u4F9B\u7C7B\u4F3C\u4E8E Linux \u4E0A\u7684 sudo \u529F\u80FD\uFF0C \u8BA9\u6211\u4EEC\u4F7F\u7528\u547D\u4EE4\u63D0\u5347\u81F3\u7CFB\u7EDF\u7BA1\u7406\u5458\u6743\u9650\u3002</p><p>\u5B89\u88C5\u547D\u4EE4\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>winget <span class="token function">install</span> gsudo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4F7F\u7528\u65B9\u6CD5\u548C Linux \u4E00\u6837\uFF0C\u8F93\u5165 <strong>sudo</strong> \u540E\u4F1A\u5F39\u51FA \u662F\u5426\u5F00\u542F\u7BA1\u7406\u5458\u6743\u9650\u7684\u5F39\u7A97\u3002</p><h3 id="posh-git" tabindex="-1"><a class="header-anchor" href="#posh-git" aria-hidden="true">#</a> posh-git</h3><p><a href="https://github.com/dahlbyk/posh-git" target="_blank" rel="noopener noreferrer">posh-git</a> \u53EF\u4EE5\u4F7F\u7528 Git \u7684\u547D\u4EE4\u3002 \u4F7F\u7528 PowerShell \u5B89\u88C5\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>PowerShellGet<span class="token punctuation">\\</span>Install-Module posh-git <span class="token parameter variable">-Scope</span> CurrentUser <span class="token parameter variable">-Force</span>
Add-PoshGitToProfile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>PS\uFF1AWindows PowerShell 5.x or PowerShell &gt;= v6 (pwsh)</li></ul><h3 id="\u5982\u4F55\u53BB\u9664-window-powershell-\u7248\u6743\u6240\u6709\u63D0\u793A" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u53BB\u9664-window-powershell-\u7248\u6743\u6240\u6709\u63D0\u793A" aria-hidden="true">#</a> \u5982\u4F55\u53BB\u9664 Window PowerShell \u7248\u6743\u6240\u6709\u63D0\u793A</h3><p>\u5982\u4F55\u53BB\u9664 Window PowerShell \u7248\u6743\u6240\u6709\u63D0\u793A\uFF0C\u5728\u4E0A\u9762\u7684 Microsoft.PowerShell_profile.ps1 \u6700\u524D\u9762\u52A0\u4E0A <strong>clear</strong></p>`,51),c=[p];function h(u,b){return a(),s("div",null,c)}var v=e(t,[["render",h],["__file","index.html.vue"]]);export{v as default};