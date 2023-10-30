<template>
	<p v-dompurify-html="description" class="desc" />
</template>

<script setup lang="ts">
defineProps({
	description: {
		type: String,
		default: '',
	},
});
</script>

<style scoped lang="postcss">
.desc {
	@apply font-inter text-xl font-medium text-agenone-gray-200 text-center;
}
</style>
