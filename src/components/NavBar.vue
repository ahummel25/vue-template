<template>
  <nav class="pmr-navbar">
    <span class="nav-item">
      <router-link to="/" exact>Home</router-link>
    </span>
    <span class="nav-item">
      <router-link to="/about" exact>About</router-link>
    </span>
  </nav>
</template>

<script>
export default {
  name: "NavBar"
};
</script>
