<template>
	<h1 v-dompurify-html="title" class="title" />
</template>

<script setup lang="ts">
defineProps({
	title: {
		type: String,
		default: '',
	},
});
</script>

<style scoped lang="postcss">
.title {
	@apply font-inter text-4xl font-bold text-white;
	@apply lg:text-7xl;
}
</style>
