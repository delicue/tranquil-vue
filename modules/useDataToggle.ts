import { ref, computed, readonly } from 'vue';
/**
 * Cycles through a circular queue of data when toggleData() is called.
 * @param data 
 * @returns [`data`, `toggleData`]
 */
export default function useDataToggle<T>(newData: T[]) {
    //the available views for data to be displayed as
    const data = ref<T[]>(newData)

    const index = ref<number>(0)

    const currentData = computed(() => data.value[index.value])
    
    const toggleData = () : void => {
        index.value++
        if(index.value >= data.value.length)
            index.value = 0
    }

    return [readonly(currentData), toggleData] as const
}