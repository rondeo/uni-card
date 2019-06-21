<template>
  <v-ons-page>
		{{ authenticated }}
		<p v-if="authenticated">
			Benvenuto 1019, <b>{{userName}}</b>.<br>
			<v-ons-button @click="push">Entra</v-ons-button><br>
			<v-ons-button @click="reset">Esci</v-ons-button>
		</p>
		<p v-else>
			Accedi alla tua utenza online e seleziona <b>Genera QR code di accesso</b>.<br>
			Poi premi il pulsante:<br>
			<v-ons-button @click="shoot">Inquadra il QR code</v-ons-button>
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
			},
			shoot() {
				this.save(true, 'Nome Cognome');
			},
			reset() {
				this.save(false, '');
			},
			save(authenticated, userName) {
				localStorage.setItem('authenticated', authenticated);		 
				localStorage.setItem('userName', userName);
				this.authenticated = authenticated;
				this.userName = userName;
			}
		},
		data() {
			return {
				authenticated: localStorage.getItem('authenticated'),
				userName: localStorage.getItem('userName')
			}
		},
		props: ['pageStack'],
		components: { },
		key: 'key_page1',
	}
</script>
