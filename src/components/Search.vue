<template>
  <sui-container class="margin-30">
    <sui-input placeholder="Search (by name)" icon="search" iconPosition="left" class="large" v-on:keyup="onKeyUp"/>
  </sui-container>
</template>


<script>
  export default {
    name: 'Search',
    props: ['onKeyUp']

  }
</script>

<style scoped>
  .large {
    width: 80%
  }
  .margin-30 {
    margin-top: 30px !important
  }
</style>