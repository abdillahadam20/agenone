<template>
	<section
		class="px-6 py-10 lg:py-[100px] lg:px-[120px] h-max relative top-[-6rem] w-full"
	>
		<div class="max-w-7xl mx-auto">
			<div class="flex flex-col gap-16 justify-center items-center">
				<AtomsTextTitle
					title="The Services We Offer <mark>For You</mark>"
					class="!text-agenone-gray-900 text-center"
				/>
				<div class="flex gap-6 flex-col">
					<OrganismAccordion
						v-for="(item, index) in data"
						:key="index"
						:number="item.number"
						:title="item.title"
						:description="item.description"
						:images-mobile="item.imagesMobile"
						:images-desktop="item.imagesDesktop"
					/>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
const { data: accordion } = await useFetch('/api/accordion');
const data = accordion.value?.data;
</script>

<style scoped></style>
