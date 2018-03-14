import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import { getUser } from "@/services/Utils";
import store from "./store";
import dynamicTitle from "vue-dynamic-title";

Vue.use(Router);

const router = new Router({
  mode: "history",
  linkActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/about",
      name: "About",
      component: About,
      meta: {
        browserTitle: "About"
      }
    },
    {
      path: "/about/:id",
      name: "About Detail",
      component: About,
      meta: {
        browserTitle: "About",
        browserTitleParam: "id",
        // by default, the vue-analytics plugin will use the `name`
        // on each route to log the page view. You can customize it
        // by adding an `analytics` property and a pageviewTemplate function
        // like the example below.
        analytics: {
          pageviewTemplate(route) {
            return {
              page: route.path,
              // because we run the dynamic title plugin in the beforeEach,
              // our title will be whatever we have generated via that plugin
              // in this case, it would be WWT Vue | [some-id]
              title: document.title,
              location: window.location.href
            };
          }
        }
      }
    }
  ]
});

router.beforeEach(async (to, from, next) => {
  // dynamically set the title
  const base = "WWT Lab Services";
  document.title = dynamicTitle(base, to);

  // make sure we always have the current user available to us
  if (!store.state.user.id) {
    try {
      const user = await getUser();
      store.commit("setUser", user);
      next();
    } catch (e) {
      next(e);
    }
  } else {
    next();
  }
});

export default router;
