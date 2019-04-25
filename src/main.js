import DefaultLayout from '~/layouts/Default.vue'
import '~/assets/style.scss'
// import '~/assets/icon-font.scss'

export default function (Vue, {head}) {
  Vue.component('Layout', DefaultLayout)
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700'
  })
}