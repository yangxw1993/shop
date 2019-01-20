<template>
  <div>
    <my-header></my-header>
    <div class="pig">
      <div class="header">

      </div>
      <div class="pig-body"></div>
    </div>
    <!-- <canvas id="myCanvas" width="997" height="1000" style="background:#fdd0e7"></canvas> -->
    <my-footer></my-footer>
  </div>
</template>
<script>
// import drawPeki from './drawPeki.js'
export default {
  name: "app",
  data() {
    return {
      title: "小猪佩琪",
    };
  },
  munted(){
    // drawPeki()
  }
};
</script>
<style scoped lang="scss" type="text/css">
@import './peki.scss'
</style>
