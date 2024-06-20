import { createPinia } from 'pinia';
import { createApp } from 'vue';
import { appTheme } from './theme';

import 'vuetify/styles';

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(appTheme());
app.use(router);
app.mount('#app');
