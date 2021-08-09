import { createStore } from 'vuex';

import state from './state';
import getters from './getter';
import actions from './action';
import mutations from './mutation';

export default createStore({
	state,
	getters,
	actions,
	mutations
});
