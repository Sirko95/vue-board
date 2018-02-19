function addCard ({ commit }, event) {
  commit('addCard', event)
}

function removeCard ({ commit }, event) {
  commit('removeCard', event)
}

export default {
  addCard,
  removeCard
}
