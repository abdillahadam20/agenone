<template>
	<div
		class="w-[327px] lg:w-[350px] xl:w-[630px] p-3 lg:p-4 rounded-[32px] border border-solid border-[#3d414c] bg-agenone-gray-800 flex flex-col justify-center items-center gap-6"
	>
		<img class="rounded-[32px]" :src="images" alt="" />
		<div class="flex flex-col justify-center items-start gap-3">
			<h3
				class="text-white overflow-hidden text-ellipsis font-inter lg:text-[32px] font-bold text-lg lg:leading-[40px] whitespace-nowrap text-ove"
			>
				{{ title }}
			</h3>
			<p
				class="font-inter w-[17rem] xl:w-full text-base lg:text-xl text-[#B6B8BC] font-normal whitespace-nowrap text-ellipsis overflow-hidden"
			>
				{{ description }}
			</p>
		</div>
	</div>
</template>

<script setup lang="ts">
defineProps({
	title: {
		type: String,
		default: '',
	},
	description: {
		type: String,
		default: '',
	},
	images: {
		type: String,
		default: '',
	},
	label: {
		type: String,
		default: '',
	},
});
</script>

<style scoped></style>
