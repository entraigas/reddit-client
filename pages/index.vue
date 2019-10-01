<template>
  <div>
    <feed-list class="menu" @selected="onSelected" />
    <item-detail :selected="selected" class="detail" />
  </div>
</template>

<script>
import FeedList from '~/components/feed-list'
import ItemDetail from '~/components/item-detail'

export default {
  components: { FeedList, ItemDetail },
  data() {
    return {
      selected: null
    }
  },
  methods: {
    onSelected(item) {
      this.selected = item
    }
  }
}
</script>

<style>
.menu {
  position: fixed;
  top: 0;
  left: 0;
  max-width: 35%;
  max-height: 100%;
  height: 100%;
  overflow-y: scroll !important;
  background-color: black;
  color: white;
}
.detail {
  margin-left: 35%;
  padding-left: 2em;
  padding-top: 2em;
  max-width: 65%;
}
@media screen and (max-width: 800px) {
  .menu {
    display: none;
  }
  .detail {
    margin-left: 1%;
    max-width: 99%;
  }
}
</style>
