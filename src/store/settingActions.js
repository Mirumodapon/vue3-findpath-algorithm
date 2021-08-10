export default {
	setStart: ({ state, commit, dispatch }, uid) => {
		const { normal, startColor, start, end } = state;
		if (uid === end)
			return alert("Can't set the start point on the end point");
		if (start !== -1)
			dispatch('table/setBlock', { uid: start, color: normal });
		commit('setStart', uid);
		dispatch('table/setBlock', { uid, color: startColor });
	},
	setEnd: ({ state, commit, dispatch }, uid) => {
		const { normal, end, endColor, start } = state;
		if (uid === start)
			return alert("Can't set the end point on the start point");
		if (end !== -1) dispatch('table/setBlock', { uid: end, color: normal });
		commit('setEnd', uid);
		dispatch('table/setBlock', { uid, color: endColor });
	},
	setWall: ({ dispatch, rootGetters, state }, uid) => {
		const { wallColor, normal } = state;
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
