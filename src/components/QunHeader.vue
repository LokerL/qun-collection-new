<template>
  <el-header style="text-align: center; font-size: 12px">
    <div class="toolbar">
      <!-- <el-avatar shape="square" :src="sidebarLogo" /> -->
      <el-input
        class="inputDeep"
        placeholder="输入检索内容"
        suffix-icon="Search"
        :clearable="true"
        v-model="searchValue"
        @input="inputFn"
      />
      <!-- <div class="content">
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
      </div> -->
    </div>
  </el-header>
</template>

<script setup>
import logo from "../assets/logo.png";
import { ref, getCurrentInstance } from "vue";
const sidebarLogo = ref(logo);
const searchValue = ref("");
const { appContext } = getCurrentInstance();
const inputFn = () => {
  appContext.config.globalProperties.$mitt.emit(
    "searchEvent",
    searchValue.value
  );
};
</script>

<style scoped>
.el-header {
  width: 100%;
  z-index: 999;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(40px);
  padding: 0 5%;
  height: 45px;
}
.el-avatar {
  background-color: unset;
}
.toolbar {
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
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
.content {
  display: flex;
  align-items: center;
}
.el-input {
  width: 30vw;
  background-color: rgba(255, 255, 255, 0.6) !important;
  border-radius: 16px;
}
:deep(.el-input__wrapper) {
  background-color: unset !important;
  border-radius: 16px;
}
</style>
