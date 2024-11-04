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
            :src="imgUrl(group)"
            fit="fill"
            style="width: 200px; height: 200px"
          />
          <div class="btn-group" style="width: 200px">
            <el-button-group>
              <el-button type="info" @click="copyGroupId(group.qun_id)"
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
          <h4 class="group-name">{{ group.qun_name }}</h4>
          <div direction="vertical">
            <h6 class="group-owner">
              <el-icon><Avatar /></el-icon>{{ group.qun_owner }}
            </h6>
            <div class="tags">
              <el-tag
                v-for="item in group.qun_tag"
                :key="item"
                :type="getType(item).type"
                class="mx-1"
                size="small"
                :effect="getType(item).effect"
                round
              >
                {{ item }}
              </el-tag>
            </div>
            <el-scrollbar class="group-info">
              <el-icon><ChatDotSquare /></el-icon>{{ group.qun_description }}
            </el-scrollbar>
          </div>
        </div>
      </el-card>
    </div>
  </el-scrollbar>
</template>

<script setup>
import { ElMessage } from "element-plus";
import { getGroupsByRoomId, getTags } from "../db";
import {
  ref,
  watch,
  computed,
  getCurrentInstance,
  onBeforeMount,
  onMounted,
} from "vue";

let tags;
const defaultTag = [
  {
    name: "开播提醒",
    type: "",
    effect: "dark",
  },
  {
    name: "机器人",
    type: "success",
    effect: "dark",
  },
  {
    name: "游戏交流",
    type: "warning",
    effect: "dark",
  },
  {
    name: "禁言",
    type: "info",
    effect: "dark",
  },
  {
    name: "满",
    type: "danger",
    effect: "dark",
  },
];
let groups = ref([]);

function imgUrl(group) {
  const id = group.qun_id;
  if (!/^\d+$/.test(id)) {
    return group.join_link;
  }
  return "http://p.qlogo.cn/gh/" + id + "/" + id + "/0";
}

const { appContext } = getCurrentInstance();
const globalProperties = appContext.config.globalProperties;

watch(globalProperties.currRoomId, (newVal, oldVal) => {
  initGroups();
});

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

const initGroups = () => {
  getGroupsByRoomId(globalProperties.currRoomId.value).then((res) => {
    groups.value = res;
  });
};
const initTags = () => {
  getTags().then((res) => {
    tags = res;
  });
};

onMounted(() => {
  initGroups();
  initTags();
  globalProperties.$mitt.on("searchEvent", (res) => {
    const qun = groups.value;
    function filterItems(query) {
      return qun.filter(function (el) {
        return JSON.stringify(el).indexOf(query) > -1;
      });
    }
    if (res == "") {
      initGroups();
    }
    groups.value = filterItems(res);
  });
});

onBeforeMount(() => {
  appContext.config.globalProperties.$mitt.off("searchEvent");
});

function getType(name) {
  if (tags) {
    return tags.find((item) => item.name === name);
  } else {
    return defaultTag.find((item) => item.name === name);
  }
}
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
