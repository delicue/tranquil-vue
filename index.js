import { createApp, ref } from 'vue'
import useState from './useState'

createApp({
  setup() {
    return {
        useState,
    }
  }
}).mount('#app')