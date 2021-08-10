import parseUid from '../util/parseUid';

export default {
	namespaced: true,
	state: {
		values: [[]]
	},
	mutations: {
		tableInit: (state, table) => {
			state.values = table;
		},
		setBlock: (state, { row, column, ...config }) => {
			let item = state.values[row][column];
			item = { ...item, ...config };
			state.values[row][column] = item;
		}
	},
	actions: {
		tableInit: ({ commit }, { row, column }) => {
			const table = [];
			for (let i = 0; i < row; ++i) {
				const tableRow = [];
				for (let j = 0; j < column; ++j) {
					const payload = {
						uid: i * column + j,
						d0: -1,
						d1: -1,
						color: 'white',
						wall: false,
						action: false
					};
					tableRow.push(payload);
				}
				table.push(tableRow);
			}
			commit('tableInit', table);
		},
		setBlock: ({ commit }, { uid, ...config }) => {
			const { row, column } = parseUid(uid);
			commit('setBlock', { row, column, ...config });
		}
	},
	getters: {
		table: ({ values }) =>
			values.map((row) =>
				row.map(({ uid, d0, d1, color }) => ({
					uid,
					d0,
					d1,
					color
				}))
			),
		isWall: (state) => (uid) => {
			const { row, column } = parseUid(uid);
			return state.values[row][column].wall;
		},
		isAction: (state) => (uid) => {
			const { row, column } = parseUid(uid);
			return state.values[row][column].action;
		}
	}
};
