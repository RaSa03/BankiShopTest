<template>
  <div id="app">
    <my-header></my-header>

    <router-view />

    <my-footer id="footer"></my-footer>
  </div>
</template>
<script>
import MyHeader from "@/components/MyHeader.vue";
import MyFooter from "./components/MyFooter.vue";
export default {
  components: {
    "my-header": MyHeader,
    "my-footer": MyFooter,
  },
};
</script>

<style lang="scss">
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
