const addCard = (state, event) => {
  const { laneID, card } = event
  const lane = state.list.find(l => l.id === laneID)
  lane.cards.push(card)
}

const removeCard = (state, event) => {
  const { cardID, laneID } = event

  const lane = state.list.find(l => l.id === laneID)
  lane.cards = lane.cards.filter(c => c.id !== cardID)
}

export default {
  addCard,
  removeCard
}
