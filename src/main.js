import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "~bootstrap/scss/bootstrap.scss";
import "@/styles/base.scss";

const app = createApp(App);

app.use(router);
app.use(store);

app.mount("#app");
