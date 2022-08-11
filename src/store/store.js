import { defineStore } from "pinia";

export const useStore = defineStore("qunStore", {
  // 定义state，用来存储状态的
  state: () => {
    return {
      loginInfo: {
        username: "",
        password: "",
        showLoginPage: false,
      },
      userInfo: {},
    };
  },
  // 定义getters，类似于computed，具有缓存g功能
  getters: {},
  // 定义actions，类似于methods，用来修改state，做一些业务逻辑
  actions: {},
});
