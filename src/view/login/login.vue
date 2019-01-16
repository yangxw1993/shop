<template>
 <div>
    <my-header></my-header>
    <div></div>
    <h1>{{title}}</h1>

    <my-footer></my-footer>
 </div>
</template>
<script>
export default {
  name: 'app',
  data(){
    return {
      title: '登录'
    }
  }
}
</script>
