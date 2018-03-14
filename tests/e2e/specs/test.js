// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  "default e2e tests": browser => {
    browser
      .url(process.env.VUE_DEV_SERVER_URL)
      .waitForElementVisible("#app", 5000)
      .assert.elementPresent("#wrapper")
      .assert.containsText(".app-name", "WWT Vue Starter Template")
      .assert.elementCount("nav", 1)
      .end();
  }
};
