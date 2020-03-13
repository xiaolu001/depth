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
      depth: null,
      throttle:'',
      onResize:''
    };
  },
  mounted() {
    this.depth = new depth({
      dom: document.getElementById("depth"),
      width: 800,
      height: 600,
      data: [],
      locale: "zh"
    });
    this.throttle = (func, wait) => {
      let previous = 0;
      return () => {
        const now = Date.now();
        if (now - previous > wait) {
          func();
          previous = now;
        }
      };
    };
    this.onResize = this.throttle(() => {
      if (this.depth) {
        this.depth.updata(data);
      }
    }, 1000 / 16);
    window.addEventListener("resize", this.onResize, false);
  },
  // methods: {
  //   onResize() {}
  // }
};
</script>

<style>
#app {
  width: 800px;
  margin: 80px auto;
}
</style>
