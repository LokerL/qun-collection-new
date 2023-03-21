import { createApp, ref } from "vue";
import App from "./App.vue";
import mitt from "mitt";
import { globalRegister } from "./global";

const defaultRoomId = window.location.href.split("/").pop();

const app = createApp(App);
app.config.globalProperties.$mitt = mitt();
app.config.globalProperties.currRoomId = ref(
  defaultRoomId ? defaultRoomId : "71415"
);
app.use(globalRegister);
app.mount("#app");
