const state = {
    count : 101
}

const mutations = {
    reset(state) {
        state.count = 0;
    },
    increase(state, payload) {
        state.count += payload;
    },
    decrease(state, payload) {
        state.count-=payload.amount;
    },
    infoCnt(state, payload){
        alert("Cur Count : " + state.count + "(LEVEL : "+payload.amount+")");
    }
}

const vue = {
    state : state,
    mutations : mutations
}
export default vue;