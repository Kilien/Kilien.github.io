import{_ as e,o as i,c as s,d as n}from"./app.c015dbd6.js";const r={},t=n(`<p>\u56E0\u4E3A powerline \u4EE5\u53CA homebrew \u5747\u9700\u8981\u5B89\u88C5 command line tool\uFF0C\u7F51\u7EDC\u6761\u4EF6\u4F18\u8D8A\u7684\u540C\u5B66\u5728\u6267\u884C\u672C\u6587\u4E0B\u9762\u5185\u5BB9\u4E4B\u524D\uFF0C\u53EF\u4EE5\u5148\u5B89\u88C5 XCode \u5E76\u6253\u5F00\u8FD0\u884C\u4E00\u6B21\uFF08\u4F1A\u521D\u59CB\u5316\u5B89\u88C5 components\uFF09\uFF0C\u7701\u53BB\u4EE5\u540E\u5728 iterm2 \u4E2D\u7684\u7B49\u5F85\u65F6\u95F4\u3002</p><p>\u53E6\u5916\uFF0Cgit \u4E5F\u662F\u5FC5\u8981\u7684\uFF0C\u5404\u4F4D\u53EF\u4EE5\u81EA\u884C\u4E0B\u8F7D\u5B89\u88C5\uFF0C\u9664\u4E86\u7F51\u7EDC\u6CA1\u6709\u4EFB\u4F55\u5751\uFF1A</p><p><a href="https://git-scm.com" target="_blank" rel="noopener noreferrer">https://git-scm.com</a></p><p>\u4ECB\u4E8E\u6B64\uFF0C\u672C\u6587\u9ED8\u8BA4\u5404\u4F4D\u540C\u5B66\u5DF2\u7ECF\u5B89\u88C5\u4E86 git \u73AF\u5883\u548C xcode\uFF08command line tools\uFF09\uFF0C\u9047\u5230\u63D0\u793A\u627E\u4E0D\u5230 git \u547D\u4EE4\u6216\u9700\u8981\u5B89\u88C5 command line tool \u7684\u5730\u65B9\uFF0C\u6587\u4E2D\u4E0D\u518D\u8D58\u8FF0\u4E86\u3002</p><h3 id="\u5B89\u88C5-iterm2" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5-iterm2" aria-hidden="true">#</a> \u5B89\u88C5 iTerm2</h3><p>Term2 \u662F\u4E00\u6B3E\u5B8C\u5168\u514D\u8D39\u7684\uFF0C\u4E13\u4E3A Mac OS \u7528\u6237\u6253\u9020\u7684\u547D\u4EE4\u884C\u5E94\u7528\u3002 \u53EF\u4EE5\u76F4\u63A5\u53BB\u5B98\u7F51\u4E0B\u8F7D\uFF1A <a href="https://www.iterm2.com/" target="_blank" rel="noopener noreferrer">https://www.iterm2.com/</a></p><p>\u6216\u8005\u952E\u5165 \u{1F447} \u547D\u4EE4\uFF1A <code>brew cask install iterm2</code></p><h3 id="\u5B89\u88C5-oh-my-zsh" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5-oh-my-zsh" aria-hidden="true">#</a> \u5B89\u88C5 Oh my zsh</h3><p>\u5B89\u88C5\u65B9\u6CD5\u6709\u4E24\u79CD\uFF0C\u53EF\u4EE5\u4F7F\u7528 curl \u6216 wget\uFF0C\u770B\u81EA\u5DF1\u73AF\u5883\u6216\u559C\u597D\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># curl \u5B89\u88C5\u65B9\u5F0F
sh -c &quot;$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># wget \u5B89\u88C5\u65B9\u5F0F
sh -c &quot;$(wget https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh -O -)&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Mac \u7CFB\u7EDF\u9ED8\u8BA4\u4F7F\u7528 dash \u4F5C\u4E3A\u7EC8\u7AEF\uFF0C\u4F7F\u7528\u547D\u4EE4\u4FEE\u6539\u9ED8\u8BA4\u4F7F\u7528 zsh\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>chsh -s /bin/zsh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5982\u679C\u60F3\u4FEE\u6539\u56DE\u9ED8\u8BA4 dash\uFF0C\u540C\u6837\u4F7F\u7528 chsh \u547D\u4EE4\u5373\u53EF\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>chsh -s /bin/bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u9009\u62E9\u4E3B\u9898" tabindex="-1"><a class="header-anchor" href="#\u9009\u62E9\u4E3B\u9898" aria-hidden="true">#</a> \u9009\u62E9\u4E3B\u9898</h3><p>gnoster \u662F\u5E38\u7528\u7684 zsh \u4E3B\u9898\u4E4B\u4E00\uFF0C\u4F60\u53EF\u4EE5\u6311\u9009\u4F60\u559C\u6B22\u7684 zsh \u4E3B\u9898, \u4EE5\u4E0B\u4EE5 gnoster \u4E3A\u793A\u4F8B</p><ul><li><a href="https://github.com/robbyrussell/oh-my-zsh/wiki/Themes" target="_blank" rel="noopener noreferrer">\u4E3B\u9898\u5730\u5740</a></li></ul><p>\u4E0B\u8F7D <a href="https://github.com/fcamblor/oh-my-zsh-agnoster-fcamblor" target="_blank" rel="noopener noreferrer">agnoster</a> \u4E3B\u9898\uFF0C\u6267\u884C\u811A\u672C\u5B89\u88C5\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cd ~/Desktop/OpenSource
git clone https://github.com/fcamblor/oh-my-zsh-agnoster-fcamblor.git
cd oh-my-zsh-agnoster-fcamblor/
./install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6267\u884C\u4E0A\u9762\u7684\u547D\u4EE4\u4F1A\u5C06\u4E3B\u9898\u62F7\u8D1D\u5230 oh my zsh \u7684 themes \u4E2D\u3002</p><p>\u5B89\u88C5\u6210\u529F\u540E\uFF0C\u7528\u6237$HOME \u76EE\u5F55\u4E0B\u4F1A\u51FA\u73B0 .zshrc \u6587\u4EF6\uFF0C\u7528 vim ~/.zshrc \u6253\u5F00\u9690\u85CF\u6587\u4EF6\uFF0C\u5C06\u4E3B\u9898\u914D\u7F6E\u4FEE\u6539\u4E3A agnoster\uFF0C\u4FEE\u6539\u5982\u4E0B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>vi ~/.zshrc
ZSH_THEME=&quot;agnoster&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4FEE\u6539\u5B8C\u6210\u540E\u6309\u4E00\u4E0B <strong>esc</strong> \u8C03\u51FA vi \u547D\u4EE4\uFF0C\u8F93\u5165 <strong>:wq</strong> \u4FDD\u5B58\u5E76\u9000\u51FA vi \u6A21\u5F0F\u3002</p><p>\u6B64\u65F6 command+Q \u6216 source \u914D\u7F6E\u6587\u4EF6\u540E\uFF0CiTerm2 \u53D8\u4E86\u6A21\u6837\uFF1A <img src="https://cdn.jsdelivr.net/gh/KiLien/Pics/iShot/iterm-0.png" alt=""></p><h3 id="\u5B89\u88C5-powerline" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5-powerline" aria-hidden="true">#</a> \u5B89\u88C5 PowerLine</h3><ul><li>powerline \u5B98\u7F51\uFF1A <a href="http://powerline.readthedocs.io/en/latest/installation.html" target="_blank" rel="noopener noreferrer">http://powerline.readthedocs....</a></li></ul><p>\u5B89\u88C5 powerline \u7684\u65B9\u5F0F\u4F9D\u7136\u7B80\u5355\uFF0C\u4E5F\u53EA\u9700\u8981\u4E00\u6761\u547D\u4EE4\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>pip install powerline-status --user
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6CA1\u6709\u5B89\u88C5 pip \u7684\u540C\u5B66\u53EF\u80FD\u4F1A\u78B0\u5230 <code>zsh: command not found: pip</code>\u3002</p><p>\u4F7F\u7528\u547D\u4EE4\u5B89\u88C5 pip \u5373\u53EF\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo easy_install pip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5B89\u88C5\u540E\u518D\u6B21\u6267\u884C\u5B89\u88C5 powerline \u7684\u547D\u4EE4\u5373\u53EF\u3002</p><h3 id="\u5B89\u88C5-powerfonts" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5-powerfonts" aria-hidden="true">#</a> \u5B89\u88C5 PowerFonts</h3><p>\u5B89\u88C5\u5B57\u4F53\u5E93\u9700\u8981\u9996\u5148\u5C06\u9879\u76EE <code>git clone</code> \u81F3\u672C\u5730\uFF0C\u7136\u540E\u6267\u884C\u6E90\u7801\u4E2D\u7684 install.sh\u3002</p><p>\u5728\u4F60\u4E60\u60EF\u7684\u4F4D\u7F6E\u65B0\u5EFA\u4E00\u4E2A\u6587\u4EF6\u5939\uFF0C\u5982\uFF1A~/Desktop/OpenSource/</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># git clone
git clone https://github.com/powerline/fonts.git --depth=1
# cd to folder
cd fonts
# run install shell
./install.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6253\u5F00 iTerm2\uFF0C\u6309 <code>Command + ,</code> \u952E\uFF0C\u6253\u5F00 Preferences \u914D\u7F6E\u754C\u9762\uFF0C\u7136\u540E <code>Profiles -&gt; Text -&gt; Font -&gt; Chanage Font</code> \uFF0C\u9009\u62E9 Meslo LG M Regular for Powerline \u5B57\u4F53</p><p><img src="https://cdn.jsdelivr.net/gh/KiLien/Pics/iShot/iterm-1.png" alt="\u793A\u4F8B"></p><h3 id="\u5B89\u88C5\u914D\u8272\u65B9\u6848" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u914D\u8272\u65B9\u6848" aria-hidden="true">#</a> \u5B89\u88C5\u914D\u8272\u65B9\u6848</h3><p>\u914D\u8272\u65B9\u6848\u5728\u4F7F\u7528 VIM \u6216 Colorful Log \u65F6\u4F1A\u53D8\u5F97\u975E\u5E38\u6709\u7528\uFF0C\u540C\u65F6\u754C\u9762\u4E5F\u4E0D\u4F1A\u6B7B\u677F\u3002</p><p>\u540C\u6837\u4F7F\u7528 git clone \u7684\u65B9\u5F0F\u4E0B\u8F7D\u6E90\u7801\u8FDB\u884C\u5B89\u88C5\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cd ~/Desktop/OpenSource
git clone https://github.com/altercation/solarized
cd solarized/iterm2-colors-solarized/
open .
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u6253\u5F00\u7684 finder \u7A97\u53E3\u4E2D\uFF0C\u53CC\u51FB <code>Solarized Dark.itermcolors</code> \u548C <code>Solarized Light.itermcolors</code> \u5373\u53EF\u5B89\u88C5\u660E\u6697\u4E24\u79CD\u914D\u8272.</p><p>\u518D\u6B21\u8FDB\u5165 <code>iTerm2 -&gt; Preferences -&gt; Profiles -&gt; Colors -&gt; Color Presets</code> \u4E2D\u6839\u636E\u4E2A\u4EBA\u559C\u597D\u9009\u62E9\u8FD9\u4E24\u79CD\u914D\u8272\u4E2D\u7684\u4E00\u79CD\u5373\u53EF.</p><p><img src="https://cdn.jsdelivr.net/gh/KiLien/Pics/iShot/iterm-2.png" alt="\u793A\u4F8B"></p><h3 id="\u5B89\u88C5\u9AD8\u4EAE\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u9AD8\u4EAE\u63D2\u4EF6" aria-hidden="true">#</a> \u5B89\u88C5\u9AD8\u4EAE\u63D2\u4EF6</h3><p>\u8FD9\u662F <strong>oh my zsh</strong> \u7684\u4E00\u4E2A\u63D2\u4EF6\uFF0C\u5B89\u88C5\u65B9\u5F0F\u4E0E theme \u5927\u540C\u5C0F\u5F02\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cd ~/.oh-my-zsh/custom/plugins/
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git
vi ~/.zshrc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u65F6\u518D\u6B21\u6253\u5F00 zshrc \u6587\u4EF6\u8FDB\u884C\u7F16\u8F91\u3002\u627E\u5230 <strong>plugins</strong>\uFF0C\u6B64\u65F6 <strong>plugins</strong> \u4E2D\u5E94\u8BE5\u5DF2\u7ECF\u6709\u4E86 git\uFF0C\u6211\u4EEC\u9700\u8981\u628A\u9AD8\u4EAE\u63D2\u4EF6\u4E5F\u52A0\u4E0A\uFF1A</p><p><img src="https://cdn.jsdelivr.net/gh/KiLien/Pics/iShot/iterm-3.png" alt="\u793A\u4F8B"></p><p>\u8BF7\u52A1\u5FC5\u4FDD\u8BC1\u63D2\u4EF6\u987A\u5E8F\uFF0Czsh-syntax-highlighting \u5FC5\u987B\u5728\u6700\u540E\u4E00\u4E2A\u3002</p><p>\u7136\u540E\u5728\u6587\u4EF6\u7684\u6700\u540E\u4E00\u884C\u6DFB\u52A0\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>source ~/.oh-my-zsh/custom/plugins/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6309\u4E00\u4E0B esc \u8C03\u51FA vi \u547D\u4EE4\uFF0C\u8F93\u5165:wq \u4FDD\u5B58\u5E76\u9000\u51FA vi \u6A21\u5F0F\u3002</p><p>\u6267\u884C\u547D\u4EE4\u4F7F\u521A\u624D\u7684\u4FEE\u6539\u751F\u6548\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>source ~/.zshrc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u81EA\u52A8\u547D\u4EE4\u8865\u5168" tabindex="-1"><a class="header-anchor" href="#\u81EA\u52A8\u547D\u4EE4\u8865\u5168" aria-hidden="true">#</a> \u81EA\u52A8\u547D\u4EE4\u8865\u5168</h3><p>zsh-autosuggestion \u5F53\u6211\u4EEC\u8F93\u5165\u547D\u4EE4\u65F6\uFF0C\u7EC8\u7AEF\u4F1A\u81EA\u52A8\u63D0\u793A\u4F60\u63A5\u4E0B\u6765\u53EF\u80FD\u8981\u8F93\u5165\u7684\u547D\u4EE4\uFF0C\u8FD9\u65F6\u6309 <code>\u2192</code> \u4FBF\u53EF\u8F93\u51FA\u8FD9\u4E9B\u547D\u4EE4\uFF0C\u975E\u5E38\u65B9\u4FBF\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cd ~/.oh-my-zsh/custom/plugins/
git clone https://github.com/zsh-users/zsh-autosuggestions
vi ~/.zshrc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u627E\u5230 plugins\uFF0C\u52A0\u4E0A\u8FD9\u4E2A\u63D2\u4EF6\u5373\u53EF\uFF1A</p><p><img src="https://cdn.jsdelivr.net/gh/KiLien/Pics/iShot/iterm-4.png" alt="\u793A\u4F8B"></p><h3 id="\u9690\u85CF\u7528\u6237\u540D\u548C\u4E3B\u673A\u540D" tabindex="-1"><a class="header-anchor" href="#\u9690\u85CF\u7528\u6237\u540D\u548C\u4E3B\u673A\u540D" aria-hidden="true">#</a> \u9690\u85CF\u7528\u6237\u540D\u548C\u4E3B\u673A\u540D</h3><p>\u6709\u65F6\u5019\u6211\u4EEC\u7684\u7528\u6237\u540D\u548C\u4E3B\u673A\u540D\u592A\u957F\uFF0C\u6BD4\u5982\u6211\u7684 kilien@kilienMacBook-Pro\uFF0C\u7EC8\u7AEF\u663E\u793A\u7684\u65F6\u5019\u4F1A\u5F88\u4E0D\u597D\u770B\uFF0C\u6211\u4EEC\u53EF\u4EE5\u624B\u52A8\u53BB\u9664\u3002</p><p>\u7F16\u8F91 <code>vim ~/.zshrc</code> \u6587\u4EF6\uFF0C\u589E\u52A0 <code>DEFAULT_USER=&quot;kilien&quot;</code> \u914D\u7F6E\uFF0C\u53EF\u5728\u6587\u672C\u6700\u597D\u8FFD\u52A0\u3002</p><p>\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7 <code>whoami</code> \u547D\u4EE4\uFF0C\u67E5\u770B\u5F53\u524D\u7528\u6237\u3002</p><p>\u5185\u5BB9\u53C2\u8003\uFF1A <a href="https://github.com/robbyrussell/oh-my-zsh" target="_blank" rel="noopener noreferrer">oh-my-zsh</a></p><p><a href="https://github.com/ohmyzsh/ohmyzsh/wiki/Themes" target="_blank" rel="noopener noreferrer">\u4E3B\u9898\u5730\u5740</a></p><p><a href="https://github.com/sirius1024/iterm2-with-oh-my-zsh" target="_blank" rel="noopener noreferrer">zsh-autosuggestion</a></p><p><a href="https://segmentfault.com/a/1190000014992947" target="_blank" rel="noopener noreferrer">iTerm2 + Oh My Zsh \u6253\u9020\u8212\u9002\u7EC8\u7AEF\u4F53\u9A8C</a></p>`,70),a=[t];function l(d,o){return i(),s("div",null,a)}var h=e(r,[["render",l],["__file","index.html.vue"]]);export{h as default};