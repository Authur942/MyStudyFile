<template>
  <div>
    <h1 class="title">{{message}}</h1>
    <Cpn/>
  </div>
</template>

<script>
import Cpn from './Cpn'
export default {
  name: 'app',
  data () {
    return {
      message: 'hello world'
    }
  },
  components: { 
    Cpn
  }
}
</script>

<style scoped>
  .title{
    color: green;
  }
</style>