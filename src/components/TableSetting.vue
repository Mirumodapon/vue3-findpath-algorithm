<template>
	<div v-if="mode !== 'UNSETTING'">
		<button @click="() => setMode('BUILD-W')">Wall</button>
		<button @click="() => setMode('BUILD-S')">Start</button>
		<button @click="() => setMode('BUILD-E')">End</button>
		{{ mode }}
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
	name: 'TableSetting',
	computed: {
		...mapGetters({ mode: 'mode' })
	},
	methods: {
		...mapActions(['setMode', 'start']),
		back() {
			this.setMode('UNSETTING');
		}
	}
};
</script>

<style lang="scss"></style>
