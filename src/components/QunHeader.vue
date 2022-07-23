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
      <div class="content">
        <el-dropdown>
          <p>
            <el-icon class="header-icon" color="#909399"><SetUp /></el-icon>功能
          </p>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>
                <el-link
                  href="https://docs.qq.com/form/page/DRE9XekdtTXprbEtD"
                  target="_blank"
                  ><el-icon><EditPen /></el-icon>添加/修改</el-link
                > </el-dropdown-item
              ><el-dropdown-item>
                <el-link
                  href="https://docs.qq.com/sheet/DREFpblZndGxLdHBS?tab=BB08J2&u=a000c91a4a1c4ce1825768ba5e78f4c0&viewId=fv1"
                  target="_blank"
                  ><el-icon><Document /></el-icon>查看提交信息</el-link
                >
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        <yin-event></yin-event>
      </div>
    </div>
  </el-header>
</template>

<script setup>
// import logo from "../assets/logo.png";
import { ref, getCurrentInstance } from "vue";
import YinEvent from "./YinEvent.vue";
// const sidebarLogo = ref(logo);
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
  margin-left: 15px;
}
.toolbar .content {
  color: var(--el-text-color-regular);
  font-size: var(--el-font-size-base);
  line-height: 1;
}
.content {
  display: flex;
  align-items: center;
  position: absolute;
  right: 5%;
}
.content p {
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
