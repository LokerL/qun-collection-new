import { createApp } from "vue";
import App from "./App.vue";
import mitt from "mitt";
import { globalRegister } from "./global";

const app = createApp(App);
app.config.globalProperties.$mitt = mitt();
app.use(globalRegister);
app.mount("#app");
