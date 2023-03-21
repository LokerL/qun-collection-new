import { createApp, ref } from "vue";
import App from "./App.vue";
import mitt from "mitt";
import { globalRegister } from "./global";

const urlRoomId = window.location.href.split("#").pop();
const defaultRoomId = !isNaN(urlRoomId) ? urlRoomId : "71415";

const app = createApp(App);
app.config.globalProperties.$mitt = mitt();
app.config.globalProperties.currRoomId = ref(defaultRoomId);
app.use(globalRegister);
app.mount("#app");
