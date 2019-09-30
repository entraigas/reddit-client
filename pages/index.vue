<template>
  <div class="container">
    {{ response }}
  </div>
</template>

<script>
export default {
  data() {
    const clientId = process.env.client_id
    return {
      clientId,
      response: null
    }
  },
  computed: {
    authorization() {
      return 'Basic ' + btoa(this.clientId + ':')
    }
  },
  async mounted() {
    const args = {
      url: 'api/v1/access_token',
      method: 'post',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: this.authorization
      },
      params: {
        grant_type: 'https://oauth.reddit.com/grants/installed_client',
        device_id: 'DO_NOT_TRACK_THIS_DEVICE'
      }
    }
    this.response = await this.$axios.request(args)
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
