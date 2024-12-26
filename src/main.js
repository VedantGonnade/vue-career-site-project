import { createApp } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import "@/index.css";
import app from "@/App.vue";

library.add(faSearch);

createApp(app).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
