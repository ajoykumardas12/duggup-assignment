<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import '../app.pcss';
</script>

<Navbar />
<Separator />
<main class="px-8 py-2">
	<slot />
</main>
