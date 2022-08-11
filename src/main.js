import { createApp } from "vue";
import App from "./App.vue";
import mitt from "mitt";
import { createPinia } from "pinia";
import { globalRegister } from "./global";

const app = createApp(App);
const pinia = createPinia();
app.config.globalProperties.$mitt = mitt();
app.use(pinia);
app.use(globalRegister);
app.mount("#app");
