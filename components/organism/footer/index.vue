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
					<div class="footer-container-content-bottom-right">
						<div v-for="(i, idx) in 3" :key="idx">
							<div class="flex flex-col lg:gap-2 xl:gap-4 w-20">
								<h1
									class="text-white md:text-sm lg:text-base xl:text-lg font-bold"
								>
									{{ data?.title }}
								</h1>
								<ul v-for="(item, index) in data?.menu" :key="index">
									<MoleculesFooter
										class="text-agenone-gray-200 md:text-sm lg:text-base xl:text-lg font-normal"
										:title="item.title"
									/>
								</ul>
							</div>
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
	@apply relative h-[1085px] font-inter left-0 top-[385rem] py-8 lg:h-[30rem] xl:h-[38rem] 2xl:h-[55rem] bg-no-repeat bg-cover md:h-[23rem] bg-[url(~/assets/img/bg-footer-mobile.svg)] md:bg-[url(~/assets/img/bg-footer.svg)];

	&-container {
		@apply max-w-7xl mx-auto;

		&-content {
			@apply flex flex-col gap-8 md:gap-6 lg:gap-8 xl:gap-4  2xl:gap-[10rem];

			&-top {
				@apply flex flex-col md:flex-row items-center justify-center gap-12 md:px-4 xl:p-8;

				h1 {
					@apply text-white text-2xl w-[20rem] md:w-[24rem] lg:w-[60%]  md:text-left text-center xl:text-[44px] xl:leading-[52px] font-semibold xl:tracking-[-0.88px] lg:text-3xl;
				}
			}

			&-bottom {
				@apply flex p-8 flex-col justify-center items-center gap-10 md:flex-row lg:gap-10 md:p-4 lg:p-8;

				&-left {
					@apply flex flex-col gap-4 lg:gap-4 xl:gap-[25px] md:w-[22rem] lg:w-[55%];

					&-logo {
						@apply flex gap-3 text-white text-2xl italic font-bold;

						img {
							@apply w-[52px] h-[34px];
						}
					}

					&-desc {
						@apply text-agenone-gray-200 md:text-sm lg:text-lg font-normal;
					}

					&-email {
						@apply text-agenone-gray-200 text-lg font-medium lg:mt-[10px] xl:mt-[15px];
					}
				}

				&-right {
					@apply grid grid-cols-2 md:grid-cols-3 md:gap-4 xl:gap-20 gap-16 w-[22rem];
				}
			}
		}
	}
}
</style>
