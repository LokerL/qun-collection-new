<template>
  <div>
    <button class="btn-login" @click="loginInfo.showLoginPage = true">
      登录/注册
    </button>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { useStore } from "../store/store";
import { storeToRefs } from "pinia";

const { loginInfo } = storeToRefs(useStore());

const dialogFormVisible = ref(false);
const form = reactive({
  name: "",
});
</script>

<style lang="less" scoped>
/* From uiverse.io by @EmmaxPlay */
.btn-login {
  padding: 0.3em 0.5em;
  border: none;
  outline: none;
  color: #fff;
  font-family: inherit;
  font-weight: 500;
  font-size: 12px;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 12px;
}

.btn-login::after {
  content: "";
  z-index: -1;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgb(46, 46, 46);
  left: 0;
  top: 0;
  border-radius: 10px;
}
/* glow */
.btn-login::before {
  content: "";
  background: linear-gradient(
    45deg,
    #ff0000,
    #002bff,
    #ff00c8,
    #002bff,
    #ff0000,
    #002bff,
    #ff00c8,
    #002bff
  );
  position: absolute;
  top: -2px;
  left: -2px;
  background-size: 600%;
  z-index: -1;
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  filter: blur(8px);
  animation: glowing 20s linear infinite;
  transition: opacity 0.3s ease-in-out;
  border-radius: 10px;
  opacity: 0;
}

@keyframes glowing {
  0% {
    background-position: 0 0;
  }

  50% {
    background-position: 400% 0;
  }

  100% {
    background-position: 0 0;
  }
}

/* hover */
.btn-login::before {
  opacity: 1;
}

.btn-login:active:after {
  background: transparent;
}

.btn-login:active {
  color: #000;
  font-weight: bold;
}
</style>
