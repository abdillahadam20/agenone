<template>
	<div class="container">
		<div class="card">
			<div class="wrap">
				<div class="icon">
					<img :src="icon" :alt="alt" />
				</div>
			</div>
		</div>
		<p class="desc">{{ title }}</p>
	</div>
</template>

<script lang="ts" setup>
defineProps({
	icon: {
		type: String,
		default: '',
	},
	alt: {
		type: String,
		default: '',
	},
	title: {
		type: String,
		default: '',
	},
});
</script>

<style lang="postcss">
body {
	--primary-500: #38c682;
	--shades-white: #ffffff;
}
</style>

<style lang="postcss" scoped>
.container {
	@apply flex flex-col justify-center items-center lg:w-[240px] xl:w-[290px] lg:h-auto h-[14rem] w-[290px] gap-[10px];
}

.card {
	@apply flex p-[10px] items-start gap-[10px] rounded-full;
	background: linear-gradient(90deg, #fff 0%, rgba(255, 255, 255, 0) 100%);
}

.wrap {
	@apply flex lg:w-[44px] lg:h-[44px] xl:w-[88px] xl:h-[88px] w-[88px] h-[88px] p-[18px] justify-center items-center gap-[10px] rounded-full;
	border: 2px solid var(--primary-500, #00796d);
	background: var(--shades-white, #fff);
}

.icon {
	@apply xl:w-[52px] xl:h-[52px] lg:w-[26px] lg:h-[26px] flex-shrink-0;
}

.desc {
	@apply font-inter lg:text-lg xl:text-2xl font-medium text-center;
	color: var(--shades-white, #fff);
}
</style>
