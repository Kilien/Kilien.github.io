<template>
  <Common>
    <template #page>
      <PageHeader :page-info="pageInfo" />
      <!-- <canvas id="canvas-basic"></canvas> -->
      <canvas id="canvas-image-blending" ref="canvas" height="850"></canvas>
    </template>
  </Common>
</template>

<script setup lang="ts">
import Common from "@theme/Common.vue";
import PageHeader from "@theme/PageHeader.vue";
import Granim from "granim";
import { usePageFrontmatter } from "@vuepress/client";
import { ref, computed, onMounted } from "vue";

const pageInfo = computed(() => {
  return {
    subtitle:
      "lit. the trees long for peace but the wind will never cease",
    bgImage: {
      path: "/img/pages/bg-forest.jpg",
      mask: "rgba(16, 106, 225 , 0.5)",
    },
  };
});

const canvas = ref("");

function resizeCanvas() {
  canvas.value.width = window.innerWidth - 3;
}

/**
 * 节流
 * @param {Function} callback 回调函数
 * @param {Number} duration 节流间隔时间
 */
function handleThrottle(callback, duration = 70) {
  let throttleTimer;
  return () => {
    if (throttleTimer) return;

    throttleTimer = setTimeout(() => {
      callback();
      throttleTimer = null;
    }, duration);
  };
}

onMounted(() => {
  console.log("wid..", window.innerWidth);
  resizeCanvas();
  // 添加监听屏幕变化
  window.onresize = handleThrottle(() => {
    resizeCanvas();
  });
  // canvas.value.width = window.innerWidth - 2;
  var granimInstance = new Granim({
    element: "#canvas-image-blending",
    direction: "top-bottom",
    isPausedWhenNotInView: true,
    image: {
      source: "/img/pages/bg-forest.jpg",
      stretchMode: ["stretch", "stretch-if-bigger"],
      blendingMode: "multiply",
    },
    states: {
      "default-state": {
        gradients: [
          ["#29323c", "#485563"],
          ["#FF6B6B", "#556270"],
          ["#80d3fe", "#7ea0c4"],
          ["#f0ab51", "#eceba3"],
        ],
        transitionSpeed: 7000,
      },
    },
  });
});
</script>
<style lang="scss" scoped>
#canvas-image {
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
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
