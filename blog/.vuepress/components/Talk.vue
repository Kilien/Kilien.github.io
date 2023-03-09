<template>
  <Common>
    <template #page>
      <PageHeader :page-info="pageInfo" />
      <main class="layout">
        <div class="talk-container">
          <div id="tip" v-if="isTip" style="text-align: center">ipseak依赖加载失败！</div>
          <div id="ispeak"></div>
        </div>
      </main>

      <link
        rel="stylesheet"
        href="https://cdn.staticfile.org/highlight.js/10.6.0/styles/atom-one-dark.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/ispeak@4.4.0/style.css"
      />
    </template>
  </Common>
</template>

<script setup lang="ts">
// import Granim from "granim";
// @ts-ignore
import Common from "@theme/Common.vue";
// @ts-ignore
import PageHeader from "@theme/PageHeader.vue";
import { loadVoLteResourceList } from "../utils/loadScript";
import { ref, computed, onBeforeMount } from "vue";

const pageInfo = computed(() => {
  return {
    subtitle: "lit. the trees long for peace but the wind will never cease",
    bgImage: {
      path: "/img/pages/wallhaven-frost.png",
    },
  };
});

const isTip = ref(true);

// 异步加載cdn js,请求 speak 内容
onBeforeMount(async () => {
  await loadVoLteResourceList();
  var head = document.getElementsByTagName("head")[0];
  var meta = document.createElement("meta");
  meta.name = "referrer";
  meta.content = "no-referrer";
  head.appendChild(meta);
  if (window?.ispeak) {
    window.ispeak
      ?.init({
        el: "#ispeak",
        api: "https://kkapi-open-kilien.vercel.app/",
        author: "6336606fae8ea14839c4ee5d",
        pageSize: 10,
        loading_img: "https://czrui99.oss-cn-chengdu.aliyuncs.com/loading.gif",
      })
      .then(function () {
        console.log("ispeak 加载完成");
        isTip.value = false;
      });
  }
});
</script>
<style lang="scss" scoped>
#article-container .D-avatar {
  margin: 0 10px 0 0;
}
.canvas-interactive-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
}
#canvas-basic {
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

:deep(.page-content) {
  // background-image: linear-gradient(to right bottom, #2cd8d5, #33d6ea, #54d3f8, #79ceff, #9ac9ff, #b2c5ff, #c9c0fb, #debcf3, #ecb9e7, #f7b8db, #fdb8cf, #ffbac3);
  background-image: linear-gradient(
    to right bottom,
    #e3fdf5,
    #cef6f5,
    #bbedf8,
    #afe3fc,
    #aed7ff,
    #bad3ff,
    #c9ceff,
    #dac8fd,
    #e7cffb,
    #f1d6fa,
    #f9def9,
    #ffe6fa
  );
}

:deep(.navbar) {
  color: white;
}

:deep(.site-name) {
  color: white;
}

.layout {
  margin: 0 auto;
  display: flex;
  flex: 1 auto;
  flex-direction: column;
  padding: 40px 15px;
  max-width: 1200px;
  width: 96%;
  z-index: 1;

  @media (max-width: 1280px) {
    width: 900px;
  }

  @media (max-width: 960px) {
    width: 600px;
  }

  @media (max-width: 750px) {
    padding: 20px 4px;
  }
  .talk-container {
    width: 100%;
    padding: 50px 40px;
    @media (max-width: 750px) {
      padding: 0;
    }
    border-radius: 8px;
    background: hsla(0, 0%, 100%, 0.5);
    box-shadow: 0 3px 8px 6px rgba(7, 17, 27, 0.05);
    transition: all 0.3s;
    z-index: 1;

    @media (max-width: 750px) {
      :deep(.speak-body) {
        padding: 0 20px;
      }
    }
  }
}

:deep(.footer) {
  width: 100%;
  // background-color: rgba(#000, 0.5);
  padding: 1.5rem 2.5rem;
  text-align: center;
  line-height: 1.5rem;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  bottom: 0;
  // color: #fff;
  z-index: 999;
  transition: 0.5s;
}
</style>
