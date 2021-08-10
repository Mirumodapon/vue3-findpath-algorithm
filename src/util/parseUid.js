import store from '../store';

export default (uid) => {
	const { getColumn } = store.getters;
	const x = getColumn;
	console.log(x);
	return {
		row: Math.floor(uid / x),
		column: uid % x
	};
};
