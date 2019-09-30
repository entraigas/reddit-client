<template>
  <div>
    <div class="menu">
      <ol class="list">
        <li v-for="item in news" :key="item.data.id">
          {{ item.data.title }}
        </li>
      </ol>
    </div>
    <div class="detail">
      asdfasdf
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      news: 'news/news'
    })
  }
}
</script>

<style>
.menu {
  position: fixed;
  top: 0;
  left: 0;
  max-width: 25%;
  max-height: 100%;
  height: 100%;
  overflow-y: scroll !important;
}
.detail {
  margin-left: 25%;
  padding-left: 2em;
  padding-top: 2em;
  max-width: 75%;
}
.menu ol {
  margin: 0;
  padding: 0;
  list-style: none;
}
.menu li {
  border: 1px solid red;
  margin: 1em;
}
</style>
