import LeiviiBlock from './LeiviiBlock.vue'
import LeiviiImg from './LeiviiImg.vue'
import LeiviiVideo from './LeiviiVideo.vue'

export default ({ Vue, router }) => {
  Vue.component('LeiviiBlock', LeiviiBlock)
  Vue.component('LeiviiImg', LeiviiImg)
  Vue.component('LeiviiVideo', LeiviiVideo)

  router.afterEach((to, from) => {
    setTimeout(() => {
      if (document.body.className.indexOf('geek') === -1) {
        document.body.className += ' geek'
      }
    }, 500)
  })
}
