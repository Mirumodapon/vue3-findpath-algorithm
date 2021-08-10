import store from '../store';

export default (uid) => {
	const { getColumn } = store.getters;
	const x = getColumn;
	return {
		row: Math.floor(uid / x),
		column: uid % x
	};
};
