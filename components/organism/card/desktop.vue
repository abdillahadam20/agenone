<template>
	<div class="relative hidden lg:flex">
		<img src="~/assets/img/hero-banner.svg" alt="" class="absolute" />
		<div
			class="flex flex-col gap-11 justify-center items-center relative lg:h-[12rem] xl:h-auto"
		>
			<h1
				class="text-white text-lg relative lg:top-[1rem] xl:top-0 top-[-19rem] text-center lg:p-6 font-inter xl:text-[32px] xl:leading-[40px] font-semibold"
			>
				Benefit of improving your business
			</h1>
			<div class="hidden lg:flex justify-center items-start">
				<MoleculesCard
					v-for="(item, index) in data"
					:key="index"
					:icon="item.icon"
					:alt="item.alt"
					:title="item.title"
				/>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
const { data: card } = await useFetch('/api/card');
const data = card.value?.data;
</script>

<style scoped></style>
