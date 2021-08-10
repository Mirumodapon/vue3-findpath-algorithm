import { createStore } from 'vuex';

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
		},
		setMode: (state, mode) => {
			state.mode = mode;
		}
	},
	actions: {
		init: ({ commit, dispatch }, { row, column }) => {
			dispatch('table/tableInit', { row, column });
			commit('init', { row, column });
		},
		setStart: ({ state, commit, dispatch }, uid) => {
			const { normal, startColor, start, end } = state;
			if (uid === end)
				return alert("Can't set the start point on the end point");
			if (start !== -1)
				dispatch('table/setBlock', { uid: start, color: normal });
			commit('setStart', uid);
			dispatch('table/setBlock', { uid, color: startColor });
		},
		setEnd: ({ state, commit, dispatch }, uid) => {
			const { normal, end, endColor, start } = state;
			if (uid === start)
				return alert("Can't set the end point on the start point");
			if (end !== -1)
				dispatch('table/setBlock', { uid: end, color: normal });
			commit('setEnd', uid);
			dispatch('table/setBlock', { uid, color: endColor });
		},
		setMode: ({ commit }, mode) => {
			commit('setMode', mode);
		}
	},
	getters: {
		getSize: ({ row, column }) => ({ row, column }),
		getColumn: ({ column }) => column,
		getRow: ({ row }) => row,
		mode: ({ mode }) => mode
	},
	modules: { table }
});
