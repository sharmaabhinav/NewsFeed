<template>
  <div id="app">
    <sui-container text-align="left">
      <Header />
      <sui-segment raised>
        <Search :onKeyUp="onSearch" />
        <sui-label>Sort by</sui-label>
        <DropDown :options="sortOptions" :onChange="onSortChange" placeholder='Sort by'/>
      </sui-segment>
       <List :items="items" />
    </sui-container>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Search from './components/Search.vue'
import List from './components/List.vue'
import DropDown from './components/DropDown.vue'
import axios from 'axios'
import store from 'store'
export default {
  name: 'app',
  components: {
    Header,
    Search,
    List,
    DropDown
  },
  methods: {
    onSearch (event) {
      let {target: {value}} = event
      const regex = new RegExp(`.*${value}.*`, 'i')
      this.items = store.get('items').filter((item) => item.title.search(regex) !== -1)
    },
    onSortChange (value) {
      const {_} = this
      this.items = _.sortBy(store.get('items'), [value])
    }
  },
  mounted() {
    axios
      .get('http://starlord.hackerearth.com/hackernews')
      .then((response) => {
        let {data} = response
        data.splice(0,1)
        this.items = data
        store.set('items', data)
      })
  },
  data() {
    return {
      items: [],
      sortOptions: [
        {
          text: 'Title',
          value: 'title'
        },
        {
          text: 'Comments',
          value: 'num_comments'
        },
        {
          text: 'Points',
          value: 'num_points'
        }
      ]
    }
  }
}
</script>

<style>
  #app {
    margin-top: 60px
  }
</style>
