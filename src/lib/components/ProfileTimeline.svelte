<script lang="ts">
	import Post from './Post.svelte';
	import { ChevronUp } from 'svelte-radix';
</script>

<section class="flex flex-col">
	<div class="flex justify-stretch">
		<div
			class="border-light-grayish-blue relative box-border flex w-[18%] items-center justify-end border-r-4 border-dotted"
		>
			<div class="text-gray p-4 pr-6 font-semibold">Dec 2023</div>
			<div
				class="top border-brand absolute right-0 top-1/2 aspect-square w-4 -translate-y-1/2 translate-x-[calc(50%+2px)] rounded-full border-[3px] bg-secondary"
			></div>
		</div>
		<div class="m-6 ml-8 flex gap-10">
			<Post />
			<Post />
		</div>
	</div>
	<div class="flex justify-stretch">
		<div class="text-gray border-light-grayish-blue relative w-[18%] border-r-4 border-dotted">
			<div class="flex flex-col items-end p-6 pl-4 text-base">
				<img
					src="icons/duggup-logo.png"
					alt="duggup logo"
					class="aspect-square w-12 rounded-full"
				/>
				<span class="text-lg font-bold text-primary">Duggup</span>
				<span>San Francisco Bay Area</span>
				<span class="mt-1">Joined</span>
				<span>Nov 2023</span>
			</div>
			<div class="absolute right-0 top-0 translate-x-[calc(50%+2px)] bg-background">
				<ChevronUp />
			</div>
			<div
				class="top border-brand absolute right-0 top-1/2 aspect-square w-6 -translate-y-1/2 translate-x-[calc(50%+2px)] rounded-full border-8 bg-background"
			></div>
		</div>
		<div class="m-6 ml-8 flex flex-col items-start justify-center">
			<h3 class="text-xl font-bold">Co-Founder and CEO</h3>
			<div class="text-gray flex items-center">
				Full Time
				<div class="bg-neutral mx-2 h-1 w-1 rounded-full"></div>
				Remote
			</div>
		</div>
	</div>
	<div class="flex justify-stretch">
		<div
			class="border-light-grayish-blue relative box-border flex w-[18%] items-center justify-end border-r-4 border-dotted"
		>
			<div class="text-gray p-4 pr-6 font-semibold">Dec 2023</div>
			<div
				class="top border-brand absolute right-0 top-1/2 aspect-square w-4 -translate-y-1/2 translate-x-[calc(50%+2px)] rounded-full border-[3px] bg-secondary"
			></div>
		</div>
		<div class="m-6 ml-8 flex gap-10">
			<Post />
			<Post />
		</div>
	</div>
	<div class="flex justify-stretch">
		<div class="text-gray border-light-grayish-blue relative w-[18%] border-r-4 border-dotted">
			<div class="flex flex-col items-end p-6 pl-4 text-base">
				<img
					src="icons/duggup-logo.png"
					alt="duggup logo"
					class="aspect-square w-12 rounded-full"
				/>
				<span class="text-lg font-bold text-primary">Duggup</span>
				<span>San Francisco Bay Area</span>
				<span class="mt-1">Joined</span>
				<span>Nov 2023</span>
			</div>
			<div class="absolute right-0 top-0 translate-x-[calc(50%+2px)] bg-background">
				<ChevronUp />
			</div>
			<div
				class="top border-brand absolute right-0 top-1/2 aspect-square w-6 -translate-y-1/2 translate-x-[calc(50%+2px)] rounded-full border-8 bg-background"
			></div>
		</div>
		<div class="m-6 ml-8 flex flex-col items-start justify-center">
			<h3 class="text-xl font-bold">Co-Founder and CEO</h3>
			<div class="text-gray flex items-center">
				Full Time
				<div class="bg-neutral mx-2 h-1 w-1 rounded-full"></div>
				Remote
			</div>
		</div>
	</div>
</section>
