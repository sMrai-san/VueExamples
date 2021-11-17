export default {
    data() {
        return {
            count: 0,
            hoverCount: 0,
        }
    },
    methods: {
        incrementCount() {
            this.count += 1
        },
        incrementHoverCount() {
            this.hoverCount += 1
        },
    }
}