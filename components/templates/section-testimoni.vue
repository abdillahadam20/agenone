<template>
	<section class="testimoni">
		<div class="testimoni-container">
			<div class="testimoni-container-item">
				<div class="flex flex-col gap-10">
					<AtomsTestimoniCard v-for="i in 3" />
				</div>
				<div class="flex flex-col gap-10">
					<AtomsTestimoniCard v-for="i in 4" />
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts"></script>

<style scoped lang="postcss">
.testimoni {
	@apply px-6 py-10 font-inter relative top-[-6rem] w-full bg-white;

	&-container {
		@apply max-w-7xl mx-auto;

		&-item {
			@apply grid grid-cols-1 lg:grid-cols-2 justify-items-center items-center text-center py-8 px-6 gap-16;
		}
	}
}
</style>
