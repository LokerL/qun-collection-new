<template>
  <div class="qun-menu">
    <template v-for="p in roomList" :key="p">
      <el-row>
        <el-badge :value="p.num" type="primary">
          <el-avatar
            shape="square"
            :src="p.avatar"
            :size="size"
            :class="{ active: currentTab === p.room_id }"
            @click="avatarClick(p.room_id)"
          />
        </el-badge>
      </el-row>
    </template>
  </div>
</template>

<script setup>
import { ref, getCurrentInstance, inject, onMounted } from "vue";
import { getRooms, getGroupsCountByRoomId } from "../db";

let roomList = ref([]);
const { appContext } = getCurrentInstance();
onMounted(async () => {
  getRooms().then(async (res) => {
    roomList.value = res;
  });
});

let currentTab = ref(0);
let width = document.body.clientWidth;

function avatarClick(index) {
  history.pushState(null, null, index);
  appContext.config.globalProperties.currRoomId.value = index;
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
  border: 5px solid #409eff;
}
</style>
<style>
.el-badge__content.is-fixed {
  transform: translateY(-50%) translateX(70%) !important;
}
</style>
