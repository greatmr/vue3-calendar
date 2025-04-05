import { createApp } from "vue"
import { VueCalendarComponent } from "../src/main"
import App from "./App.vue"

const app = createApp(App)
app.use(VueCalendarComponent)
app.mount("#app")
