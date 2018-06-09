<template>
  <sui-container class="margin-30">
    <sui-input placeholder="Search (by name)" icon="search" iconPosition="left" class="large" v-on:change="onChange"/>
  </sui-container>
</template>


<script>
  export default {
    name: 'Search',
    props: ['onChange']

  }
</script>

<style scoped>
  .large {
    width: 100%
  }
  .margin-30 {
    margin-top: 30px !important
  }
</style>