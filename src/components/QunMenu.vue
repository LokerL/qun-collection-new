<template>
  <el-menu default-active="2" class="el-menu-vertical-demo">
    <el-sub-menu index="1">
      <template #title>
        <el-icon><location /></el-icon>
        <span>主机区</span>
      </template>

      <el-menu-item index="1-1">item one</el-menu-item>
      <el-menu-item index="1-2">item two</el-menu-item>
      <el-menu-item index="1-3">item three</el-menu-item>

      <el-menu-item index="1-4-1">item one</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script setup></script>

<style>
.el-menu-vertical-demo {
  background-color: transparent !important;
}
.el-menu-vertical-demo > * {
  background-color: transparent !important;
}
.el-sub-menu {
  width: 7vw;
}
.el-menu-item {
  min-width: 100% !important;
}
.el-sub-menu .el-menu {
  background-color: unset !important;
}
ul.el-menu.el-menu--inline {
  background-color: unset !important;
}
</style>
