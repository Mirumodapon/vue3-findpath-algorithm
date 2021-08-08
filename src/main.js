import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

import store from './store';
app.use(store);
app.mount('#app');
