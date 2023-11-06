<template>
	<div class="label">
		<button
			class="label-container"
			:class="{
				'bg-primary-500 text-white ': active,
			}"
		>
			<p class="font-inter text-sm lg:text-base font-medium">{{ title }}</p>
		</button>
	</div>
</template>

<script setup lang="ts">
defineProps({
	title: {
		type: String,
		default: '',
	},
	active: Boolean,
});
</script>

<style scoped lang="postcss">
.label {
	@apply bg-[#f3f3f3] p-1 lg:p-2 rounded-[100px]  transition-all ease-in-out duration-300;

	&-container {
		@apply px-4 py-2 lg:px-6 lg:py-4 rounded-[100px] transition-all transform duration-300 ease-linear;
	}
}
</style>
