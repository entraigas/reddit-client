<template>
  <div v-if="showDetails">
    <h3>{{ selected.data.author }}</h3>
    <img :src="selected.data.thumbnail" />
    <p>{{ selected.data.title }}</p>
  </div>
</template>

<script>
import { isEmpty } from 'lodash'

export default {
  name: 'ItemDetail',
  props: {
    selected: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    showDetails() {
      return !isEmpty(this.selected)
    }
  }
}
</script>
