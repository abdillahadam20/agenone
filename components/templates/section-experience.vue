<template>
	<section class="achievements">
		<div class="achievements-container">
			<div class="achievements-container-item">
				<h1>{{ data?.title }}</h1>
				<div class="achievements-container-item-text">
					<div
						v-for="(item, index) in data?.card"
						:key="index"
						class="achievements-container-item-text-card"
					>
						<h3>{{ item.title }}</h3>
						<p>{{ item.label }}</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
const { data: achievements } = await useFetch('/api/achievements');
const data = achievements.value?.data;
</script>

<style scoped lang="postcss">
.achievements {
	@apply px-6 py-10 font-inter lg:py-[100px] lg:px-[120px] h-max relative top-[-6rem] w-full bg-[url('~/assets/img/bg-section-achievement.svg')] bg-no-repeat bg-cover;

	&-container {
		@apply max-w-7xl mx-auto;

		&-item {
			@apply flex flex-col gap-16 justify-center items-center;

			h1 {
				@apply text-agenone-gray-900 lg:text-[44px] lg:leading-[52px] lg:tracking-[-0.88px] text-2xl leading-[32px] font-medium;
			}

			&-text {
				@apply bg-primary-500 rounded-[20px] w-[327px] lg:w-[965px] xl:w-[1280px] flex flex-col lg:flex-row justify-between p-6 gap-8 lg:p-8;

				&-card {
					@apply flex flex-col justify-start items-center text-center;

					h3 {
						@apply text-white text-5xl leading-[52px] lg:leading-[76px] lg:text-7xl font-bold tracking-[-1.44px];
					}

					p {
						@apply text-[#f3f3f3] lg:text-2xl font-medium lg:leading-[28.8px] lg:tracking-[0.48px] text-base;
					}
				}
			}
		}
	}
}
</style>
