<template>
  <div class="qun-content">
    <el-row :gutter="1" style="justify-content: center" class="grid-content">
      <div class="leftside"><qun-menu></qun-menu></div>
      <div class="content">
        <div class="ep-bg-purple-light" />
      </div>
      <div class="rightside">
        <div class="ep-bg-purple" />
      </div>
    </el-row>
  </div>
</template>

<script setup>
import { ref } from "vue";
import QunMenu from "./QunMenu.vue";
</script>

<style scoped>
.grid-content {
  border-radius: 8px;
  min-height: 90vh;
}
.leftside {
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  max-width: 7vw;
  background-color: rgba(246, 247, 246, 0.65) !important;
  scroll-behavior: smooth;
  overscroll-behavior: contain;
}
.content {
  width: 80vw;
  background: rgba(246, 247, 246, 0.4);
  scroll-behavior: smooth;
  overscroll-behavior: contain;
}
.rightside {
  width: 10vw;
  background: rgba(246, 247, 246, 0.15);
  backdrop-filter: blur(2px);
  scroll-behavior: smooth;
  overscroll-behavior: contain;
}
.qun-content {
  width: 97%;
  margin-top: 10px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  height: 100%;
}
</style>
