<template>
	<table cellspacing="0" cellpadding="0" v-if="mode !== 'UNSETTING'">
		<tr v-for="(row, ior) in table" :key="ior">
			<td v-for="({ d0, d1, color, uid }, ioc) in row" :key="ioc">
				<Block
					:d0="d0"
					:d1="d1"
					size="50px"
					:color="color"
					@click="() => build(uid)"
				/>
			</td>
		</tr>
	</table>

	<div v-if="mode !== 'UNSETTING'">
		{{ mode }}
		<button @click="() => setMode('BUILD-W')">Wall</button>
		<button @click="() => setMode('BUILD-S')">Start</button>
		<button @click="() => setMode('BUILD-E')">End</button>
		<button @click="back">Back</button>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

import Block from './Block';

export default {
	name: 'Table',
	components: { Block },
	computed: {
		...mapGetters({ table: 'table/table', mode: 'mode', w: 'table/isWall' })
	},
	methods: {
		...mapActions(['setMode', 'setStart', 'setEnd']),
		back() {
			this.setMode('UNSETTING');
		},
		build(uid) {
			console.log(this.w(uid));
			switch (this.mode) {
				case 'BUILD-S':
					return this.setStart(uid);
				case 'BUILD-E':
					return this.setEnd(uid);
				default:
					return;
			}
		}
	}
};
</script>

<style lang="scss"></style>
