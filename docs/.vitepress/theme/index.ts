import DefaultTheme from 'vitepress/theme'
import HomeLayout from './HomeLayout.vue'
import './custom.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }: { app: any }) {
    app.component('HomeLayout', HomeLayout)
    if (typeof document !== 'undefined') {
      document.documentElement.classList.add('dark')
    }
  },
}
