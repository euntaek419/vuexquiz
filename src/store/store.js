import { createStore } from 'vuex'

const store = createStore({
    state() {
        return {
            counter : 0,
        }
    },
    getters: {
        getCounter: function (state) {
            return state.counter;
        }
    },
    mutations : {
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
    },
    actions : {
        heyten(context) {
            context.commit('plusten')
        },
        heytwo(context) {
            context.commit('plustwo', 2)
        },

    }
})

export default store;