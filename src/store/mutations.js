export default {
        plusten(state) {
            if(state.counter >= 100 || state.counter + 10 >= 100)
            state.counter = 100

            else(state.counter = state.counter + 10)
        },
        plustwo(state, payload) {
            if(state.counter >= 100 || state.counter + 2 >= 100)
            state.counter = 100

            else(state.counter += payload)
        },
    }