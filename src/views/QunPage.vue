<template>
  <el-col>
    <el-row>
      <qun-header></qun-header>
    </el-row>
    <el-row>
      <qun-content></qun-content>
    </el-row>
  </el-col>
  <!-- <el-container class="layout-container">
    
    <qun-content></qun-content>
  </el-container> -->
</template>

<script setup>
import QunHeader from "../components/QunHeader.vue";
import QunMenu from "../components/QunMenu.vue";
import QunContent from "../components/QunContent.vue";
</script>

<style scoped>
.el-row {
  justify-content: center;
}
</style>
