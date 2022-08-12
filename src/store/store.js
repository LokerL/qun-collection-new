import { defineStore } from "pinia";
import supabase from "../config/supabase";

export const useStore = defineStore("qunStore", {
  // 定义state，用来存储状态的
  state: () => {
    return {
      // 所有这些属性都将自动推断其类型
      counter: 0,
      name: "Eduardo",
      loginInfo: {
        username: "",
        password: "",
        showLoginPage: false,
      },
      regInfo: {
        username: "",
        qq: "",
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
    register() {
      console.log(this.regInfo);
    },
    async initData() {
      const { data } = await supabase.from("groups").select("*");
      console.log(data);
    },
  },
});
