<template>
  <ul class="cards-lane">
    <li class="cards-wrapper" :key="card.id" v-for="card in this.cards">
      {{card.id}}
      <button @click="handleRemoveCard(card.id, laneID)">delete</button>
    </li>
  </ul>
</template>

<script>

import { mapActions } from 'vuex'

export default {
  name: 'Cards',
  props: ['cards', 'laneID'],
  methods: {
    ...mapActions([
        'removeCard'
    ]),
    handleRemoveCard: function (cardID, laneID) {
      const event = {
        cardID: cardID,
        laneID: laneID
      };

      this.removeCard(event);
    }
  }
}
</script>

<style scoped lang="sass">
  .cards-lane
    padding: 20px
    .cards-wrapper
      border: 1px solid
      background: #fff
      padding: 15px
      border-radius: 5%
      margin-bottom: 10px
</style>
