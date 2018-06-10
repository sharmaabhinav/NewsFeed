<template lang="html">
  <sui-dropdown
    :placeholder='placeholder'
    :options='options'
    selection
    v-model='currentSortOption'
  />
</template>

<script>
  export default {
    name: 'DropDown',
    props: ['options', 'onChange', 'placeholder'],
    watch: {
      currentSortOption: function (newOption) {
        this.onChange(newOption)
      }
    },
    data () {
      return {
        currentSortOption: null
      }
    }
  }
</script>