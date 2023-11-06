<template>
	<div class="relative lg:hidden w-[18rem]">
		<img class="absolute" src="~/assets/img/hero-banner-mobile.svg" />
		<h1 class="font-inter relative font-semibold text-lg text-white py-2">
			Benefits of <br />
			improving your business
		</h1>
		<Swiper
			class="mySwiper"
			:slides-per-view="1"
			:space-between="30"
			:loop="true"
			:modules="[SwiperFreeMode, SwiperAutoplay, SwiperPagination]"
			:autoplay="{
				delay: 4000,
				disableOnInteraction: false,
			}"
			:pagination="{
				clickable: true,
			}"
		>
			<SwiperSlide v-for="(item, index) in data" :key="index">
				<MoleculesCard :icon="item.icon" :alt="item.alt" :title="item.title" />
			</SwiperSlide>
		</Swiper>
	</div>
</template>

<script setup lang="ts">
const { data: card } = await useFetch('/api/card');
const data = card.value?.data;
</script>

<style scoped></style>
