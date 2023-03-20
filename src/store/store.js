import { defineStore } from "pinia";
import supabase from "../config/supabase";
import md5 from "js-md5";
import { ElNotification } from "element-plus";

export const useStore = defineStore("qunStore", {
  // 定义state，用来存储状态的
  state: () => {
    return {
      // 所有这些属性都将自动推断其类型
      loading: false,
      ip: "",
      userInfo: {
        nickname: "",
        qq: "",
        groups: [],
      },
      loginInfo: {
        username: "",
        password: "",
        showLoginPage: false,
      },
      regInfo: {
        username: "",
        qq: "",
        ip: "",
        password: "",
        confirmPassword: "",
      },
    };
  },
  // 定义getters，类似于computed，具有缓存g功能
  getters: {},
  // 定义actions，类似于methods，用来修改state，做一些业务逻辑
  actions: {
    login() {
      console.log(this.loginInfo);
    },
    async register() {
      console.log(this.regInfo);
      try {
        this.loading = true;

        const updates = {
          username: this.regInfo.username,
          qq: this.regInfo.qq,
          ip: this.regInfo.ip,
          password: md5(this.regInfo.password),
        };
        console.log(updates);

        let { error } = await supabase.from("users").upsert(updates, {
          returning: "minimal", // Don't return the value after inserting
        });

        if (error) {
          ElNotification({
            title: "Error",
            message: error.message,
            type: "error",
          });
        }
        ElNotification({
          title: "Success",
          message: "注册成功！",
          type: "success",
        });

        this.loginInfo.username = this.regInfo.username;
      } catch (error) {
        ElNotification({
          title: "Error",
          message: error.message,
          type: "error",
        });
      } finally {
        this.loading = false;
      }
    },
    async initData() {
      const { data } = await supabase.from("groups").select("*");
      console.log(data);
    },
  },
});
