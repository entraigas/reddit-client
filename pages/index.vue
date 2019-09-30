<template>
  <div>
    <div class="menu">
      <ol class="list">
        <li v-for="item in news" :key="item.data.id">
          <div>
            <span class="item-title">{{ item.data.author }}</span>
            {{ getTimeDiff(item.data.created_utc) }}
          </div>
          <img :src="item.data.thumbnail" />
          {{ item.data.title }}
          <div>
            <span class="item-dismiss">Dismiss post</span>
            <div class="item-comment">
              comments {{ item.data.num_comments }}
            </div>
          </div>
        </li>
      </ol>
    </div>
    <div class="detail">now = {{ now }}</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    const now = Math.round(new Date().getTime() / 1000)
    return {
      now
    }
  },
  computed: {
    ...mapGetters({
      news: 'news/news'
    })
  },
  methods: {
    getTimeDiff(time) {
      const minutes = Math.floor((this.now - time) / 60)
      if (minutes < 45) {
        return minutes < 5 ? 'now' : +`${minutes} minutes ago`
      }
      const hours = Math.ceil(minutes / 60)
      if (hours < 22) {
        return hours === 1 ? 'an hour ago' : `${hours} hours ago`
      }
      const days = Math.ceil(hours / 24)
      return days === 1 ? 'a day ago' : `${days} days ago`
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
}
.detail {
  margin-left: 35%;
  padding-left: 2em;
  padding-top: 2em;
  max-width: 65%;
}
.menu .list {
  margin: 0;
  padding: 0;
  list-style: none;
}
.menu li {
  border: 1px solid red;
  margin: 1em;
  padding: 0.5em;
}
.menu img {
  width: 25%;
  height: 25%;
  margin-right: 0.5em;
}
.menu .item-title {
  font-size: 1.3em;
  font-weight: 600;
}
.menu .item-dismiss {
}
.menu .item-comment {
  float: right;
  margin-right: 1em;
}
</style>
