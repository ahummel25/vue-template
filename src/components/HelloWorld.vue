<template>
  <div class="center mt-xxxl fw-100 gray-mid">
    <h1 class="fs-lg">{{ msg }}</h1>
    <h2 class="fs-xl">{{ subMsg }}</h2>

    <!-- here is an example of how you might invoke the Messenger -->
    <button
      v-ga="'trackShowMessenger'"
      class="mt-xl pmr-btn primary"
      @click="toggleMessenger">Show messenger</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "HelloWorld",
  props: {
    msg: {
      type: String,
      default: "Here's your feature"
    }
  },
  data() {
    return {
      subMsg: "Get coding!",
      customMessage: {
        title: "Great Success!",
        content: "I like thumbs and the color green.",
        type: "success"
      }
    };
  },
  methods: {
    ...mapActions(["setMessenger", "showMessenger"]),
    toggleMessenger() {
      // set a custom messenger object in Vuex store
      this.setMessenger(this.customMessage);
      // show the messenger by invoking the Vuex action 'showMessenger'
      this.showMessenger();
    }
  }
};
</script>

<style scoped>
h1,
h2 {
  margin: 0;
}
</style>
