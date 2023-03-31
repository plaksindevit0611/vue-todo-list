import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuesax from 'vuesax3'

import 'vuesax3/dist/vuesax.css'
import 'material-icons/iconfont/material-icons.css'

createApp(App)
    .use(store)
    .use(router)
    .use(Vuesax)
    .mount('#app')
