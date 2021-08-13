<template>
	<div class="block" :style="style">
		<span v-if="false">{{ d0 > 0 ? d0 : '' }}</span>
		<span v-if="false">{{ d1 > 0 ? d1 : '' }}</span>
		<span v-if="false">{{ sum > 0 ? sum : '' }}</span>
	</div>
</template>

<script>
export default {
	name: 'Block',
	props: ['color', 'd0', 'd1', 'size'],
	computed: {
		sum: (({ d0, d1 }) => d0 + d1).bind(this),
		style: (({ color, size }) => ({
			width: size,
			height: size,
			background: color,
			fontSize: size
		})).bind(this)
	}
};
</script>

<style lang="scss">
.block {
	border: 1px black solid;
	position: relative;
	span {
		position: absolute;
		display: block;
		text-align: center;
		font-size: 0.35em;
	}
	span:first-child {
		top: 0;
		left: 0;
	}
	span:nth-child(2) {
		top: 0;
		right: 0;
	}
	span:last-child {
		bottom: 0;
		right: 0;
		left: 0;
		margin: auto;
		font-size: 0.4em;
		font-weight: bold;
	}
}
</style>
