import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import GeLog from './index'
GeLog.replaceConsole()

createApp(App).mount('#app')
