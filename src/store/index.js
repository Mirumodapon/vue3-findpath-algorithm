import { createStore } from 'vuex';

import settingActions from './settingActions';
import settingMutations from './settingMutations';
import table from './table';

export default createStore({
	state: {
		row: 0,
		column: 0,
		mode: 'UNSETTING',
		start: -1,
		end: -1,
		startColor: 'lightblue',
		endColor: 'red',
		normal: 'white',
		wallColor: 'black'
	},
	mutations: {
		init: (state, { row, column }) => {
			state.row = row;
			state.column = column;
			state.mode = 'BUILD-UNSELECT';
		},
		...settingMutations
	},
	actions: {
		init: ({ commit, dispatch }, { row, column }) => {
			dispatch('table/tableInit', { row, column });
			commit('init', { row, column });
		},
		...settingActions
	},
	getters: {
		getSize: ({ row, column }) => ({ row, column }),
		getColumn: ({ column }) => column,
		getRow: ({ row }) => row,
		mode: ({ mode }) => mode
	},
	modules: { table }
});
