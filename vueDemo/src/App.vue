<template>
  <div id="app">
    <img src="./assets/logo.png" />
    <transition name="bomb" mode="out-in">
      <span :key="msg">{{msg}}</span>
    </transition>
    <input class="input" type="text" v-model="msg" />
  </div>
</template>

<script>
// 安装了 worker-loader
import Worker from "./utils/file.worker.js";
export default {
  name: "app",
  data() {
    return {
      msg: "hello",
      // list: [1, 2, 3]
      list: [{ id: 1, num: 1 }, { id: 2, num: 2 }, { id: 3, num: 3 }]
    };
  },
  mounted() {
    let webWork = new Worker();
    webWork.onmessage = function(res) {
      console.log(res.data);
    };
    webWork.postMessage({ a: 1 });
    
  },
  methods: {}
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}
span {
  display: block;
  margin: 0 auto;
}

a {
  color: #42b983;
}
.input {
  display: block;
  margin: 10px auto;
}
.bomb-enter {
  /* transform: translate(scale(0.5)); */
  color: red;
}
.bomb-leave-to {
}
.bomb-enter-active {
  transition: all 1s;
}
</style>
