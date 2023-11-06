<template>
	<div class="accordion">
		<h3 class="accordion-number">
			<mark>{{ number }}</mark>
		</h3>
		<div class="accordion-item">
			<details class="group">
				<summary class="accordion-item-summary">
					<h3 class="accordion-item-summary-title">
						<mark>{{ title }}</mark>
					</h3>
					<icon
						name="material-symbols:arrow-forward-rounded"
						class="accordion-item-summary-icon"
					/>
				</summary>
				<div class="flex flex-col gap-6 lg:gap-10">
					<p>
						{{ description }}
					</p>
					<img class="hidden lg:flex" :src="imagesDesktop" :alt="alt" />
					<img class="lg:hidden flex" :src="imagesMobile" :alt="alt" />
				</div>
			</details>
		</div>
	</div>
</template>

<script setup lang="ts">
defineProps({
	number: {
		type: String,
		default: '',
	},
	title: {
		type: String,
		default: '',
	},
	description: {
		type: String,
		default: '',
	},
	imagesMobile: {
		type: String,
		default: '',
	},
	imagesDesktop: {
		type: String,
		default: '',
	},
	alt: {
		type: String,
		default: '',
	},
});
</script>

<style lang="postcss" scoped>
.accordion {
	@apply w-[327px] md:w-[600px] lg:w-[55rem] xl:w-[1280px] flex gap-3 lg:gap-10 p-6 lg:px-[60px] lg:py-[54px] bg-[#f8f8f8] rounded-[20px];

	&-number {
		@apply font-inter font-bold text-xl lg:text-[32px] lg:leading-[40px] lg:font-semibold;
	}

	&-item {
		@apply w-full;

		&-summary {
			@apply cursor-pointer mb-4 lg:mb-6 list-none flex justify-between;

			&-title {
				@apply flex justify-between font-inter text-xl lg:text-[32px] lg:leading-[40px] font-bold lg:font-semibold;
			}

			&-icon {
				@apply block w-6 h-6 lg:h-10 lg:w-10 transition-all duration-300 group-open:rotate-90 text-agenone-primary;
			}
		}
	}
}
</style>

<!-- <style scoped lang="postcss">
.accordion {
	@apply flex w-[1280px] flex-col gap-10 px-[60px] py-[54px] justify-center items-start bg-[#f8f8f8] rounded-[20px];
}

.number {
	@apply font-inter text-[32px] leading-[40px] font-semibold;
}

.title {
	@apply flex justify-between font-inter text-[32px] leading-[40px] font-semibold;
}

.description {
	@apply font-inter text-lg text-[#5C5E60] font-normal w-[700px];
}
</style> -->
