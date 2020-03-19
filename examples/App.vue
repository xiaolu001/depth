<template>
  <div id="app">
    <div id="depth"></div>
  </div>
</template>

<script>
import depth from "../packages/index";
import data from "./mock.json";
import { subscribe, unsubscribe } from "./socket";
export default {
  name: "App",
  data() {
    return {
      depth: null,
      throttle: "",
      onResize: ""
    };
  },
  mounted() {
    subscribe("depth_v2", "btc_usdt", this.messaging);

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
  methods: {
    messaging(data) {
      if (this.depth == null) {
       
        this.init(data.data);
          console.log('买',Object.freeze(data.data.bids));
        console.log('卖',Object.freeze(data.data.asks));
      }
    },
    init(data) {
      this.depth = new depth({
        dom: document.getElementById("depth"),
        width: 800,
        height: 600,
        data: data,
        locale: "zh"
      });
    }
  }
};
</script>

<style>
#app {
  width: 800px;
  margin: 80px auto;
}
</style>
