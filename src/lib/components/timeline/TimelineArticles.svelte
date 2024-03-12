<script lang="ts">
	import Post from './Post.svelte';
	import type { Article } from '$lib/types/timeline';

	export let date: string;
	export let articles: Article[];
</script>

<div class="flex justify-stretch">
	<div
		class="border-light-grayish-blue timeline-left-width relative box-border flex items-center justify-end border-r-4 border-dotted"
	>
		<div class="p-4 pr-6 font-semibold text-gray">{date}</div>
		<div
			class="top absolute right-0 top-1/2 aspect-square w-4 -translate-y-1/2 translate-x-[calc(50%+2px)] rounded-full border-[3px] border-brand bg-secondary"
		></div>
	</div>
	<div class="m-6 ml-8 flex flex-wrap gap-10">
		{#each articles as article}
			<Post imgSrc={article.imgSrc} summary={article.summary} />
		{/each}
	</div>
</div>
