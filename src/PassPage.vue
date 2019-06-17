<template>
  <v-ons-page>
    <custom-toolbar :title="title" :action="toggleMenu"></custom-toolbar>
    <slot>
      <b>Prova</b> prova
    </slot>
  </v-ons-page>
</template>

<script>
import customToolbar from './Toolbar.vue'

export default {
  name: 'pass-page',
  props: ['toggleMenu', 'title'],
  data () {
    return {
    }
  },
  components: {
    customToolbar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>