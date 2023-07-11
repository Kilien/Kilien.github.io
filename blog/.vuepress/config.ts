import { viteBundler } from "@vuepress/bundler-vite";
import { gungnirTheme } from "vuepress-theme-gungnir";
import { clipboardPlugin } from "vuepress-plugin-clipboard";

const isProd = process.env.NODE_ENV === "production";
module.exports = {
  title: "Kilien Azure",
  description: "Interesting souls, unexpected encounters",

  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: `/img/logo/favicon-16x16.ico`,
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: `/img/logo/favicon-32x32.ico`,
      },
    ],
    ["meta", { name: "application-name", content: "Kilien Azure" }],
    ["meta", { name: "apple-mobile-web-app-title", content: "Kilien Azure" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
    [
      "link",
      { rel: "apple-touch-icon", href: `/img/logo/apple-touch-icon.png` },
    ],
    ["meta", { name: "theme-color", content: "#377bb5" }],
    ["meta", { name: "msapplication-TileColor", content: "#377bb5" }],
  ],

  bundler: viteBundler(),

  theme: gungnirTheme({
    docsDir: "blog",
    docsBranch: "master",

    hitokoto: "https://v1.hitokoto.cn?c=i", // enable hitokoto (一言) or not?

    // personal information
    personalInfo: {
      name: "Kilien Azure",
      avatar: "/img/avatar.jpg",
      description: "自分の生活に忠実である",
      sns: {
        github: "Kilien",
        twitter: "Linerzore",
        instagram: {
          icon: "bi-instagram", // 社交平台的图标
          link: "https://www.instagram.com/kilienazure/", // 主页链接
        },
        email: "kilienazure@gmail.com",
        rss: "/rss.xml",
      },
    },

    // header images on home page
    homeHeaderImages: [
      {
        path: "/img/home-bg/1.jpg",
        mask: "rgba(40, 57, 101, .4)",
      },
      {
        path: "/img/home-bg/2.jpg",
        mask: "rgba(196, 176, 131, .1)",
      },
      {
        path: "/img/home-bg/3.jpg",
        mask: "rgba(68, 74, 83, .1)",
      },
      {
        path: "/img/home-bg/4.jpg",
        mask: "rgba(19, 75, 50, .2)",
      },
      {
        path: "/img/home-bg/5.png",
        mask: "rgba(19, 75, 50, .2)",
      },
      {
        path: "/img/home-bg/6.jpg",
      },
      {
        path: "/img/home-bg/7.jpg",
      },
    ],

    // other pages
    pages: {
      tags: {
        subtitle: "Black Sheep Wall",
        bgImage: {
          path: "/img/pages/tags.jpg",
          mask: "rgba(39, 170, 209, .25)",
        },
      },
      // links: {
      //   subtitle:
      //     "When you are looking at the stars, please put the brightest star shining night sky as my soul.",
      //   bgImage: {
      //     path: "/img/pages/links.png",
      //     mask: "rgba(16, 106, 225 , 0.5)",
      //   },
      // },
    },

    themePlugins: {
      // only enable git plugin in production mode
      git: isProd,
      katex: true,
      giscus: {
        repo: "Kilien/BlogComment",
        repoId: "R_kgDOH9yn0w",
        category: "Announcements",
        categoryId: "DIC_kwDOH9yn084CRVh2",
        theme: "light_protanopia",
        mapping: "title",
        darkTheme: "https://blog.zxh.io/styles/giscus-dark.css",
      },
      mdPlus: {
        all: true,
      },
      ga: "G-3K199GPS8X",
      rss: {
        siteURL: "https://kilien.github.io",
        copyright: "Kilien 2018-2022",
      },
    },

    navbar: [
      {
        text: "Home",
        link: "/",
        icon: "fa-fort-awesome",
      },
      {
        text: "Tags",
        link: "/tags/",
        icon: "fa-tag",
      },
      // {
      //   text: "Links",
      //   link: "/links/",
      //   icon: "fa-satellite-dish",
      // },
      {
        text: "Talk",
        link: "/Talk/",
        icon: "fa-satellite-dish",
      },
      {
        text: "About",
        link: "https://github.com/Kilien",
        icon: "fa-paw",
      },
    ],

    footer: `
      &copy; <a href="https://github.com/Kilien" target="_blank">Kilien</a> 2018-2022
      <br>
      Powered by <a href="https://v2.vuepress.vuejs.org" target="_blank">VuePress</a> &
      <a href="https://github.com/Renovamen/vuepress-theme-gungnir" target="_blank">Gungnir</a>
    `,
  }),
  plugins: [
    clipboardPlugin({})
  ]
};
