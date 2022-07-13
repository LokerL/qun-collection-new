<template>
  <el-container class="main-container">
    <el-row :gutter="20">
      <el-col :span="8">
        <div class="leftside"></div>
      </el-col>
      <el-col :span="8">
        <div class="content" id="image-scroll-container"></div>
      </el-col>
      <el-col :span="8"> </el-col>
    </el-row>
  </el-container>
</template>

<script setup>
import { ref } from "vue";
const item = {
  date: "2016-05-02",
  name: "Tom",
  address: "No. 189, Grove St, Los Angeles",
};
const tableData = ref(Array.from({ length: 5 }).fill(item));
</script>

<style scoped>
.main-container {
  position: absolute;
  margin: 6% 5%;
  width: 92%;
  height: 90%;
  min-width: 750px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  overflow: hidden;
}
</style>
