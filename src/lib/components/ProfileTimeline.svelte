<script lang="ts">
	import { timelineDetails } from '$lib/store/timeline';
	import TimelineJobUpdate from './TimelineJobUpdate.svelte';
	import TimelineArticles from './TimelineArticles.svelte';
</script>

<section class="flex flex-col">
	{#each timelineDetails as timelineDetail}
		{#if timelineDetail.detailType === 'articles'}
			<TimelineArticles
				date={timelineDetail.details.date}
				articles={timelineDetail.details.articles}
			/>
		{:else if timelineDetail.detailType === 'job-update'}
			<TimelineJobUpdate props={timelineDetail.details} />
		{/if}
	{/each}
</section>
