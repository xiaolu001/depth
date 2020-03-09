<template>
  <div id="app">
    <div id="depth"></div>
  </div>
</template>

<script>
import depth from "../packages/index";
import data from "./mock.json";
export default {
  name: "App",
  data() {
    return {
      depth: null
    };
  },
  mounted() {
    this.depth = new depth({
      dom: document.getElementById("depth"),
      width: 800,
      height: 600,
      data: data,
      locale: "zh"
    });
  }
};
</script>

<style>
#app {
  width: 800px;
  margin: 80px auto;
}
</style>
