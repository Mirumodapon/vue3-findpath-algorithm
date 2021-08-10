import { createStore } from 'vuex';

import table from './table';

export default createStore({
	state: {
		row: 0,
		column: 0,
		mode: 'SETTING',
		start: -1,
		end: -1,
		startColor: 'lightblue',
		endColor: 'red',
		normal: 'white'
	},
	mutations: {
		init: (state, { row, column }) => {
			state.row = row;
			state.column = column;
			state.mode = 'BUILD-UNSELECT';
		},
		setStart: (state, uid) => {
			state.start = uid;
		},
		setEnd: (state, uid) => {
			state.end = uid;
		}
	},
	actions: {
		init: ({ commit, dispatch }, { row, column }) => {
			dispatch('table/tableInit', { row, column });
			commit('init', { row, column });
		},
		setStart: ({ state: { startColor }, commit, dispatch }, uid) => {
			commit('setStart', uid);
			dispatch('table/setBlock', { uid, color: startColor });
		},
		setEnd: ({ state: { endColor }, commit, dispatch }, uid) => {
			commit('setEnd', uid);
			dispatch('table/setBlock', { uid, color: endColor });
		}
	},
	getters: {
		getSize: ({ row, column }) => ({ row, column }),
		getColumn: ({ column }) => column,
		getRow: ({ row }) => row
	},
	modules: { table }
});
