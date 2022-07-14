<template>
  <div class="qun-menu">
    <template v-for="(p, index) in config.zhuboList" :key="p">
      <el-row>
        <el-badge :value="p.name" type="primary">
          <el-avatar
            :shape="config.shape"
            :src="p.avatar"
            :size="size"
            :class="{ active: currentTab === index }"
            @click="avatarClick(index)"
          />
        </el-badge>
      </el-row>
    </template>
  </div>
</template>

<script setup>
import { ref, inject } from "vue";
import { config } from "../config/qunMenuConfig";
let currentTab = ref(0);
let width = document.body.clientWidth;
function avatarClick(index) {
  currentTab.value = index;
}

let size = width / 18;

if (width < 1000) {
  size = width / (Math.ceil(width / 100) + 4);
  if (size < 50) {
    size = 50;
  }
}
</script>

<style scoped>
.qun-menu {
  width: 100%;
}
.el-row {
  align-items: center;
  justify-content: center;
  margin-top: 10px;
}
.el-avatar {
  border-radius: 8px;
}
.el-avatar.active {
  border: 1px solid #409eff;
}
</style>
<style>
.el-badge__content.is-fixed {
  transform: translateY(-50%) translateX(70%) !important;
}
</style>
