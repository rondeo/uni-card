<template>
  <v-ons-page>
    <custom-toolbar :title="title" :action="toggleMenu"></custom-toolbar>
    <slot>
      <b>Ricarica</b> bella
    </slot>
  </v-ons-page>
</template>

<script>
import customToolbar from './Toolbar.vue'

export default {
  name: 'topup-page',
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