<template>
	<div>
		<AtomsButton size="sm" />
		<AtomsButton size="md" />
		<AtomsButton size="lg" />
		<AtomsButton size="sm" disabled />
		<AtomsButton size="md" disabled />
		<AtomsButton size="lg" disabled />
		<AtomsButton size="sm" icon="material-symbols:arrow-forward" />
		<AtomsButton size="md" icon="material-symbols:arrow-forward" />
		<AtomsButton size="lg" icon="material-symbols:arrow-forward" />
	</div>
</template>

<script setup lang="ts"></script>

<style scoped lang="postcss">
div {
	@apply bg-black h-[100vh] flex gap-8 justify-center items-center mt-10;
}
</style>
