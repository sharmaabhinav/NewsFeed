<template lang="html">
  <sui-dropdown
    placeholder="Sort by"
    :options="options"
    selection
    v-model="current"
    v-on:change="onChange"
  />
</template>

<script>
  export default {
    name: 'DropDown',
    props: ['options', 'onChange'],
    data () {
      return {
        current: null
      }
    }
  }
</script>