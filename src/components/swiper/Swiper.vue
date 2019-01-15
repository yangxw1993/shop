<template>
  <div class="swiper" @mouseover="stop" @mouseout="play">
    <div class="swiper-wrapper">
      <div class="swiper-item"
        :class="{show: index === defaultIndex}"      
        v-for="(item, index) in sliders">
        <a :href="item.href"><img :src="item.img"/></a>
      </div>
    </div>   
    <ul class='dots'>
        <li v-for="(item, index) in sliders"
          @click='defaultIndex = index' 
          class="dots-item" :class="{active: defaultIndex === index}"></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Swiper',
  props: {
    sliders: Array
  },
  data(){
    return {
      // 定时器
      timer: null,
      defaultIndex: 0,
    }
  },
  created: function(){
    this.play();
  },
  methods: {
    // 自动轮播
    autoSlider(){
      this.defaultIndex++;
      if(this.defaultIndex === this.sliders.length){
        this.defaultIndex = 0
      }
      console.log(this.defaultIndex)
    },
    // 播放
    play(){
      this.timer = setInterval( () => {
        this.autoSlider();
      }, 2500)
    },
    // 停止播放
    stop(){
      clearInterval(this.timer)
    },
    onClick(index){
      console.log(index);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import './swiper.scss'
</style>
