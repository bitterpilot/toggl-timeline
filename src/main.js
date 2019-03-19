import Vue from "vue";
import App from "./App.vue";
// import TogglClient from "toggl-api";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");

// var toggl = new TogglClient({
//   apiToken: "94091a36c1a8fc2a8cf0a329cf6ca0f4"
// });
// console.log("ws");
// console.log(toggl.getWorkspaces());
