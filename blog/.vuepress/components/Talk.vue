<template>
  <Common>
    <template #page>
      <PageHeader :page-info="pageInfo" />
      <canvas id="canvas-basic"></canvas>
      <main class="layout">
        <div id="tip" style="text-align: center">加载中...</div>
        <div class="talk-container">
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
import Granim from "granim";
import Common from "@theme/Common.vue";
import PageHeader from "@theme/PageHeader.vue";
import { loadVoLteResourceList } from "../utils/loadScript";
import { ref, computed, onBeforeMount, onMounted } from "vue";

const pageInfo = computed(() => {
  return {
    subtitle: "lit. the trees long for peace but the wind will never cease",
    bgImage: {
      path: "/img/pages/bg-forest.jpg",
      mask: "rgba(16, 106, 225 , 0.2)",
    },
  };
});

const canvas = ref("");

// 异步加載cdn js,请求 speak 内容
onBeforeMount(async () => {
  await loadVoLteResourceList();
  var head = document.getElementsByTagName("head")[0];
  var meta = document.createElement("meta");
  meta.name = "referrer";
  meta.content = "no-referrer";
  head.appendChild(meta);
  if (ispeak) {
    ispeak
      ?.init({
        el: "#ispeak",
        api: "https://kkapi-open-kilien.vercel.app/",
        author: "6336606fae8ea14839c4ee5d",
        pageSize: 10,
        loading_img: "https://czrui99.oss-cn-chengdu.aliyuncs.com/loading.gif",
      })
      .then(function () {
        console.log("ispeak 加载完成");
        document.getElementById("tip").style.display = "none";
      });
  } else {
    document.getElementById("tip").innerHTML = "ipseak依赖加载失败！";
  }
});

onMounted(() => {
  var granimInstance = new Granim({
    element: "#canvas-basic",
    direction: "diagonal",
    isPausedWhenNotInView: true,
    // image: {
    //   source: "/img/pages/bg-forest.jpg",
    //   stretchMode: ["stretch", "stretch-if-bigger"],
    //   blendingMode: "multiply",
    // },
    states: {
      "default-state": {
        gradients: [
          ["#29323c", "#485563"],
          ["#81ffef", "#f067b4"],
          ["#77a1d3", "#79cbca", "#e684ae"],
          ["#ff6e7f", "#bfe9ff"],
          ["#fad7a1", "#e96d71"],
        ],
        transitionSpeed: 8000,
      },
    },
  });
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

.layout {
  margin: 0 auto;
  display: flex;
  flex: 1 auto;
  padding: 40px 15px;
  max-width: 1200px;
  width: 96%;
  z-index: 1;
  @media (max-width: 750px) {
    padding: 20px 4px;
  }
  .talk-container {
    width: 100%;
    padding: 50px 40px;
    @media (max-width: 750px) {
      padding: 36px 14px;
    }
    border-radius: 8px;
    background: hsla(0, 0%, 100%, 0.5);
    box-shadow: 0 3px 8px 6px rgba(7, 17, 27, 0.05);
    transition: all 0.3s;
    z-index: 1;
  }
}
// :deep(.page-header) {
//   z-index: 1;
// }

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
