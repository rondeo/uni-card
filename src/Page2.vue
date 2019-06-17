<template>
  <v-ons-page>
    <v-ons-splitter>
      <v-ons-splitter-side swipeable collapse width="250px"
        :animation="$ons.platform.isAndroid() ? 'overlay' : 'reveal'"
        :open.sync="openSide">        
        <v-ons-page>
          <v-ons-list>
            <v-ons-list-header>Servizi</v-ons-list-header>
              <v-ons-list-item v-for="page in pages" v-bind:key="page.title" 
              tappable modifier="chevron" @click="currentPage = page; openSide = false"
              >
              <div class="center">{{ page.title }}</div>
            </v-ons-list-item>
          </v-ons-list>
        </v-ons-page>
      </v-ons-splitter-side>

      <v-ons-splitter-content>
        <component :is="currentPage.component" :title="currentPage.title" 
        :toggle-menu="() => openSide = !openSide"></component>        
      </v-ons-splitter-content>
    </v-ons-splitter>
  </v-ons-page>
</template>

<script>
import TopUpPage from './TopUpPage'
import PassPage from './PassPage'
import HomePage from './HomePage'
import app from './App'

const p = [
  { title: 'Inizio', component: 'HomePage' },
  { title: 'Ricarica', component: 'TopUpPage' },
  { title: 'Tessera', component: 'PassPage' }
]

  export default {
    methods: {
      pop() {
        this.pageStack.pop();
      } 
    },
    props: ['pageStack'],
    data () {
      return {
        currentPage: p[0],
        pages: p,
        openSide: false
      }
    },
    components: {
      HomePage,
      TopUpPage,
      PassPage
    },
    key: 'key_page2',
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ons-splitter-side[side=left][animation=overlay] {
  border-right: 1px solid #BBB;
}
</style>