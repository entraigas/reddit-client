import Vue from 'vue'
import { get } from 'lodash'
import RedditService from '~/service/reddit.js'

export const state = () => ({
  initToken: false,
  loadingToken: false,
  response: null
})

export const mutations = {
  initToken(state, value) {
    Vue.set(state, 'initToken', !!value)
  },
  loadingToken(state, value) {
    Vue.set(state, 'loadingToken', !!value)
  },
  setResponse(state, value) {
    Vue.set(state, 'response', value)
  }
}

export const actions = {
  async initToken({ commit, dispatch, getters }, id) {
    if (getters.isloadingToken) {
      return
    }
    // init vars
    commit('initToken', false)
    commit('loadingToken', true)
    try {
      await dispatch('authenticate')
      commit('initToken', true)
    } catch (e) {
      commit('initToken', false)
      alert('Error connecting to Reddit.com')
    } finally {
      commit('loadingToken', false)
    }
  },
  async authenticate({ commit }) {
    const service = new RedditService(this.$axios)
    const data = await service.getToken()
    commit('setResponse', data)
  }
}

export const getters = {
  isloadingToken: (state) => get(state, 'loadingToken', false),
  isinitToken: (state) => get(state, 'initToken', false),
  accessToken: (state) => get(state, ['response', 'access_token'], null)
}
