export default class RedditService {
  constructor(axios) {
    this.$axios = axios
  }

  _getAutorizationHeader() {
    const clientId = process.env.client_id
    return 'Basic ' + btoa(clientId + ':')
  }

  async getToken() {
    const args = {
      url: 'api/v1/access_token',
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
    try {
      const { data } = await this.$axios.request(args)
      return data
    } catch (e) {
      return null
    }
  }
}
