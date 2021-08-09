export default {
	init: (state, { content, row, column }) => {
		state.row = row;
		state.column = column;
		state.content = content;
		state.mode = '';
	},
	setStart(state, { n_column, n_row, o_column, o_row }) {
		console.log({ n_column, n_row, o_column, o_row });
		state.start = n_row * state.row + n_column;
		state.content[o_row][o_column].status = 'white';
		state.content[n_row][n_column].status = 'yellow';
	},
	setEnd(state, { n_column, n_row, o_column, o_row }) {
		state, { n_column, n_row, o_column, o_row };
		state.end = n_row * state.row + n_column;
		state.content[o_row][o_column].status = 'white';
		state.content[n_row][n_column].status = 'red';
	},
	switchWall: (state, { row, column, status }) => {
		state.content[row][column].wall = status;
		state.content[row][column].status = status ? 'black' : 'white';
	},
	setMode: (state, mode) => {
		state.mode = mode;
	}
};
