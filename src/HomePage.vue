<template>
  <v-ons-page>
    <custom-toolbar :title="title" :action="toggleMenu"></custom-toolbar>
    <slot>
      Contenuto della <b>Home page</b>
    </slot>
  </v-ons-page>
</template>

<script>
import customToolbar from './Toolbar.vue'

export default {
  name: 'home-page',
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