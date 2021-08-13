import parseUid from './parseUid';

// function _distance(x1, y1, x2, y2) {
// 	const { abs } = Math;
// 	return abs(x1 - x2) + abs(y1 - y2);
// }

function _distance(x1, y1, x2, y2) {
	const { pow, sqrt, round } = Math;
	return round(sqrt(pow(x1 - x2, 2) + pow(y1 - y2, 2)));
}

export default (x, y) => {
	const _x = parseUid(x);
	const _y = parseUid(y);
	return _distance(_x.row, _x.column, _y.row, _y.column);
};
