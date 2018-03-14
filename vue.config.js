"use strict";

const username = require("username").sync();
const proxy = require("http-proxy").createProxyServer({});

const apiRouterProxy = username => (req, res, next) => {
  req.headers.remote_user = username || req.headers.remote_user;
  proxy.web(req, res, {
    target: "http://apirouter.apps-local.wwt.com",
    changeOrigin: true
  });
  proxy.on("error", next);
};

module.exports = {
  lintOnSave: false,
  configureWebpack: {
    entry: ["babel-polyfill", "./src/main.js"]
  },
  devServer: {
    before: app => {
      // `app` is an express instance, so we can leverage any middlewares we want in here
      app.use("/apirouter", apiRouterProxy(username));
    }
  }
};
