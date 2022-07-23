<template>
  <div class="yin-event">
    <p @click="showEvent">
      <el-icon class="header-icon" color="#909399"><Calendar /></el-icon>公告
    </p>
  </div>
</template>

<script setup>
import { h } from "vue";
import { ElMessageBox } from "element-plus";
import { config } from "../config/yinEventConfig";
import Color from "element-plus/es/components/color-picker/src/color";
const eventEls = config.eventList.map((item) => {
  function getDaysBetween(startDate, enDate) {
    let sDate = Date.parse(startDate);
    let eDate = Date.parse(enDate);
    if (sDate > eDate) {
      [sDate, eDate] = [eDate, sDate];
    }
    if (sDate === eDate) {
      return 1;
    }
    const days = (eDate - sDate) / (1 * 24 * 60 * 60 * 1000);
    return Math.floor(days);
  }
  const d = new Date();

  const eventStr = `${item.event}，距今${getDaysBetween(item.time, d)}天！`;
  return h("div", { style: "margin-bottom: 10px" }, eventStr);
});

const showEvent = () => {
  ElMessageBox({
    title: "公告",
    message: h("div", null, eventEls),
    showCancelButton: true,
    customStyle: { width: "20vw", minWidth: "280px" },
    distinguishCancelAndClose: true,
    confirmButtonText: "确认收到",
    cancelButtonText: "火速围观",
  })
    .then(({ value }) => {
      ElMessage({
        type: "success",
        message: `Your email is:${value}`,
      });
    })
    .catch((action) => {
      if (action === "cancel") {
        window.open("https://www.douyu.com/71415");
      }
    });
};
</script>

<style>
.yin-event {
  display: flex;
  align-items: center;
  color: var(--el-text-color-regular);
  line-height: 1;
  font-size: 13px;
  cursor: pointer;
  margin-left: 15px;
}

.yin-event .header-icon {
  font-size: 20px;
  cursor: pointer;
  margin-left: 15px;
}
.yin-event p {
  display: flex;
  align-items: center;
}
</style>
