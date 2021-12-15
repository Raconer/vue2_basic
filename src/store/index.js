import Vue from 'vue';
import Vuex from 'vuex';

// Modules
import CountModule from './modules/CountModule';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules:{
        CountModule
    }
});

export default store;