<template>
	<div v-if="mode === 'uninit'">
		<label>Row: </label>
		<input v-model="row" type="number" />
		<label>Column: </label>
		<input v-model="column" type="number" />
		<Button @click="init">
			Create Table
		</Button>
	</div>
	<div v-if="mode !== 'uninit'">
		<Button @click="setMode('uninit')">set size</Button>
		<Button @click="setMode('SET WALL')">set wall</Button>
		<Button @click="setMode('SET START')">set start</Button>
		<Button @click="setMode('SET END')">set end</Button>
		<span>{{ mode }}</span>
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

<style>
table {
	border: 0;
}
</style>
