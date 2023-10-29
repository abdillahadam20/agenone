<template>
	<li>
		<nuxt-link class="link" :to="href">{{ title }}</nuxt-link>
	</li>
</template>

<script setup lang="ts">
defineProps({
	href: {
		type: String,
		default: '',
	},
	title: {
		type: String,
		default: '',
	},
});
</script>

<style scoped lang="postcss">
.link {
	@apply text-center text-lg leading-[14px] tracking-[0.18px] font-medium font-inter relative;

	&:after {
		transition: 0.3s;
		@apply content-[""] left-0 bottom-[-10px] absolute w-0 h-[2px] bg-primary-500 rounded-[10px];
	}

	&:hover:after {
		@apply w-full;
	}
}
</style>
