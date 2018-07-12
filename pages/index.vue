<template>
  <div>
    <header-element></header-element>
    <hero></hero>
    <work></work>
    <about></about>
  </div>
</template>

<script>
import Hero from '~/components/Hero.vue'
import Work from '~/components/Work.vue'
import About from '~/components/About.vue'
import HeaderElement from '~/components/Header.vue'

export default {
  components: {
    Hero, Work, About, HeaderElement
  }
}
</script>

<style>
</style>
