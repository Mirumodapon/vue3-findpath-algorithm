<template>
	<Table />
</template>

<script>
import { mapActions } from 'vuex';

import Table from './components/Table';

export default {
	name: 'App',
	components: { Table },
	methods: { ...mapActions(['init', 'setStart']) },
	mounted() {
		this.init({ row: 10, column: 9 });
	}
};
</script>

<style lang="scss"></style>
