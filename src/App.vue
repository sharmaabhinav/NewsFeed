<template>
  <div id="app">
    <sui-container text-align="left">
      <Header />
      <Search :onChange="onSearch"/>
      <List :items="items" />
    </sui-container>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Search from './components/Search.vue'
import List from './components/List.vue'
import axios from 'axios'
export default {
  name: 'app',
  components: {
    Header,
    Search,
    List
  },
  methods: {
    onSearch () {

    }
  },
  mounted() {
    axios
      .get('http://starlord.hackerearth.com/hackernews')
      .then((response) => {
        let {data} = response
        data.splice(0,1)
        this.items = data
      })
  },
  data() {
    return {
      items: []
    }
  }
}
</script>

<style>
  #app {
    margin-top: 60px
  }
</style>
