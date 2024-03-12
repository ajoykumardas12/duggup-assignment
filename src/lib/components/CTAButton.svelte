<script lang="ts">
	import { Button } from '$lib/components/ui/button';

	export let text: string;
</script>

<Button
	variant="outline"
	class="w-max border-[1px] border-b-4 border-neutral hover:border-x-transparent hocus:border-b-2 hocus:border-b-neutral hocus:border-t-transparent hocus:bg-brand hocus:text-white"
>
	{text}
</Button>
