<template>
	<div v-if="mode !== 'UNSETTING'">
		<button @click="back">Back</button>
		<button @click="() => start()">start</button>
		<button @click="() => init()">reset</button>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
	name: 'GameSetting',
	computed: {
		...mapGetters({ mode: 'mode' })
	},
	methods: {
		...mapActions(['setMode', 'start', 'init']),
		back() {
			this.setMode('UNSETTING');
		}
	}
};
</script>

<style lang="scss"></style>
