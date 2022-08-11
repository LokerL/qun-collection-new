<template>
  <div class="login"></div>
  <el-dialog
    v-model="loginInfo.showLoginPage"
    custom-class="previewDialog"
    :showClose="false"
    class="login-dialog"
  >
    <form class="form card">
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
        <h1 class="form_heading">Sign in</h1>
      </div>
      <div class="field">
        <label for="username">Username</label>
        <input
          class="input"
          name="username"
          type="text"
          placeholder="Username"
          id="username"
          autocomplete="off"
        />
      </div>
      <div class="field">
        <label for="password">Password</label>
        <input
          class="input"
          name="user_password"
          type="password"
          placeholder="Password"
          id="password"
        />
      </div>
      <div class="field">
        <button class="button">Log1in</button>
      </div>
    </form>
  </el-dialog>
</template>

<script setup>
import { useStore } from "../store/store";
import { storeToRefs } from "pinia";

const { loginInfo } = storeToRefs(useStore());
</script>

<style>
.el-dialog__header {
  display: none;
}
.el-dialog__body {
  padding: 0 !important;
}
.el-dialog {
  /* margin: 20vh 40vw; */
  border-radius: 10px !important;
  width: fit-content !important;
}
</style>

<style scoped lang="less">
/* From uiverse.io by @alexmaracinaru */
.card {
  max-width: 200px;
  height: 254px;
  background: #f4f6fb;
  border: 1px solid white;
  box-shadow: 10px 10px 64px 0px rgba(180, 180, 207, 0.75);
  -webkit-box-shadow: 10px 10px 64px 0px rgba(186, 186, 202, 0.75);
  -moz-box-shadow: 10px 10px 64px 0px rgba(208, 208, 231, 0.75);
  border-radius: 10px;
}

.form {
  padding: 25px;
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
  font-size: 14px;
  padding: 7px 12px;
  font-weight: 500;
  color: white;
}

button:hover {
  background-color: #5f5f9c;
}
</style>
