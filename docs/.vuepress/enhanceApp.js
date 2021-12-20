import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Leivii, { API } from 'leivii'
import axios from './common/http'
import i18n from './common/i18n'
import Card from '../advanced/sample/Card.vue'
import '../advanced/sample/validator.js'
import '../advanced/sample/DemoPlugin.js'
import 'leivii/lib/leivii.css'
import 'leivii-editor/lib/leivii-editor.css'

export default ({ Vue, options, router, siteData, isServer }) => {
  API.registDoc('$vuepress', { ignore: true })
  API.registDoc('$withBase', { ignore: true })
  API.registComponent(Card)
  Vue.use(Element)
  Vue.use(Leivii, {
    i18n: (...args) => i18n.t(...args),
    fetch: { axios }
  })
}
