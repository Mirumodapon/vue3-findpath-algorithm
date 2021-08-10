<template>
	<div v-if="mode === 'UNSETTING'">
		<label>Row:</label>
		<input type="number" v-model="row" />
		<label>Column:</label>
		<input type="number" v-model="column" />
		<button @click="submit">Submit</button>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
	name: 'Setting',
	data() {
		return {
			row: 0,
			column: 0
		};
	},
	components: {},
	computed: mapGetters(['mode']),
	methods: {
		...mapActions(['init']),
		submit() {
			const { row, init, column } = this;
			init({ row, column });
		}
	}
};
</script>

<style lang="scss"></style>
