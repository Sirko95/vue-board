<template>
  <div v-if="show">
    <button @click="handleShow()">add</button>
  </div>
  <div v-else>
    <input v-model="title" type="text" name="title" placeholder="title">
    <input v-model="id" type="text" name="id" placeholder="id">
    <input v-model="description" type="text" name="description" placeholder="description">
    <input v-model="label" type="text" name="label" placeholder="label">
    <button @click="submitCard(title, id, description, label, laneID)">submit</button>
  </div>
</template>

<script>

import { mapActions } from 'vuex'

export default {
  name: 'AddCard',
  props: ['laneID'],
  data: function () {
    return {
      show: true,
      title: '',
      id: '',
      description: '',
      label: ''
    }
  },
  methods: {
    ...mapActions([
      'addCard'
    ]),
    handleShow: function () {
      this.show = false
    },
    submitCard: function (title, id, description, label, laneID) {
      const event = {
        laneID,
        card: {
          title,
          id,
          description,
          label
        }
      }
      this.addCard(event)
      this.show = true
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
