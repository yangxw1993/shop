<template>
  <div>
    <my-header></my-header>
    <div class="container">
      <h1>{{title}}</h1>
      <div>
        <Button type="primary">Primary</Button>
        <a href="./login.html">登录</a>
      </div>
      <my-swiper :sliders="sliders"></my-swiper>
    </div>
    <my-footer></my-footer>
  </div>
</template>
<script>
import MyHeader from '@/components/header/Header.vue'
import MyFooter from '@/components/footer/Footer.vue'
import MySwiper from '@/components/swiper/Swiper.vue'
export default {
  name: "app",
  components: { MyHeader, MyFooter, MySwiper },
  data() {
    return {
      title: "首页",
      sliders: [
        {
          img: 'https://cdn.bestseller.com.cn/assets/wechat/SELECTED/image/upload_e49b8f7f500524aeb51accd299355ccc.jpg',
          href: 'javascript:;'
        },
        {
          img: 'https://cdn.bestseller.com.cn/assets/wechat/SELECTED/image/upload_9e9cda13dbfa5bf90c4fb9523c3df474.jpg',
          href: '#'
        }
      ]
    };
  }
};
</script>
<style scoped lang="scss" type="text/css">
.container{
  margin: 50px auto;
  width: 1200px;
}
</style>
