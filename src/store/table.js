import parseUid from '../util/parseUid';

export default {
	namespaced: true,
	state: {
		values: [[]],
		target: -1
	},
	mutations: {
		tableInit: (state, table) => {
			state.values = table;
			state.target = -1;
		},
		setBlock: (state, { row, column, ...config }) => {
			let item = state.values[row][column];
			item = { ...item, ...config };
			state.values[row][column] = item;
		},
		_setBlock: (state, { uid, ...config }) => {
			const { row, column } = parseUid(uid);
			let item = state.values[row][column];
			item = { ...item, ...config };
			state.values[row][column] = item;
		},
		setTarget: (state, uid) => {
			state.target = uid;
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
		},
		setBy: ({ state, commit }, { uid, by }) => {
			const { row, column } = parseUid(uid);
			const { values } = state;
			if (values[row][column].by) return;
			commit('setBlock', { row, column, by });
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
		},
		getBy: (state) => (uid) => {
			const { row, column } = parseUid(uid);
			return state.values[row][column].by;
		}
	}
};
