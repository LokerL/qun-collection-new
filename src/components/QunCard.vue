<template>
  <el-scrollbar>
    <div class="qun-card" wrap @click="test">
      <el-card
        v-for="group in groups"
        :key="group"
        :body-style="{ padding: '0px' }"
      >
        <div>
          <el-image
            :src="imgUrl(group.id)"
            fit="fill"
            style="width: 200px; height: 200px"
          />
          <div class="btn-group" style="width: 200px">
            <el-button-group>
              <el-button type="info" @click="copyGroupId(group.id)"
                ><el-icon><DocumentCopy /></el-icon>复制群号</el-button
              >

              <el-button type="info" :disabled="group.join_link == ''"
                ><el-link
                  :href="group.join_link"
                  target="_blank"
                  :disabled="group.join_link == ''"
                  :underline="false"
                  ><el-icon><Promotion /></el-icon>一键加群</el-link
                ></el-button
              >
            </el-button-group>
          </div>
        </div>

        <div style="padding: 5px 10px">
          <h4 class="group-name">{{ group.name }}</h4>
          <div direction="vertical">
            <h6 class="group-owner">
              <el-icon><Avatar /></el-icon>{{ group.owner }}
            </h6>
            <div class="tags">
              <el-tag
                v-for="item in group.tag"
                :key="item"
                :type="typeCale(item).type"
                class="mx-1"
                size="small"
                :effect="typeCale(item).effect"
                round
              >
                {{ item }}
              </el-tag>
            </div>
            <el-scrollbar class="group-info">
              <el-icon><ChatDotSquare /></el-icon>{{ group.description }}
            </el-scrollbar>
          </div>
        </div>
      </el-card>
    </div>
  </el-scrollbar>
</template>

<script setup>
import { config } from "../config/qunCardConfig";
import { ElMessage } from "element-plus";
import {
  ref,
  computed,
  getCurrentInstance,
  onBeforeMount,
  onMounted,
} from "vue";

let groups = ref(JSON.parse(JSON.stringify(config.qun.groups)));
function imgUrl(id) {
  return "http://p.qlogo.cn/gh/" + id + "/" + id + "/0";
}
function typeCale(name) {
  return config.qun.tag.find((item) => item.name === name);
}

const { appContext } = getCurrentInstance();

const copyGroupId = (id) => {
  var input = document.createElement("input"); // 创建input对象
  input.value = id; // 设置复制内容
  document.body.appendChild(input); // 添加临时实例
  input.select(); // 选择实例内容
  document.execCommand("Copy"); // 执行复制
  document.body.removeChild(input); // 删除临时实例
  ElMessage({
    dangerouslyUseHTMLString: true,
    message: `<strong>复制成功：群号 <i>${id}</i></strong>`,
    type: "success",
    duration: 1500,
  });
};

onMounted(() => {
  appContext.config.globalProperties.$mitt.on("searchEvent", (res) => {
    const qun = config.qun.groups;
    function filterItems(query) {
      return qun.filter(function (el) {
        return JSON.stringify(el).indexOf(query) > -1;
      });
    }
    if (res == "") {
      groups.value = JSON.parse(JSON.stringify(config.qun.groups));
    }
    groups.value = filterItems(res);
  });
});

onBeforeMount(() => {
  appContext.config.globalProperties.$mitt.off("searchEvent");
});
</script>

<style scoped>
.qun-card {
  margin: 0 10px;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  height: 90vh;
}
.el-card {
  display: "inline-block";
  margin: 10px 10px;
  border-radius: 8px;
  max-width: 200px;
  max-height: 350px;
}
.group-name {
  margin: 0;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.group-owner {
  margin: 0;
}
.group-info {
  font-size: 14px;
  color: #73767a;
  height: 60px;
}
.btn-group {
  position: relative;
  top: -36px;
  z-index: 999;
  height: 0;
}
.el-button {
  width: 100px;
  border-radius: 0;
  opacity: 0;
}
.el-card:hover .el-button {
  transition: opacity 0.3s ease-in;
  -moz-transition: opacity 0.3s ease-in; /* Firefox 4 */
  -webkit-transition: opacity 0.3s ease-in; /* Safari 和 Chrome */
  -o-transition: opacity 0.3s ease-in; /* Opera */
  opacity: 0.9;
}
.el-link {
  color: var(--el-color-white);
}
</style>
