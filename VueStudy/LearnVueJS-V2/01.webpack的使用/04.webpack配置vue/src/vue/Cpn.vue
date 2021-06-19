<template>
  <div>
    <h2 class="title">{{message}}</h2>
  </div>
</template>

<script>
export default {
  name: 'Cpn',
  data () {
    return {
      message: '大家好我是Cpn是APP的子组件'
    }
  }
}
</script>

<style scoped>
  .title {
    color: blue;
  }
</style>