export default {
	setInit: ({ commit }, { row, column }) => {
		const defaultArray = [];
		for (let i = 0; i < row; ++i) {
			const rowArray = [];
			for (let j = 0; j < column; ++j) {
				rowArray.push({
					uid: i * column + j,
					d0: -1,
					d1: -1,
					action: false,
					wall: false,
					status: 'white'
				});
			}
			defaultArray.push(rowArray);
		}
		commit('init', {
			row,
			column,
			content: defaultArray
		});
	},
	setMode: ({ commit }, mode) => {
		commit('setMode', mode);
	},
	setStart: ({ commit, state }, uid) => {
		const { column, start } = state;
		const n_row = Math.floor(uid / column);
		const n_column = uid % column;
		const o_row = Math.floor(start / column);
		const o_column = start % column;
		commit('setStart', { n_column, n_row, o_column, o_row });
	},
	setEnd: ({ commit, state }, uid) => {
		const { column, end } = state;
		const n_row = Math.floor(uid / column);
		const n_column = uid % column;
		const o_row = Math.floor(end / column);
		const o_column = end % column;
		commit('setEnd', { n_column, n_row, o_column, o_row });
	},
	switchWall: ({ state, commit }, uid) => {
		let { row, column, content } = state;
		row = Math.floor(uid / column);
		column = uid % column;
		const status = !content[row][column].wall;
		commit('switchWall', { row, column, status });
	}
};
