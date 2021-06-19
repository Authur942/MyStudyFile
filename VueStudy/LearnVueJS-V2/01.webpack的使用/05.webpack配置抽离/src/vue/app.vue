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
      message: 'hello webpack'
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