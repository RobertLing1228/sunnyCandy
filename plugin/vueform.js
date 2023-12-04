import { createApp } from 'vue'
import App from './components/App.vue'
import Vueform from '@vueform/vueform'
import vueformConfig from './path/to/vueform.config'
import Builder from '@vueform/builder'
import builderConfig from './../../builder.config'
// ...

const app = createApp(App)
app.use(Vueform, vueformConfig)
app.use(Builder, builderConfig)
app.mount('#app')