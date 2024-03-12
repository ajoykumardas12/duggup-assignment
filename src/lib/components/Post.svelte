<script lang="ts">
	export let imgSrc: string;
	export let summary: string;
</script>

<!-- svelte-ignore a11y-invalid-attribute -->
<a
	href="#"
	class="border-1 border-gray/50 w-80 cursor-pointer overflow-hidden rounded-2xl border-[1px] transition hocus:border-gray hocus:bg-stone-100 hocus:text-inherit"
>
	<img src={imgSrc} alt="post thumbnail" class="h-40 w-full object-cover" />
	<div class="px-4 py-6">
		<p class="line-clamp-2">{summary}</p>
	</div>
</a>
