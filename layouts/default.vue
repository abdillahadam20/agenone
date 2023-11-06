<template>
	<div class="app">
		<OrganismNavbar />
		<slot />
		<OrganismFooter />
	</div>
</template>

<script setup lang="ts"></script>

<style scoped lang="postcss">
.app {
	@apply w-full h-full min-h-screen bg-white;
}
</style>
