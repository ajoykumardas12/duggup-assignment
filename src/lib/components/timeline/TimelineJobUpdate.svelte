<script lang="ts">
	import type { JobDetails } from '$lib/types/timeline';
	import { ChevronUp } from 'svelte-radix';

	export let props: JobDetails;
</script>

<div class="flex justify-stretch">
	<div
		class="border-light-grayish-blue timeline-left-width relative border-r-4 border-dotted text-gray"
	>
		<div class="flex flex-col items-end p-6 pl-4 text-right text-base">
			<img src={props.company.imgSrc} alt="duggup logo" class="aspect-square w-12 rounded-full" />
			<span class="text-lg font-bold text-primary">{props.company.name}</span>
			<span>{props.location}</span>
			<span class="mt-1">Joined</span>
			<span>{props.date}</span>
		</div>
		<div class="absolute right-0 top-0 translate-x-[calc(50%+2px)] bg-background">
			<ChevronUp />
		</div>
		<div
			class="top absolute right-0 top-1/2 aspect-square w-6 -translate-y-1/2 translate-x-[calc(50%+2px)] rounded-full border-8 border-brand bg-background"
		></div>
	</div>
	<div class="m-6 ml-8 flex flex-col items-start justify-center">
		<h3 class="text-xl font-bold">{props.position}</h3>
		<div class="flex items-center text-gray">
			{props.type}
			{#if props.commute}
				<div class="mx-2 h-1 w-1 rounded-full bg-neutral"></div>
				{props.commute}
			{/if}
		</div>
	</div>
</div>
