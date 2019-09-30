<template>
  <div>
    isloadingToken = {{ isloadingToken }} isinitToken =
    {{ isinitToken }} accessToken = {{ accessToken }}
    <nuxt />
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
  mounted() {
    if (!this.isinitToken && !this.isloadingToken) {
      this.$store.dispatch('settings/initToken')
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
</style>
