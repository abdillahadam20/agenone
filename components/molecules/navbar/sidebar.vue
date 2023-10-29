<template>
	<div
		class="sidebar-overlay"
		:class="[!model ? 'translate-x-full' : '-translate-x-0']"
		@click="handleToggleSidebar"
	/>
	<asides
		class="sidebar"
		:class="!model ? '-translate-x-full' : 'translate-x-0'"
	>
		<div class="sidebar-container">
			<ul class="sidebar-container-list">
				<MoleculesNavbarLink
					v-for="(item, index) in data"
					:key="index"
					:href="item.href"
					:title="item.title"
				/>
			</ul>
		</div>
	</asides>
</template>

<script setup lang="ts">
const { data: link } = await useFetch('/api/navbar');
const data = link.value?.data;

const props = defineProps({
	modelValue: {
		type: Boolean,
	},
});
const emit = defineEmits(['update:modelValue']);

const model = computed({
	get() {
		return props.modelValue;
	},
	set(value) {
		emit('update:modelValue', value);
	},
});

const handleToggleSidebar = () => {
	emit('update:modelValue', !model);
};
</script>

<style scoped lang="postcss">
.sidebar-overlay {
	@apply lg:hidden bg-gray-600 duration-300 h-screen transition-all ease-in-out w-full left-0 top-0 fixed opacity-40;
}

.sidebar {
	@apply w-64 lg:hidden h-screen duration-300 bg-white shadow-xl fixed left-0 top-0 transition-all ease-in-out;

	&-container {
		@apply px-4 py-4;

		&-list {
			@apply flex flex-col gap-6;
		}
	}
}
</style>
