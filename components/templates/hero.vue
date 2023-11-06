<template>
	<section class="hero">
		<div class="hero-container">
			<div class="hero-container-content">
				<div class="flex flex-col justify-center items-center gap-3">
					<p class="hero-container-content-label">{{ data?.label }}</p>
					<div class="hero-container-content-text">
						<div class="hero-container-content-text-title">
							<AtomsTextTitle :title="data?.title" />
							<AtomsTextDescription :description="data?.description" />
						</div>
						<AtomsButton
							:size="largerThanMd ? 'lg' : 'md'"
							icon="material-symbols:arrow-forward-rounded"
							>{{ data?.button }}</AtomsButton
						>
					</div>
				</div>
				<OrganismCardDesktop />
				<OrganismCardMobile />
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core';

const { data: hero } = await useFetch('/api/hero');
const data = hero.value?.data;

const breakpoints = useBreakpoints(breakpointsTailwind);
const largerThanMd = breakpoints.greater('md');
</script>

<style scoped lang="postcss">
.hero {
	@apply px-6 py-10 lg:py-[100px] lg:px-[120px] h-max relative top-[-6rem] w-full;
	background: url('/assets/img/ornament-hero.svg'), #0c111f;
	background-size: cover;
	background-repeat: no-repeat;

	&-container {
		@apply max-w-7xl mx-auto py-[100px];

		&-content {
			@apply flex flex-col gap-20 justify-center items-center text-center;

			&-label {
				@apply bg-[rgba(255,255,255,0.10)] rounded-[100px] px-4 py-3;
				@apply text-white text-center font-inter text-sm font-medium uppercase tracking-[1px];
			}

			&-text {
				@apply flex flex-col justify-center items-center gap-14 mt-3;
				&-title {
					@apply flex flex-col justify-center items-center gap-6;
				}
			}

			&-card {
				background-image: url('/assets/img/hero-card.svg');
				background-size: cover;
				background-repeat: no-repeat;
			}
		}
	}
}
</style>
