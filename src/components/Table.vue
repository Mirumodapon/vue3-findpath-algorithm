<template>
	<table cellspacing="0" cellpadding="0" v-if="mode !== 'UNSETTING'">
		<tr v-for="(row, ior) in table" :key="ior">
			<td v-for="({ d0, d1, color }, ioc) in row" :key="ioc">
				<Block :d0="d0" :d1="d1" size="50px" :color="color" />
			</td>
		</tr>
	</table>
</template>

<script>
import { mapGetters } from 'vuex';

import Block from './Block';

export default {
	name: 'Table',
	components: { Block },
	computed: { ...mapGetters({ table: 'table/table', mode: 'mode' }) }
};
</script>

<style lang="scss"></style>
