<template>
  <el-col>
    <el-row>
      <qun-header></qun-header>
    </el-row>
    <el-row>
      <qun-content></qun-content>
    </el-row>
  </el-col>
  <!-- <el-container class="layout-container">

    <qun-content></qun-content>
  </el-container> -->
</template>

<script setup>
import { onMounted } from "vue";
import QunHeader from "../components/QunHeader.vue";
import QunMenu from "../components/QunMenu.vue";
import QunContent from "../components/QunContent.vue";
import { ElNotification } from 'element-plus'

onMounted(() => {
  const n1 = ElNotification({
    title: '警告',
    message: '本网站提供的QQ群信息仅供参考，我们无法对群的质量进行保证。请用户自行判断并承担风险。',
    type: 'warning',
    onClose	: () => {
      ElNotification({
        title: '警告',
        dangerouslyUseHTMLString: true,
        message: `部分内置QQ机器人的群因TX风控更严格,暂时停用了,请见谅。 <br>
        如需微信自动提醒,可以<br>
        1. 关注【WxPusher消息推送平台】<br>
        2. 微信内点击链接 去掉方括号：【https://wxpusher.zjiecode.com/wxuser/?type=2&id=2203#/follow】<br>
      详细操作可见<a href="https://yuba.douyu.com/p/508466611680075803">鱼吧:【寅子单房间微信直播提醒通知】</a>
      `,
        type: 'warning',
      });
    }
  });

});

</script>

<style scoped>
.el-row {
  justify-content: center;
}
</style>
