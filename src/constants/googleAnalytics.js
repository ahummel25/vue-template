"use strict";

import wwtEnv from "wwt-env-js";
import router from "../router";

const host = window.location.host;
const isLocal = wwtEnv.getEnv() === "local";

// setting this to `true` will enable GA debug mode during local development.
// it will flood your console with log statements but can be helpful when you are
// actively trying to debug/test out functionality with Google Analytics.
const enableDebugMode = false;

const environments = {
  development: {
    account: "UA-2735897-8",
    host: "www-dev.wwt.com"
  },
  appsDev: {
    account: "UA-2735897-37",
    host: "apps-dev.wwt.com"
  },
  test: {
    account: "UA-2735897-10",
    host: "www-test.wwt.com"
  },
  appsTest: {
    account: "UA-2735897-38",
    host: "apps-tst.wwt.com"
  },
  production: {
    account: "UA-2735897-14",
    host: "www.wwt.com"
  },
  apps: {
    account: "UA-2735897-39",
    host: "apps.wwt.com"
  },
  ghPages: {
    account: "UA-2735897-27",
    host: "github.wwt.com"
  }
};

const env = Object.values(environments).find(it => it.host === host);
const id = env ? env.account : "UA-XXXXXX-X";

const gaConfig = {
  // the ID of the GA account
  id,

  // Use the vue-router instance for auto page tracking.
  // See: https://matteogabriele.gitbooks.io/vue-analytics/content/docs/page-tracking.html
  // for more detailed information
  router,

  // prevents multiple analytics.js scripts from being loaded onto the page
  checkDuplicatedScript: true,

  // enable debug when on local.
  // do not send a page hit when on local.
  debug: {
    enabled: isLocal && enableDebugMode === true,
    sendHitTask: !isLocal
  },

  // add your custom events here to use the v-ga directive.
  // See the following for more detailed information:
  // Event tracking: https://matteogabriele.gitbooks.io/vue-analytics/content/docs/event-tracking.html
  // v-ga directive: https://matteogabriele.gitbooks.io/vue-analytics/content/docs/v-ga.html
  commands: {
    // this is just an example. You probably want to delete this event.
    trackShowMessenger(val = "true") {
      // event also takes a fourth parameter, `value`, but it has to be an integer.
      // https://support.google.com/analytics/answer/1033068?hl=en#Anatomy
      this.$ga.event("messenger", "show", val);
    }
  }
};

export { gaConfig };
