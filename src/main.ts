import type { Component, Plugin } from 'vue'

import components from './components'
export default components

export const VueCalendarComponent: Plugin = {
  install(app) {
    Object.entries(components).forEach(([key, value]) => {
      app.component(key, value as Component)
    })
  },
}

export { default as VueCalendar } from './components/VueCalendarComponent.vue'
