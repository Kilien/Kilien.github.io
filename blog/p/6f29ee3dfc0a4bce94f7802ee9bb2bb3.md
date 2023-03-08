---
layout: Post
author: Kilien
subtitle: 6f29ee3dfc0a4bce94f7802ee9bb2bb3
useHeaderImage: true
headerImage: https://picsum.photos/seed/6f29ee3dfc0a4bce94f7802ee9bb2bb3/1920/1080
headerMask: rgb(14, 21, 5, 0.2)
tags:
  - 图床
  - github
  - picgo
permalink: /p/6f29ee3dfc0a4bce94f7802ee9bb2bb3
title: PicGo+GitHub：打造自己的图床
date: 2021-04-02
updated: 2022-09-13
---

## PicGo 介绍

这是一款图片上传的工具，目前支持 SM.MS 图床，微博图床，七牛图床，腾讯云 COS，阿里云 OSS，Imgur，又拍云，`GitHub`等图床，未来将支持更多图床。

解决问题的思路就是，将本地的文件，或者剪切板上面的截图发送图床，然后生成在线图片的链接，这样就可以让`Markdown`文档飞起来了，走到哪就可以用到哪😊。

![](https://cdn.jsdelivr.net/gh/KiLien/Pics@master/iShot/ishot-01.png)

![](https://cdn.jsdelivr.net/gh/KiLien/Pics@master/iShot/ishot-02.png)

在众多的图床中，我选择的是`GitHub`图床，这可拓展定制。

创建自己的 GitHub 图床

### 1. 创建 GitHub 图床之前，需要注册 / 登陆 GitHub 账号

### 2. 创建 Repository

![](https://cdn.jsdelivr.net/gh/KiLien/Pics@master/iShot/ishot-03.png)

点击`"New repository"`按钮

![](https://cdn.jsdelivr.net/gh/KiLien/Pics@master/iShot/ishot-04.png)

> 第 4 步，repository 初始化 README 文件,可选
> .gitignore 添加忽略文件夹，可选
> 选择开源协议，可选

### 3. 生成一个 Token 用于操作 GitHub repository

回到主页，点击`"Settings"`按钮

![](https://cdn.jsdelivr.net/gh/KiLien/Pics@master/iShot/ishot-05.png)

进入页面后，点击 `"Developer settings"` 按钮

![](https://cdn.jsdelivr.net/gh/KiLien/Pics@master/iShot/ishot-06.png)

点击 `"Personal access tokens"` 按钮

![](https://cdn.jsdelivr.net/gh/KiLien/Pics@master/iShot/ishot-07.png)

创建新的 `Token`

![](https://cdn.jsdelivr.net/gh/KiLien/Pics@master/iShot/ishot-08.png)

填写描述，选择`"repo"`权限，然后点击`"Generate token"`,至少选择 **repo** 该项

> 注：创建成功后，会生成一串`token`，这串`token`之后不会再显示，所以第一次看到的时候，可以建个文本文件好好保存，忘记了只有重新生成，每次都不一样。

## GitHub

Github在图床里，毫无疑问是扮演一个“仓库”的角色。

现在复习下步骤：

*   在自己的个人账户的settings里，找到左侧最下方的Developer settings。找到Personal access tokens。在右侧点击Generate new token。

*   这里名字可以随便写，后面的范围把repo勾选即可。记下来生成好的token。这一步的目的是生成一个能代表你身份的token，
    然后交给picgo，使得它能替你上传图片，不用繁琐地再通过git commit 操作。

*   在你的这个仓库里，点击 releases。接着点击旁边的Draft New Release，最后点Publish release。这一步是发布一个版本的意思，我们的 **jsDelivr** 会用到它。

> **jsDelivr**
> 这是一个用于 **cdn** 加速的服务，神奇的地方在于，你不需要对它配置任何东西——对照，我们直接进入vs picgo

### PicGo

这本身是一个方便图床上传的GUI工具，但是我这里推荐使用它的vs code 插件版本。

1.  在VS Code 当中，搜索PicGo插件并安装。
2.  打开VS Code的设置界面，搜索picGo。
3.  只需要把 **current** 这里的下拉选项改为 **github**
4.  把 **Github:branch** 这里改成 **master**
5.  把 **Github: Custom Url** 这里改成使用 **jsDelivr** 分发的仓库地址。即`https://cdn.jsdelivr.net/gh/你的github用户名/刚刚建的仓库名`，这样子我们以后访问图片就可以加快啦！
6.  把 **Github: Repo** 改为 **github用户名/仓库名**
7.  把 **Github: Token** 改为刚刚在 Github 记录下来的 **token**

## 配置 PicGo

### 1. 下载运行 [PicGo](https://github.com/Molunerfinn/PicGo/releases)。

`macOS`用户请下载最新版本的`dmg`文件，`windows`用户请下载最新版本的`exe`文件，`linux`用户请下载`AppImage`文件。

> `AppImage`文件如何使用？>>>> [传送门](https://sunhwee.com/posts/519be12.html#toc-heading-8)

### 2. 配置图床

之后按照这个配置格式配置即可！

![](https://cdn.jsdelivr.net/gh/KiLien/Pics@master/iShot/ishot-09.png)

*   设定仓库名的时候，按照 “账户名 / 仓库名“ 的格式填写
*   分支名统一填写`master`
*   将之前的`Token`黏贴在这里
*   存储的路径可以按照我这样子写，就会在`repository`下创建一个`“xxx/xxx/xxxxx/”`文件夹，当然你可以自己定义你的文件夹名字。
*   自定义域名的作用是在上传图片后成功后，`PicGo`会将 “自定义域名 + 上传的图片名” 生成的访问链接，放到剪切板上 `https://cdn.jsdelivr.net/gh/ 用户名 / RepositoryName / 分支名`，自定义域名需要按照这样去填写

### 3. 快捷键及相关配置

支持快捷键`command+shift+p`（macOS）或者`control+shift+p`（windows\linux）用以支持快捷上传剪贴板里的图片（第一张）。

`PicGo`支持自定义快捷键，使用方法见[配置手册](https://picgo.github.io/PicGo-Doc/zh/guide/config.html)。

![](https://cdn.jsdelivr.net/gh/KiLien/Pics@master/iShot/ishot-10.png)

> 注：可以将快捷键设置为 ctrl+shift+c

### 4. 其他相关

*   [vs-picgo](https://github.com/Spades-S/vs-picgo)：`picgo`的`VSCode`版。

## 总结

将上面的步骤都设置好之后，就可以让自己的`Markdown`文档飞起来了，每次截图之后，都可以按一下`ctrl+shift+c`，这样就会将剪切板上面的截图转化为在线网络图片链接，简直就是爽的不要不要的！！

应用开发进度可以查看 [Projects](https://github.com/Molunerfinn/PicGo/projects)，会同步更新开发进度。
