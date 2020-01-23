import VueRouter from "vue-router";
import Country from "./components/Country";
import Landing from "./components/Landing";

export default new VueRouter({
  routes: [
    {
      path: "/",
      name: "countries",
      component: Landing
    },
    {
      path: "/:id",
      name: "country",
      component: Country
    }
  ]
});
