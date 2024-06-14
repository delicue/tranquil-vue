import { ref, readonly } from 'vue'


export default function useState<Type>(init: Type) {
    /** stateful object */
    const state = ref<Type>(init)
    
    /** Change the state */
    const setState = <Type>(newState: Type) : void => {
        (state.value as Type) = newState
    }

    return [readonly(state), setState] as const;
}