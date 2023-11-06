<template>
	<section class="logo">
		<div class="logo-container">
			<div class="logo-container-item">
				<img
					v-for="(img, index) in logo"
					:key="index"
					:src="img.logo"
					:alt="img.alt"
				/>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
const logo = [
	{
		id: 1,
		logo: '/static/img/logo/slack.svg',
		alt: 'Logo Slack',
	},
	{
		id: 2,
		logo: '/static/img/logo/google.svg',
		alt: 'Logo Google',
	},
	{
		id: 3,
		logo: '/static/img/logo/netflix.svg',
		alt: 'Logo Netflix',
	},
	{
		id: 4,
		logo: '/static/img/logo/airbnb.svg',
		alt: 'Logo airbnb',
	},
	{
		id: 5,
		logo: '/static/img/logo/adobe.svg',
		alt: 'Logo Adobe',
	},
	{
		id: 6,
		logo: '/static/img/logo/microsoft.svg',
		alt: 'Logo Microsoft',
	},
];
</script>

<style scoped lang="postcss">
.logo {
	@apply px-6 py-10 font-inter lg:py-[100px] lg:px-[120px] h-max relative top-[-6rem] w-full bg-agenone-gray-900 border-t border-t-[#3D414C];

	&-container {
		@apply max-w-7xl mx-auto;

		&-item {
			@apply grid grid-cols-2 justify-items-center items-center text-center lg:grid-cols-6 py-8 px-6 gap-16;
		}
	}
}
</style>
