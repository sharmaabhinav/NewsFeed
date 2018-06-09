<template lang="html">
  <sui-list relaxed divided class="margin-50 backgroud-grey">

    <sui-list-item v-for="(item, index) in items" :key = "index" class="padding-10">
      <sui-list-content>
        <h3><a :href="item.url" target="_blank">{{index+1}}. {{item.title}}</a></h3>
        <span is="sui-list-description">{{item.num_points | point_text}} by {{item.author}} {{ item.created_at | moment('from') }} | {{item.num_comments | comment_text}} </span>
      </sui-list-content>
    </sui-list-item>
  </sui-list>
</template>

<script>
export default {
  name: 'List',
  props: ['items'],
  filters: {
    comment_text (value) {
      return value > 1 ? `${value} comments` : `${value} comment`
    },
    point_text (value) {
       return value > 1 ? `${value} points` : `${value} point`
    }
  }
}
</script>
<style scoped>
  .margin-50 {
    margin-top: 50px !important
  }
  .padding-10 {
    padding: 10px !important
  }

  .backgroud-grey {
    background-color: #f6f6f6
  }
</style>