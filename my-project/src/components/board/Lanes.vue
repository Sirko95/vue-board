<template>
  <div class="board">
    <div :key="lane.id" v-for="lane in lanes" class="lane">
      <div class="lane-header">
        <h2 class="lane-title">{{lane.title}}</h2>
        <span>{{lane.cards.length}}</span>
      </div>
      <Cards :cards="lane.cards" :laneID="lane.id" />
      <AddCard :laneID="lane.id" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Cards from './Cards.vue'
import AddCard from './AddCard.vue'

export default {
  name: 'Lanes',
  components: {
    Cards,
    AddCard
  },
  computed: mapGetters({
    lanes: 'getLanes'
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
  .board
    display: flex
    justify-content: space-around
    .lane
      width: 16%
      background: darkgray
      min-height: 90vh

    .lane-header
      display: flex
      align-items: center
      justify-content: space-around
      border-bottom: 3px solid
      padding: 20px 0

    .lane-title
      text-align: center
      margin: 0
      font-size: 16px

</style>
