<template>
	<h1 @click="() => setStart(10)">Hello</h1>
</template>

<script>
import { mapActions } from 'vuex';
export default {
	name: 'App',
	components: {},
	methods: { ...mapActions(['init', 'setStart']) },
	mounted() {
		this.init({ row: 10, column: 9 });
	}
};
</script>

<style lang="scss">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
