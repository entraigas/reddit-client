import Vue from 'vue'
import { get } from 'lodash'
import RedditService from '~/service/reddit.js'

export const state = () => ({
  loading: false,
  top50: []
  // bySubredit: {}
})

export const mutations = {
  loading(state, value) {
    Vue.set(state, 'loading', !!value)
  },
  setTop50(state, value) {
    Vue.set(state, 'top50', value)
  },
  removeItemById(state, id) {
    const index = state.top50.findIndex((item) => item.data.id === id)
    state.top50.splice(index, 1)
  },
  removeByIndex(state, index) {
    state.top50.splice(index, 1)
  }
}

export const actions = {
  async getTopNews({ commit, getters, rootGetters }) {
    if (getters.isloading) {
      return
    }
    // init vars
    commit('loading', true)
    try {
      const service = new RedditService(this.$axios)
      const token = rootGetters['settings/accessToken']
      const data = await service.getTopNews(token, { limit: 50 })
      commit('setTop50', data.data.children)
    } catch (e) {
      alert('Error loading top 50 from Reddit.com')
    } finally {
      commit('loading', false)
    }
  }
}

export const getters = {
  isloading: (state) => get(state, 'loading', false),
  news: (state) => state.top50
}
