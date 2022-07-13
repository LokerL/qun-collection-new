<template>
  <el-header style="text-align: center; font-size: 12px">
    <div class="toolbar">
      <el-avatar shape="square" src="../assets/logo.png" />
      <div class="content">
        <el-dropdown>
          <el-icon class="header-icon"><setting /></el-icon>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>View</el-dropdown-item>
              <el-dropdown-item>Add</el-dropdown-item>
              <el-dropdown-item>Delete</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        <span>Tom</span>
      </div>
    </div>
  </el-header>
</template>

<script setup></script>

<style scoped>
.el-header {
  width: 100%;
  z-index: 999;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(40px);
  padding: 0 5%;
}
.toolbar {
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  right: 40px;
}
.header-icon {
  font-size: 20px;
  cursor: pointer;
}
.toolbar .content {
  font-size: 20px;
}
</style>
