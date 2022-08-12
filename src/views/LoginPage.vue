<template>
  <div class="login-page">
    <el-dialog
      v-model="loginInfo.showLoginPage"
      :customClass="{ previewDialog: !regActive }"
      :showClose="false"
      class="login-dialog"
    >
      <form
        class="form card"
        :class="{ activeR: regActive, activeL: regDeactive }"
      >
        <div class="card_header">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path
              fill="currentColor"
              d="M4 15h2v5h12V4H6v5H4V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6zm6-4V8l5 4-5 4v-3H2v-2h8z"
            ></path>
          </svg>
          <h1 class="form_heading">登录</h1>
        </div>
        <div class="field">
          <label for="username">账号</label>
          <input
            class="input"
            name="username"
            type="text"
            placeholder="请输入账号"
            id="username"
            autocomplete="off"
            v-model="loginInfo.username"
          />
        </div>
        <div class="field">
          <label for="password">密码</label>
          <input
            class="input"
            name="password"
            type="password"
            placeholder="请输入密码"
            id="password"
            v-model="loginInfo.password"
          />
        </div>
        <div class="field action-field">
          <span></span>
          <button class="button" @click.prevent="login">登录</button>
          <span class="action-span" @click="active">立即注册</span>
        </div>
      </form>
      <form
        class="form card hideL"
        :class="{ activeR: regActive, activeL: regDeactive }"
      >
        <div class="card_header">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path
              fill="currentColor"
              d="M4 15h2v5h12V4H6v5H4V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6zm6-4V8l5 4-5 4v-3H2v-2h8z"
            ></path>
          </svg>
          <h1 class="form_heading">注册页面</h1>
        </div>
        <div class="field">
          <label for="username">账号</label>
          <input
            class="input"
            name="username"
            type="text"
            placeholder="请输入账号"
            id="r_username"
            autocomplete="off"
            v-model="regInfo.username"
          />
        </div>
        <div class="field">
          <label for="qq">QQ号</label>
          <input
            class="input"
            name="qq"
            type="text"
            placeholder="请输入你的QQ号"
            id="qq"
            autocomplete="off"
            v-model="regInfo.qq"
          />
        </div>
        <div class="field">
          <label for="password">密码</label>
          <input
            class="input"
            name="password"
            type="password"
            placeholder="请输入密码"
            id="r_password"
            v-model="regInfo.password"
          />
        </div>
        <div class="field">
          <label for="confirm_password">确认密码</label>
          <input
            class="input"
            name="confirm_password"
            type="password"
            placeholder="请输入确认密码"
            id="confirm_password"
            v-model="regInfo.confirmPassword"
          />
        </div>
        <div class="field action-field">
          <button class="button" @click.prevent="register">注册</button>
          <span class="action-span" @click="deactive">立即登录</span>
        </div>
      </form>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "../store/store";
import { storeToRefs } from "pinia";

const store = useStore();
const { loginInfo, regInfo } = storeToRefs(store);

const login = () => {
  store.login();
  store.initData();
};

const register = () => {
  store.register();
};

const regActive = ref(false);
const regDeactive = ref(false);
const active = (e) => {
  regActive.value = !regActive.value;
  regDeactive.value = false;
};
const deactive = (e) => {
  regDeactive.value = !regDeactive.value;
  regActive.value = false;
};
</script>

<style>
.login-page .el-dialog {
  overflow: hidden;
  height: 400px;
  width: 233px !important;
  border-radius: 10px !important;
  transition: all 1s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.previewDialog {
  height: 300px !important;
}
.login-page .el-dialog__header {
  display: none;
}
.login-page .el-dialog__body {
  padding: 0 !important;

  display: flex;
  flex-wrap: wrap;
  border-radius: 10px;
}
</style>

<style scoped>
/* From uiverse.io by @alexmaracinaru */
.card {
  width: 200px;
  height: 354px;
  background: #f4f6fb;
  border: 1px solid white;
  box-shadow: 10px 10px 64px 0px rgba(180, 180, 207, 0.75);
  -webkit-box-shadow: 10px 10px 64px 0px rgba(186, 186, 202, 0.75);
  -moz-box-shadow: 10px 10px 64px 0px rgba(208, 208, 231, 0.75);
  border-radius: 10px;
}

.form {
  padding: 25px;
  border-radius: 10px;
}

.card_header {
  display: flex;
  align-items: center;
}

.card svg {
  color: #7878bd;
  margin-bottom: 20px;
  margin-right: 5px;
}

.form_heading {
  padding-bottom: 20px;
  font-size: 21px;
  color: #7878bd;
}

.field {
  padding-bottom: 10px;
}

.input {
  border-radius: 5px;
  background-color: #e9e9f7;
  padding: 5px;
  width: 100%;
  color: #7a7ab3;
  border: 1px solid #dadaf7;
}

.input:focus-visible {
  outline: 1px solid #aeaed6;
}

.input::placeholder {
  color: #bcbcdf;
}

label {
  color: #b2bac8;
  font-size: 14px;
  display: block;
  padding-bottom: 4px;
}

button {
  background-color: #7878bd;
  margin-top: 10px;
  margin-right: 20px;
  font-size: 14px;
  padding: 7px 12px;
  font-weight: 500;
  color: white;
}

button:hover {
  background-color: #5f5f9c;
}
.activeR {
  transition: all 1s cubic-bezier(0.645, 0.045, 0.355, 1);
  transform: translateY(-100%);
}
.activeL {
  transition: all 1s cubic-bezier(0.645, 0.045, 0.355, 1);
  transform: translateY(0);
}
.action-field {
  display: flex;
  justify-content: right;
}
.action-field .action-span {
  font-size: 10px;
  color: #999;
  align-self: flex-end;
  cursor: pointer;
}
</style>
