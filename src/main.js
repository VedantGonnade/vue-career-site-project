import { createApp } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch, faLocationDot } from "@fortawesome/free-solid-svg-icons";

import "@/index.css";
import router from "@/router";
import app from "@/App.vue";

library.add(faSearch, faLocationDot);

createApp(app)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
