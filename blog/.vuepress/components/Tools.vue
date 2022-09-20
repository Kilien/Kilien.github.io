<template>
  <Common>
    <template #page>
      <PageHeader :page-info="pageInfo" />
      111
    </template>
  </Common>
</template>

<script setup lang="ts">
import Common from "@theme/Common.vue";
import PageHeader from "@theme/PageHeader.vue";
import { usePageFrontmatter } from "@vuepress/client";
import { computed } from "vue";

const pageInfo = computed(() => {
  return {
    subtitle:
      "When you are looking at the stars, please put the brightest star shining night sky as my soul.",
    bgImage: {
      path: "/img/pages/links.png",
      mask: "rgba(16, 106, 225 , 0.5)",
    },
  };
});
</script>
