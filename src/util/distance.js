import parseUid from './parseUid';

function _distance(x1, y1, x2, y2) {
	const { abs } = Math;
	return abs(x1 - x2) + abs(y1 - y2);
}

export default (x, y) => {
	const _x = parseUid(x);
	const _y = parseUid(y);
	return _distance(_x.row, _x.column, _y.row, _y.column);
};
