<script lang="ts">
	import { Button } from '$lib/components/ui/button';

	export let text: string;
</script>

<Button
	variant="outline"
	class="border-neutral hocus:border-b-2 hocus:border-b-neutral hocus:border-t-transparent hocus:bg-brand hocus:text-white w-max border-[1px] border-b-4 hover:border-x-transparent"
>
	{text}
</Button>
