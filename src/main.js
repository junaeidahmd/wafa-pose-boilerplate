import { createApp } from 'vue/dist/vue.esm-bundler'


import Header  from './components/parts/Header.vue'
import Sidebar from './components/parts/Sidebar.vue'

import router from './router/route.js'


const app = createApp({})

app.component('tsidebar',Sidebar)
app.component('theader',Header)



app.use(router);

app.mount('#tapp')