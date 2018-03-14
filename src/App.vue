<template>
  <div id="app" :class="{'is-old-browser': isOldBrowser}">
    <BrowserDetector
      :minimum-browsers="minimumBrowsers"
      app-name="Lab Services"
      @set="setIsOldBrowser" />
    <VueMessenger
      :show="showMessenger"
      :options="messengerOpts"
      @dismiss="hideMessenger" />
    <div id="wrapper">
      <WwtAppToolbar :user="user" app-name="Lab Services" />
      <NavBar />
      <div id="content-main">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import BrowserDetector from "vue-browser-detector";
import VueMessenger from "vue-messenger";
import WwtAppToolbar from "vue-wwt-app-toolbar";
import NavBar from "@/components/NavBar";
import minimumBrowsers from "@/constants/browserSupport";

export default {
  name: "App",
  components: {
    WwtAppToolbar,
    NavBar,
    BrowserDetector,
    VueMessenger
  },
  data() {
    return {
      minimumBrowsers
    };
  },
  computed: {
    ...mapState(["isOldBrowser", "showMessenger", "messengerOpts", "user"])
  },
  methods: {
    ...mapActions(["setIsOldBrowser", "hideMessenger"])
  }
};
</script>

<style lang="less">
// FontAwesome
@import "~font-awesome/less/font-awesome";

// Setup
@import "~ui-primer/core/_vars";
@import "~ui-primer/core/_mixins";
@import "~ui-primer/core/_base";
// override fontPath var AFTER importing vars from core.
// this enables webpacks resolve-url-loader to parse
// the correct path to our font urls inside primer.
@fontPath: "~ui-primer/fonts";
@import "~ui-primer/core/_fonts";
// Modules
@import "~ui-primer/core/_alerts";
@import "~ui-primer/core/_buttons";
@import "~ui-primer/core/_cards";
@import "~ui-primer/core/_forms";
@import "~ui-primer/core/_navigation";
@import "~ui-primer/core/_tabs";
@import "~ui-primer/core/_tables";
@import "~ui-primer/core/_title-bar";
// Single Purpose Classes
@import "~ui-primer/core/_utilities";
@import "~ui-primer/core/_alignment";
@import "~ui-primer/core/_borders";
@import "~ui-primer/core/_colors";
@import "~ui-primer/core/_display";
@import "~ui-primer/core/_flex";
@import "~ui-primer/core/_floats";
@import "~ui-primer/core/_heights";
@import "~ui-primer/core/_opacity";
@import "~ui-primer/core/_position";
@import "~ui-primer/core/_spacing";
@import "~ui-primer/core/_typography";
@import "~ui-primer/core/_widths";
// Addons
@import "~ui-primer/addons/_tooltip";

@import "assets/styles/vars";
@import "assets/styles/common";
</style>
