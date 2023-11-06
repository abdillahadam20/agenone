<template>
	<li>
		<nuxt-link to="#">{{ title }}</nuxt-link>
	</li>
</template>

<script setup lang="ts">
defineProps({
	title: {
		type: String,
		default: '',
	},
});
</script>

<style scoped></style>
