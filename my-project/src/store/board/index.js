import getters from './getters'
import actions from './actions'
import mutations from './mutations'
import data from '../../api/api'

const initialState = {
  list: data.getLanes()
}

export default {
  state: initialState,
  getters,
  actions,
  mutations
}
