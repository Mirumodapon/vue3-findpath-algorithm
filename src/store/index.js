import { createStore } from 'vuex';

import settingActions from './settingActions';
import settingMutations from './settingMutations';
import table from './table';

import distance from '../util/distance';

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
		wallColor: 'black',
		openColor: 'yellow',
		actionColor: 'blue',
		pathColor: 'green'
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
		...settingActions,
		start: ({ dispatch, state: { start, end } }) => {
			if (start === -1) return alert('You have not set Start.');
			if (end === -1) return alert('You have not set End.');
			dispatch('target');
		},
		action: ({ state, commit, dispatch, rootGetters }) => {
			const { row, column, start, end, openColor } = state;
			const { target } = state.table;
			const checkArr = [target + column, target - column];
			if (target % column === column - 1) checkArr.push(target - 1);
			else if (target % column === 0) checkArr.push(target + 1);
			else checkArr.push(target + 1, target - 1);
			for (let x of checkArr) {
				if (
					x < 0 ||
					x >= row * column ||
					rootGetters['table/isAction'](x) ||
					rootGetters['table/isWall'](x)
				)
					continue;
				if (x === end) return dispatch('repath', target);
				const d0 = distance(x, start);
				const d1 = distance(x, end);
				commit('table/_setBlock', {
					uid: x,
					d0,
					d1,
					color: openColor
				});
				dispatch('table/setBy', { uid: x, by: target });
			}
			dispatch('check');
			dispatch;
		},
		target: ({ state, dispatch, commit }) => {
			const {
				start,
				table: { target }
			} = state;
			if (target === -1) {
				commit('table/setTarget', start);
				commit('table/_setBlock', { uid: start, action: true });
			}
			dispatch('action');
		},
		check: ({ state, commit, dispatch }) => {
			const table = state.table.values;
			const { end, actionColor } = state;
			let small = null;
			let uid = 0;
			for (let i of table) {
				for (let j of i) {
					if (j.action || j.d1 < 0 || j.d0 < 0) continue;
					const s = j.d1 + j.d0;
					if (!small) {
						uid = j.uid;
						small = s;
					}
					if (small > s) {
						uid = j.uid;
						small = s;
					}
				}
			}
			if (uid !== end) {
				commit('table/setTarget', uid);
				commit('table/_setBlock', {
					uid,
					color: actionColor,
					action: true
				});
				dispatch('target');
			} else {
				dispatch('repath');
			}
		},
		repath: ({ commit, state, rootGetters }, _uid) => {
			const { pathColor, start } = state;
			const getBy = rootGetters['table/getBy'];
			let uid = _uid;
			while (uid !== start) {
				commit('table/_setBlock', { uid, color: pathColor });
				uid = getBy(uid);
			}
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
