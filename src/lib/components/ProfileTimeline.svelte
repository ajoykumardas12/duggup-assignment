<script lang="ts">
	import Post from './Post.svelte';
	import { ChevronUp } from 'svelte-radix';
</script>

<section class="flex flex-col">
	<div class="flex justify-stretch">
		<div
			class="relative box-border flex w-[18%] items-center justify-end border-r-4 border-dotted border-stone-400"
		>
			<div class="p-4 pr-6 font-semibold text-[#4d4d4d]">Dec 2023</div>
			<div
				class="top absolute right-0 top-1/2 aspect-square w-4 -translate-y-1/2 translate-x-[calc(50%+2px)] rounded-full border-[3px] border-[#0066FF] bg-white"
			></div>
		</div>
		<div class="m-6 ml-8 flex gap-10">
			<Post />
			<Post />
		</div>
	</div>
	<div class="flex justify-stretch">
		<div class="relative w-[18%] border-r-4 border-dotted border-stone-400">
			<div class="flex flex-col items-end p-6 pl-4 text-base text-[#4d4d4d]">
				<img
					src="icons/duggup-logo.png"
					alt="duggup logo"
					class="aspect-square w-12 rounded-full"
				/>
				<span class="text-lg font-bold text-black">Duggup</span>
				<span>San Francisco Bay Area</span>
				<span class="mt-1">Joined</span>
				<span>Nov 2023</span>
			</div>
			<div class="absolute right-0 top-0 translate-x-[calc(50%+2px)] bg-white">
				<ChevronUp color="#4d4d4d" />
			</div>
			<div
				class="top absolute right-0 top-1/2 aspect-square w-6 -translate-y-1/2 translate-x-[calc(50%+2px)] rounded-full border-8 border-[#0066FF] bg-white"
			></div>
		</div>
		<div class="m-6 ml-8 flex flex-col items-start justify-center">
			<h3 class="text-xl font-bold">Co-Founder and CEO</h3>
			<div class="flex items-center text-[#4d4d4d]">
				Full Time
				<div class="mx-2 h-1 w-1 rounded-full bg-stone-400"></div>
				Remote
			</div>
		</div>
	</div>
	<div class="flex justify-stretch">
		<div
			class="relative box-border flex w-[18%] items-center justify-end border-r-4 border-dotted border-stone-400"
		>
			<div class="p-4 pr-6 font-semibold text-[#4d4d4d]">Dec 2023</div>
			<div
				class="top absolute right-0 top-1/2 aspect-square w-4 -translate-y-1/2 translate-x-[calc(50%+2px)] rounded-full border-[3px] border-[#0066FF] bg-white"
			></div>
		</div>
		<div class="m-6 ml-8 flex gap-10">
			<Post />
			<Post />
		</div>
	</div>
	<div class="flex justify-stretch">
		<div class="relative w-[18%] border-r-4 border-dotted border-stone-400">
			<div class="flex flex-col items-end p-6 pl-4 text-base text-[#4d4d4d]">
				<img
					src="icons/duggup-logo.png"
					alt="duggup logo"
					class="aspect-square w-12 rounded-full"
				/>
				<span class="text-lg font-bold text-black">Duggup</span>
				<span>San Francisco Bay Area</span>
				<span class="mt-1">Joined</span>
				<span>Nov 2023</span>
			</div>
			<div class="absolute right-0 top-0 translate-x-[calc(50%+2px)] bg-white">
				<ChevronUp color="#4d4d4d" />
			</div>
			<div
				class="top absolute right-0 top-1/2 aspect-square w-6 -translate-y-1/2 translate-x-[calc(50%+2px)] rounded-full border-8 border-[#0066FF] bg-white"
			></div>
		</div>
		<div class="m-6 ml-8 flex flex-col items-start justify-center">
			<h3 class="text-xl font-bold">Co-Founder and CEO</h3>
			<div class="flex items-center text-[#4d4d4d]">
				Full Time
				<div class="mx-2 h-1 w-1 rounded-full bg-stone-400"></div>
				Remote
			</div>
		</div>
	</div>
</section>
