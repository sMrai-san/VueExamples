import { ref } from 'vue'

//adding parameters here will make this very flexible .js to use all around the solution
//adding default sto parameters here:
export default function useCounter(initialCount = 0, stepSize = 1) {
    const count = ref(initialCount)
    function incrementCount() {
        count.value += stepSize
    }
    return {
        count,
        incrementCount
    }
}