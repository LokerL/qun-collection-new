<template>
  <el-scrollbar class="qun-content">
    <el-row :gutter="1" style="justify-content: left" class="grid-content">
      <div class="leftside"><qun-menu></qun-menu></div>
      <div class="content">
        <qun-card></qun-card>
      </div>
      <!-- <div class="rightside">
        <div class="ep-bg-purple" />
      </div> -->
    </el-row>
  </el-scrollbar>
</template>

<script setup>
import { ref } from "vue";
import QunMenu from "./QunMenu.vue";
import QunCard from "./QunCard.vue";
</script>

<style scoped>
.grid-content {
  border-radius: 8px;
  min-height: 90vh;
}
.leftside {
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  width: 8vw;
  min-width: 80px;
  background-color: rgba(246, 247, 246, 0.65) !important;
  scroll-behavior: smooth;
  overscroll-behavior: contain;
}
.content {
  width: 75vw;
  min-width: 220px;
  background: rgba(246, 247, 246, 0.4);
  scroll-behavior: smooth;
  overscroll-behavior: contain;
}
.rightside {
  width: 7vw;
  background: rgba(246, 247, 246, 0.15);
  backdrop-filter: blur(2px);
  scroll-behavior: smooth;
  overscroll-behavior: contain;
}
.qun-content {
  min-width: 200px;
  height: 90vh;
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
