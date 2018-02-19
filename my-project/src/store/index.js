import Vue from 'vue'
import Vuex from 'vuex'
import board from './board'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

Vue.config.debug = true

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    board
  },
  strict: debug,
  middlewares: debug ? [createLogger()] : []
})
