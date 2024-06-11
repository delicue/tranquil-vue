import { ref, readonly } from 'vue'

function useState(init: any) {
    /** stateful object */
    const state = ref<any>(init)
    
    /** Change the state */
    const setState = (newState: any) : void => {
        state.value = newState
    }

    return [readonly(state), setState] as const
}

export { useState };