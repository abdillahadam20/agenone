<template>
	<section class="achievements">
		<div class="achievements-container">
			<div class="achievements-container-item">
				<div class="achievements-container-item-content">
					<AtomsTextTitle title="Our Project Have Been <mark>Done</mark>" />
					<AtomsTextDescription
						class="max-w-[928px]"
						description="Take a look at some of our recent projects and see how we've helped other businesses elevate their brand and drive business growth."
					/>
				</div>
				<div class="flex bg-[#f3f3f3] rounded-[100px]">
					<AtomsLabel
						v-for="(btn, index) in data?.button"
						:key="index"
						:title="btn.title"
						:active="labels === btn.label"
						@click="activeCard(btn.label)"
					/>
				</div>
				<div class="flex flex-col lg:flex-row gap-5">
					<div v-for="(card, idx) in data?.card" :key="idx">
						<AtomsCard
							v-if="card.label === labels"
							:title="card.title"
							:description="card.description"
							:images="card.images"
						/>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
const { data: achievements } = await useFetch('/api/project');
const data = achievements.value?.data;

const labels = ref('UI/UX Design');
const activeCard = (label: string) => {
	labels.value = label;
};
</script>

<style scoped lang="postcss">
.achievements {
	@apply px-6 py-10 font-inter lg:py-[100px] lg:px-[120px] h-max relative top-[-6rem] w-full;
	background: url('~/assets/img/bg-section-projects.svg'), #0c111f;
	background-repeat: no-repeat;
	background-size: cover;

	&-container {
		@apply max-w-7xl mx-auto;

		&-item {
			@apply flex flex-col gap-16 justify-center items-center;

			&-content {
				@apply text-center flex flex-col justify-center items-center gap-6;
			}
		}
	}
}
</style>
