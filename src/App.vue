<template>
	<Setting />
	<Table />
</template>

<script>
import { mapActions } from 'vuex';

import Table from './components/Table';
import Setting from './components/Setting.vue';

export default {
	name: 'App',
	components: { Table, Setting },
	methods: { ...mapActions(['init', 'setStart']) },
	mounted() {
		// this.init({ row: 10, column: 9 });
	}
};
</script>

<style lang="scss"></style>
