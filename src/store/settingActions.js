export default {
	setStart: ({ state, commit, dispatch, rootGetters }, uid) => {
		const { normal, startColor, start, end } = state;
		if (uid === end)
			return alert("Can't set the start point on End");
		if (rootGetters['table/isWall'](uid)) return alert('You can set Start on the wall.');
		if (start !== -1)
			dispatch('table/setBlock', { uid: start, color: normal });
		commit('setStart', uid);
		dispatch('table/setBlock', { uid, color: startColor });
	},
	setEnd: ({ state, commit, dispatch, rootGetters }, uid) => {
		const { normal, end, endColor, start } = state;
		if (uid === start)
			return alert("Can't set the end point on the Start");
		if (rootGetters['table/isWall'](uid)) return alert('You can set End on the wall.');
		if (end !== -1) dispatch('table/setBlock', { uid: end, color: normal });
		commit('setEnd', uid);
		dispatch('table/setBlock', { uid, color: endColor });
	},
	setWall: ({ dispatch, rootGetters, state }, uid) => {
		const { wallColor, normal, start, end } = state;
		if (uid === start) return alert('You can set wall on Start.')
		if (uid === end) return alert('You can set wall on End.')
		const isWall = rootGetters['table/isWall'](uid);
		console.log(isWall);
		dispatch('table/setBlock', {
			uid,
			wall: !isWall,
			color: isWall ? normal : wallColor
		});
	},
	setMode: ({ commit }, mode) => {
		commit('setMode', mode);
	}
};
