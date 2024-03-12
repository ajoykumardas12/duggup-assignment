<script lang="ts">
	export let imgSrc: string;
	export let summary: string;
</script>

<!-- svelte-ignore a11y-invalid-attribute -->
<a
	href="#"
	class="border-1 border-gray/50 hocus:border-gray hocus:bg-stone-100 hocus:text-inherit xs:w-56 w-52 cursor-pointer overflow-hidden rounded-2xl border-[1px] transition sm:w-80"
>
	<img src={imgSrc} alt="post thumbnail" class="xs:h-32 h-24 w-full object-cover sm:h-40" />
	<div class="px-4 py-6">
		<p class="line-clamp-2">{summary}</p>
	</div>
</a>
