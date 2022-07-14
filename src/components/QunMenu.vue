<template>
  <div class="qun-menu">
    <template v-for="(p, index) in config.zhuboList" :key="p">
      <el-row>
        <el-badge :value="p.name" type="primary">
          <el-avatar
            :shape="config.shape"
            :size="config.size"
            :src="p.avatar"
            :class="{ active: currentTab === index }"
            @click="avatarClick(index)"
          />
        </el-badge>
      </el-row>
    </template>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { config } from "../config/qunMenuConfig";
let currentTab = ref(0);
function avatarClick(index) {
  console.log(index);
  currentTab.value = index;
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
