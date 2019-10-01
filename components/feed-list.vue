<template>
  <ol class="list">
    <li
      v-for="item in news"
      :key="item.data.id"
      :class="{ removed: removed.includes(item.data.id) }"
      @click="onSelect(item)"
    >
      <div>
        <span class="item-author">{{ item.data.author }}</span>
        {{ getTimeDiff(item.data.created_utc) }}
      </div>
      <img :src="item.data.thumbnail" />
      <div class="item-text">
        {{ item.data.title }}
      </div>
      <div class="item-footer">
        <span @click="removeItem(item.data.id)">Dismiss post</span>
        <div class="item-comment">{{ item.data.num_comments }} comments</div>
      </div>
    </li>
  </ol>
</template>

<script>
import { debounce } from 'lodash'
import { mapGetters } from 'vuex'

export default {
  name: 'FeedList',
  data() {
    const now = Math.round(new Date().getTime() / 1000)
    return {
      now,
      removed: []
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
    },
    removeItem(id) {
      this.removed.push(id)
      this.debouncedRemove(id)
    },
    debouncedRemove: debounce(function(id) {
      this.$store.commit('news/removeItemById', id)
    }, 1000),
    onSelect(item, event) {
      if (event) {
        event.preventDefault()
      }
      this.$emit('selected', item)
    }
  }
}
</script>

<style>
.menu .list {
  margin: 0;
  padding: 0;
  list-style: none;
  height: 100%;
}
.menu li {
  position: relative;
  border-bottom: 1px solid #363537;
  padding: 0.5em;
  height: 11em;
  transition: transform 1s;
}
.menu li.removed {
  transform: translateX(-100%);
}
.menu .item-author {
  font-size: 1.3em;
  font-weight: 600;
  padding-left: 0.5em;
}
.menu .item-text {
  height: 6em;
  padding-left: 0.5em;
  overflow-y: hidden;
}
.menu img {
  width: 6em;
  height: 6em;
  min-width: 6em;
  min-height: 6em;
  float: left;
}
.menu .item-footer {
  margin-top: 0.5em;
  font-weight: 600;
}
.menu .item-footer span {
  cursor: pointer;
}
.menu .item-comment {
  float: right;
  margin-right: 1em;
  font-weight: 500;
  color: #8b6847;
}
</style>
