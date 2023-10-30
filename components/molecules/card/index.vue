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
	@apply flex flex-col justify-center items-center w-[290px] gap-[10px];
}

.card {
	display: flex;
	padding: 10px;
	align-items: flex-start;
	gap: 10px;
	border-radius: 1000px;
	background: linear-gradient(90deg, #fff 0%, rgba(255, 255, 255, 0) 100%);
}

.wrap {
	display: flex;
	width: 88px;
	height: 88px;
	padding: 18px;
	justify-content: center;
	align-items: center;
	gap: 10px;
	border-radius: 1000px;
	border: 2px solid var(--primary-500, #00796d);
	background: var(--shades-white, #fff);
}

.icon {
	width: 52px;
	height: 52px;
	flex-shrink: 0;
}

.desc {
	color: var(--shades-white, #fff);
	text-align: center;

	/* Text 2Xl / Medium */
	font-family: Inter;
	font-size: 24px;
	font-style: normal;
	font-weight: 500;
	line-height: 32px; /* 133.333% */
}
</style>
