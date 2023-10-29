<template>
	<nav class="nav">
		<div class="nav-container">
			<div class="lg:hidden flex justify-between">
				<div class="flex justify-center items-center gap-2">
					<img class="w-[36px]" src="~/assets/img/agenone-logo.svg" />
					<span class="font-inter text-xl italic font-bold">Agenone</span>
				</div>
				<button
					class="w-8 h-8 rounded-lg border flex justify-center items-center"
					@click="handleToggleSidebar"
				>
					<icon name="ci:hamburger-lg" class="w-4" h-4 />
				</button>
			</div>
			<div class="nav-container-content">
				<div class="nav-container-content-logo">
					<img src="~/assets/img/agenone-logo.svg" />
					<span>Agenone</span>
				</div>
				<ul class="nav-container-content-list">
					<MoleculesNavbarLink
						v-for="(item, index) in data"
						:key="index"
						:href="item.href"
						:title="item.title"
					/>
				</ul>
				<div class="nav-container-content-button">
					<AtomsButton>Contact Us</AtomsButton>
				</div>
			</div>
		</div>
	</nav>
	<MoleculesNavbarSidebar v-model="isSidebarOpen" />
</template>

<script setup lang="ts">
const { data: link } = await useFetch(`/api/navbar`);
const data = link.value?.data;

const isSidebarOpen = ref(false);
const handleToggleSidebar = () => {
	isSidebarOpen.value = !isSidebarOpen.value;
};
</script>

<style scoped lang="postcss">
.nav {
	@apply p-4 md:px-8 md:py-4 lg:px-20 lg:py-4;

	&-container {
		@apply max-w-7xl mx-auto;

		&-content {
			@apply hidden lg:flex justify-between items-center;

			&-logo {
				@apply flex justify-center items-center gap-3;

				img {
					@apply w-[52px];
				}

				span {
					@apply text-2xl font-bold;
				}
			}

			&-list {
				@apply flex justify-center items-center gap-10;
			}
		}
	}
}
</style>
