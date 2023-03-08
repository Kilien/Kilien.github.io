import{_ as e,o as r,c as t,d as o}from"./app.c8b08358.js";const n={},a=o(`<h2 id="homebrew-\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#homebrew-\u5B89\u88C5" aria-hidden="true">#</a> Homebrew \u5B89\u88C5</h2><p>Homebrew\u662F\u4E00\u6B3E\u5305\u7BA1\u7406\u5DE5\u5177\uFF0C\u76EE\u524D\u652F\u6301macOS\u548Clinux\u7CFB\u7EDF\u3002\u5B89\u88C5\u65B9\u5F0F\u5F88\u7B80\u5355\uFF0C\u5C06\u4E0B\u9762\u{1F447}\u547D\u4EE4\u590D\u5236\u5230\u547D\u4EE4\u884C\u7EC8\u7AEF\u8FD0\u884C\u5373\u53EF\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>/bin/bash <span class="token parameter variable">-c</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh<span class="token variable">)</span></span>&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u67E5\u770B\u5F53\u524Dhomebrew-\u955C\u50CF\u6E90" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u5F53\u524Dhomebrew-\u955C\u50CF\u6E90" aria-hidden="true">#</a> \u67E5\u770B\u5F53\u524DHomebrew \u955C\u50CF\u6E90</h3><pre><code># brew.git\u955C\u50CF\u6E90
git -C &quot;$(brew --repo)&quot; remote -v

# homebrew-core.git\u955C\u50CF\u6E90
git -C &quot;$(brew --repo homebrew/core)&quot; remote -v

# homebrew-cask.git\u955C\u50CF\u6E90
git -C &quot;$(brew --repo homebrew/cask)&quot; remote -v
</code></pre><h2 id="homebrew-\u6362\u6E90-\u79D1\u5927" tabindex="-1"><a class="header-anchor" href="#homebrew-\u6362\u6E90-\u79D1\u5927" aria-hidden="true">#</a> Homebrew \u6362\u6E90\uFF08\u79D1\u5927\uFF09\uFF1A</h2><pre><code>git -C &quot;$(brew --repo)&quot; remote set-url origin https://mirrors.ustc.edu.cn/brew.git

git -C &quot;$(brew --repo homebrew/core)&quot; remote set-url origin https://mirrors.ustc.edu.cn/homebrew-core.git

git -C &quot;$(brew --repo homebrew/cask)&quot; remote set-url origin https://mirrors.ustc.edu.cn/homebrew-cask.git

if [ $SHELL = &quot;/bin/bash&quot; ] # \u5982\u679C\u4F60\u7684\u662Fbash
then 
    echo &#39;export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.ustc.edu.cn/homebrew-bottles/&#39; &gt;&gt; ~/.bash_profile
    source ~/.bash_profile
elif [ $SHELL = &quot;/bin/zsh&quot; ] # \u5982\u679C\u7528\u7684shell \u662Fzsh \u7684\u8BDD
then
    echo &#39;export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.ustc.edu.cn/homebrew-bottles/&#39; &gt;&gt; ~/.zshrc
    source ~/.zshrc
fi

brew update
</code></pre><h3 id="\u6062\u590D\u539F\u6709\u955C\u50CF\u6E90-\u56FD\u5185\u955C\u50CF\u6E90\u7A81\u7136\u4E0D\u80FD\u7528\u4E86\u6216\u7248\u672C\u4E0D\u591F\u65B0" tabindex="-1"><a class="header-anchor" href="#\u6062\u590D\u539F\u6709\u955C\u50CF\u6E90-\u56FD\u5185\u955C\u50CF\u6E90\u7A81\u7136\u4E0D\u80FD\u7528\u4E86\u6216\u7248\u672C\u4E0D\u591F\u65B0" aria-hidden="true">#</a> \u6062\u590D\u539F\u6709\u955C\u50CF\u6E90\uFF08\u56FD\u5185\u955C\u50CF\u6E90\u7A81\u7136\u4E0D\u80FD\u7528\u4E86\u6216\u7248\u672C\u4E0D\u591F\u65B0\uFF09</h3><pre><code>git -C &quot;$(brew --repo)&quot; remote set-url origin https://github.com/Homebrew/brew.git

git -C &quot;$(brew --repo homebrew/core)&quot; remote set-url origin https://github.com/Homebrew/homebrew-core.git

git -C &quot;$(brew --repo homebrew/cask)&quot; remote set-url origin https://github.com/Homebrew/homebrew-cask.git

# \u627E\u5230 ~/.bash_profile \u6216\u8005 ~/.zshrc \u4E2D\u7684HOMEBREW_BOTTLE_DOMAIN \u4E00\u884C\u5220\u9664

brew update
</code></pre><h2 id="homebrew-\u91CD\u7F6E" tabindex="-1"><a class="header-anchor" href="#homebrew-\u91CD\u7F6E" aria-hidden="true">#</a> Homebrew \u91CD\u7F6E</h2><pre><code>brew doctor
brew update-reset
brew update
</code></pre><h2 id="\u53C2\u8003\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u94FE\u63A5" aria-hidden="true">#</a> \u53C2\u8003\u94FE\u63A5</h2><p><a href="https://brew.sh/index_zh-cn" target="_blank" rel="noopener noreferrer">Homebrew</a></p><p><a href="https://zhuanlan.zhihu.com/p/90508170" target="_blank" rel="noopener noreferrer">\u63A8\u8350\u9605\u8BFB</a></p><ul><li>\u79D1\u5927: <a href="https://link.zhihu.com/?target=https%3A//links.jianshu.com/go%3Fto%3Dhttps%253A%252F%252Fmirrors.ustc.edu.cn" target="_blank" rel="noopener noreferrer">https://mirrors.ustc.edu.cn</a></li><li>\u963F\u91CC: <a href="https://link.zhihu.com/?target=https%3A//links.jianshu.com/go%3Fto%3Dhttps%253A%252F%252Fmirrors.aliyun.com%252Fhomebrew%252F" target="_blank" rel="noopener noreferrer">https://mirrors.aliyun.com/homebrew/</a></li></ul>`,15),s=[a];function h(i,c){return r(),t("div",null,s)}var u=e(n,[["render",h],["__file","index.html.vue"]]);export{u as default};
