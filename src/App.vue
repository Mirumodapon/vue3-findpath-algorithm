<template>
	<div v-if="mode === 'uninit'" class="initform">
		<label>Row: </label>
		<input v-model="row" type="number" />
		<br />
		<label>Column: </label>
		<input v-model="column" type="number" />
		<br />
		<Button @click="init">
			Create Table
		</Button>
	</div>
	<div v-if="mode !== 'uninit'" class="modeselect">
		<Button @click="setMode('uninit')">set size</Button>
		<Button @click="setMode('SET WALL')">set wall</Button>
		<Button @click="setMode('SET START')">set start</Button>
		<Button @click="setMode('SET END')">set end</Button>
	</div>
	<table cellspacing="0" cellpadding="0" v-if="mode !== 'uninit'">
		<tr v-for="(row, ior) in content" :key="ior">
			<td v-for="({ d0, d1, uid, status }, ioc) in row" :key="ioc">
				<Block
					:d0="d0"
					:d1="d1"
					size="50px"
					@click="() => setting(uid)"
					:color="status"
				/>
			</td>
		</tr>
	</table>
</template>

<script>
import Block from './components/Block.vue';
import Button from './components/Button.vue';

import { mapActions, mapGetters } from 'vuex';

export default {
	name: 'App',
	components: { Block, Button },
	data() {
		return {
			row: 0,
			column: 0
		};
	},
	computed: mapGetters(['content', 'mode']),
	methods: {
		...mapActions([
			'setInit',
			'switchWall',
			'setMode',
			'setStart',
			'setEnd'
		]),
		init() {
			const { row, column } = this;
			this.setInit({ row, column });
		},
		setting(uid) {
			switch (this.mode) {
				case 'SET WALL':
					return this.switchWall(uid);
				case 'SET START':
					return this.setStart(uid);
				case 'SET END':
					return this.setEnd(uid);
				default:
					return -1;
			}
		},
		print: (a) => console.log(a)
	}
};
</script>

<style lang="scss">
body {
	width: 100vw;
	height: 100vh;
	margin: 0;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	overflow: auto;
}
#app {
	padding: 20px 0;
}
.initform {
	font-size: 10px;
	width: 200px;
	height: 200px;
	padding: 20px;
	border: 3px solid black;
	border-radius: 10px;
	* {
		margin: 10px 0;
	}
	label {
		font-size: 2em;
	}
	input {
		font-size: 2.4em;
		width: 50px;
	}
	button {
		font-size: 2em;
	}
}
.modeselect {
	font-size: 10px;
	button {
		font-size: 2em;
		margin: 10px 10px;
	}
}
table {
	border: 0;
	margin: 10px auto;
}
</style>
