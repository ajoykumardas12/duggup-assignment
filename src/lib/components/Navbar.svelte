<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar';
	import { ChevronDown } from 'svelte-radix';
	import { Button } from '$lib/components/ui/button';

	const navItems = [
		{
			name: 'Home',
			icon: 'icons/home.svg'
		},
		{
			name: 'Explore',
			icon: 'icons/explore.svg'
		},
		{
			name: 'Learn',
			icon: 'icons/book.svg'
		}
	];
</script>

<nav class="flex px-4 py-3">
	<div class="flex items-center gap-1">
		<img src="/icons/site-logo.png" alt="duggup logo" class="w-7" />
		<span class="mb-1 text-xl font-semibold">duggup</span>
	</div>
	<ul class="ml-auto flex items-center gap-6 text-sm">
		{#each navItems as navItem}
			<li>
				<!-- svelte-ignore a11y-invalid-attribute -->
				<a href="#" class="flex items-center gap-2">
					<img src={navItem.icon} alt={navItem.name} class="w-5" />
					<span>{navItem.name}</span>
				</a>
			</li>
		{/each}
		<Button href="#" variant="outline" class="border-[1px] border-b-4 border-[#4d4d4d]">
			<img src="icons/plus-square.svg" alt="Post" class="w-5" />
			<span>Post</span>
		</Button>
	</ul>
	<div class="ml-8 flex cursor-pointer items-center gap-2 text-sm">
		<span>
			<Avatar.Root class="border border-stone-400">
				<Avatar.Image src="/profile-image.png" alt="profile image" />
				<Avatar.Fallback>KK</Avatar.Fallback>
			</Avatar.Root>
		</span>
		<span>Krishna Kiran</span>
		<ChevronDown size={16} />
	</div>
</nav>
