import { createApp } from 'vue';
import App from './App.vue';
import FfUI from './UI/install';

const app = createApp(App);

app.use(FfUI);

app.mount('#app');
