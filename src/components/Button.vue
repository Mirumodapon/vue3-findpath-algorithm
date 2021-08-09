<template>
	<button>
		<slot />
	</button>
</template>

<script>
export default {
	name: 'Block',
	props: ['active']
};
</script>

<style lang="scss"></style>
