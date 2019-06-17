<template>
  <v-ons-page>
    <p style="text-align: center">
      Inserisci le tue credenziali
      <v-ons-button @click="push">Entra</v-ons-button>
    </p>
  </v-ons-page>
</template>

<script>
  import page2 from './Page2';
  export default {
     methods: {
       pop(){
         this.pageStack.pop();
       },
       push() {
         this.pageStack.push(page2);
       }
     },
     props: ['pageStack'],
     components: { },
     key: 'key_page1',
  }
</script>
