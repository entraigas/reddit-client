<template>
  <div class="site">
    <div v-if="isloadingToken">
      Authenticating...
    </div>
    <nuxt v-if="isinitToken" />
    <div v-if="!isloadingToken && !isinitToken">
      Ops... somethings went terribly wrong!
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      isloadingToken: 'settings/isloadingToken',
      isinitToken: 'settings/isinitToken',
      accessToken: 'settings/accessToken'
    })
  },
  async mounted() {
    if (!this.isinitToken && !this.isloadingToken) {
      await this.$store.dispatch('settings/initToken')
      await this.$store.dispatch('news/getTopNews')
    }
  }
}
</script>
<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
body {
  display: block;
  height: 100%;
  position: relative;
  min-height: 100%;
}
</style>
