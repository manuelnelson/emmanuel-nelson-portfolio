<template>
  <div>
    <hero></hero>
    <work></work>
    <about></about>
  </div>
</template>

<script>
import Hero from '~/components/Hero.vue'
import Work from '~/components/Work.vue'
import About from '~/components/About.vue'

export default {
  components: {
    Hero, Work, About 
  }
}
</script>

<style>
</style>
