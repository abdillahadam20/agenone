<template>
	<footer class="footer">
		<div class="footer-container">
			<div class="footer-container-content">
				<div class="footer-container-content-top">
					<h1>Let’s discuss and bring your vision to life.</h1>
					<AtomsButton icon="material-symbols:arrow-forward-rounded"
						>Let's Talk</AtomsButton
					>
				</div>
				<div class="footer-container-content-bottom">
					<div class="footer-container-content-bottom-left">
						<span class="footer-container-content-bottom-left-logo">
							<img src="~/assets/img/agenone-logo.svg" alt="" />
							Agenone</span
						>
						<p class="footer-container-content-bottom-left-desc">
							We're a team of experienced designers, developers, and marketers,
							passionate about delivering exceptional digital solutions.
						</p>
						<p class="footer-container-content-bottom-left-email">
							hello@agenone.com
						</p>
					</div>
					<div
						v-for="(i, idx) in 3"
						:key="idx"
						class="footer-container-content-bottom-right"
					>
						<div class="flex flex-col gap-4 w-20">
							<h1 class="text-white text-lg font-bold">{{ data?.title }}</h1>
							<ul v-for="(item, index) in data?.menu" :key="index">
								<MoleculesFooter
									class="text-agenone-gray-200 text-lg font-normal"
									:title="item.title"
								/>
							</ul>
						</div>
					</div>
				</div>
				<p class="text-agenone-gray-200 text-lg font-normal text-center">
					Copyright © 2023 by Agenone. All rights reserved.
				</p>
			</div>
		</div>
	</footer>
</template>

<script setup lang="ts">
const { data: footer } = await useFetch(`/api/footer`);
const data = footer.value?.data;
</script>

<style scoped lang="postcss">
.footer {
	@apply relative font-inter left-0 top-[352rem] py-8;
	background-image: url('~/assets/img/bg-footer.svg');
	background-repeat: no-repeat;
	background-size: cover;

	&-container {
		@apply max-w-7xl mx-auto;

		&-content {
			@apply flex flex-col gap-[15rem];

			&-top {
				@apply flex flex-row justify-center gap-12 p-8;

				h1 {
					@apply text-white text-2xl lg:text-left text-center lg:text-[44px] lg:leading-[52px] font-semibold lg:tracking-[-0.88px];
				}
			}

			&-bottom {
				@apply flex flex-col lg:flex-row lg:gap-10;

				&-left {
					@apply flex flex-col gap-[25px];
					&-logo {
						@apply flex gap-3 text-white text-2xl italic font-bold;

						img {
							@apply w-[52px] h-[34px];
						}
					}

					&-desc {
						@apply text-agenone-gray-200 text-lg font-normal;
					}

					&-email {
						@apply text-agenone-gray-200 text-lg font-medium mt-[15px];
					}
				}

				&-right {
					@apply grid grid-cols-1 md:grid-cols-3 lg:gap-20;
				}
			}
		}
	}
}
</style>
