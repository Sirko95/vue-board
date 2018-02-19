<template>
    <Lanes />
</template>

<script>

import Lanes from './board/Lanes'

export default {
  name: 'Board',
  components: {
    Lanes
  }
}
</script>

<style lang="sass">
  li
    list-style-type: none
</style>
