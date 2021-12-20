import { API, transMsg } from 'leivii'

API.registValidator('requireAll', (label) => {
  return {
    validator: (rule, value, callback) => {
      callback(!value ? new Error(label + transMsg('lang.wms.fed.requiredCheck')) : undefined)
    },
    trigger: ['change', 'blur']
  }
}, 'lang.wms.fed.allRequired')

API.registValidator('dayLimit15', (label) => {
  return {
    validator: (rule, value, callback) => {
      callback([value].flat().filter(Boolean).reduce((a, b) => b - a, 0) / 86400000 > 15 ? new Error(label + '不能大于15天') : undefined)
    },
    trigger: 'change'
  }
}, '少于15天')