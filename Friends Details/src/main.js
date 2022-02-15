import { createApp } from 'vue'
import App from './App.vue';
import Friend from './components/Friends.vue';
import Newfriend from './components/Newfriend';

const app = createApp(App);
app.component('friend', Friend);
app.component('new-friend', Newfriend);

app.mount('#app')
