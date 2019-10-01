<template>
  <div>
    <feed-list @selected="onSelected" />
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
.detail {
  margin-left: 35%;
  padding-left: 2em;
  padding-top: 2em;
  max-width: 65%;
}
</style>
