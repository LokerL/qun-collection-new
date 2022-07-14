<template>
  <div class="qun-card" wrap>
    <el-card
      v-for="group in config.qun.groups"
      :key="group"
      :body-style="{ padding: '0px' }"
    >
      <el-image
        :src="imgUrl(group.id)"
        fit="fill"
        style="width: 200px; height: 200px"
      />
      <div style="padding: 5px 10px">
        <h4 class="group-name">{{ group.name }}</h4>
        <div direction="vertical">
          <h6 class="group-owner">
            <el-icon><Avatar /></el-icon>{{ group.owner }}
          </h6>
          <div class="tags">
            <el-tag
              v-for="item in group.tag"
              :key="item.name"
              :type="item.type"
              class="mx-1"
              size="small"
              effect="dark"
              round
            >
              {{ item.name }}
            </el-tag>
          </div>
          <div class="group-info">
            <el-icon><ChatDotSquare /></el-icon>{{ group.description }}
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script setup>
import { config } from "../config/qunCardConfig";
import { ref, computed } from "vue";
function imgUrl(id) {
  return "http://p.qlogo.cn/gh/" + id + "/" + id + "/0";
}
</script>

<style scoped>
.qun-card {
  margin: 10px;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
}
.el-card {
  display: "inline-block";
  margin: 10px 10px;
  border-radius: 8px;
  max-width: 200px;
}
.group-name {
  margin: 0;
}
.group-owner {
  margin: 0;
}
.group-info {
  font-size: 10px;
  color: #999;
}
</style>
