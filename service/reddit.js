export default class RedditService {
  constructor(axios) {
    this.$axios = axios
  }

  _getAutorizationHeader() {
    const clientId = process.env.client_id
    return 'Basic ' + btoa(clientId + ':')
  }

  async getToken() {
    try {
      const args = {
        url: 'https://www.reddit.com/api/v1/access_token',
        method: 'post',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: this._getAutorizationHeader()
        },
        params: {
          grant_type: 'https://oauth.reddit.com/grants/installed_client',
          device_id: 'DO_NOT_TRACK_THIS_DEVICE'
        }
      }
      const { data } = await this.$axios.request(args)
      return data
    } catch (e) {
      return null
    }
  }

  async getTopNews(token, params = {}) {
    // https://oauth.reddit.com/r/${sub}/top
    const { sub = null, limit = 25 } = params
    try {
      const url = sub
        ? `https://oauth.reddit.com/t/${sub}/top`
        : 'https://oauth.reddit.com/top'
      const args = {
        url,
        method: 'get',
        headers: {
          Authorization: `Bearer ${token}`
        },
        params: {
          limit
        }
      }
      const { data } = await this.$axios.request(args)
      return data
    } catch (e) {
      return null
    }
  }
}
