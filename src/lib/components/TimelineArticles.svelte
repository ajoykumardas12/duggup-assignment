<script lang="ts">
	import Post from './Post.svelte';
	import type { Article } from '$lib/types/timeline';

	export let date: string;
	export let articles: Article[];
</script>

<div class="flex justify-stretch">
	<div
		class="border-light-grayish-blue relative box-border flex w-[18%] items-center justify-end border-r-4 border-dotted"
	>
		<div class="text-gray p-4 pr-6 font-semibold">{date}</div>
		<div
			class="top border-brand absolute right-0 top-1/2 aspect-square w-4 -translate-y-1/2 translate-x-[calc(50%+2px)] rounded-full border-[3px] bg-secondary"
		></div>
	</div>
	<div class="m-6 ml-8 flex gap-10">
		{#each articles as article}
			<Post imgSrc={article.imgSrc} summary={article.summary} />
		{/each}
	</div>
</div>
