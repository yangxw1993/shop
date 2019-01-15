<template>
  <div class="my-footer">
    <h1>my Footer</h1>    
  </div>
</template>

<script>
export default {
  name: 'MyHeader',
  props: {
    msg: String
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.my-footer {
  height: 80px;
  line-height: 80px;
  background: #e1e1e1
}
h1 {
  text-align: center;
}
</style>
