<template>
	<button :class="buttons" :disabled="disabled">
		<slot>{{ props.title }}</slot>
		<icon
			v-if="icon"
			:class="{
				'w-4 h-4': sm || size === 'sm',
				'w-6 h-6': !sm && size !== 'sm',
			}"
			:name="props.icon"
		/>
	</button>
</template>

<script setup lang="ts">
const props = defineProps({
	title: {
		type: String,
		default: '',
	},
	color: {
		type: String,
		default: 'primary',
	},
	icon: {
		type: String,
		default: '',
	},
	size: {
		type: String,
		default: 'md',
	},
	disabled: {
		type: Boolean,
		default: false,
	},
	sm: {
		type: Boolean,
	},
});

const buttons = [
	`button`,
	`button-${props.color}`,
	`button-${props.size}`,
	props.disabled ? 'button-disabled' : '',
];
</script>

<style scoped lang="postcss">
.button {
	@apply gap-2 justify-center items-center rounded-[100px] inline-flex text-white text-center font-inter font-medium;

	&-primary {
		@apply bg-primary-500 focus:outline-none;

		&:hover {
			@apply shadow-xl bg-primary-400;
			box-shadow: 0px 24px 48px -12px rgba(56, 198, 130, 0.18);
		}
	}

	&-lg {
		@apply py-5 px-8 text-lg;
	}

	&-md {
		@apply py-4 px-6 text-base;
	}

	&-sm {
		@apply py-2 px-4 text-sm;
	}

	&-disabled {
		@apply bg-primary-100 pointer-events-none;
	}
}
</style>
