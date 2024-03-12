<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar';
	import { ChevronDown } from 'svelte-radix';
	import { Button } from '$lib/components/ui/button';
	import { getNameInitials } from '$lib/helper/getNameInitials';
	import { userDetails } from '$lib/store/user';

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

	const nameInitials = getNameInitials(userDetails.firstName, userDetails.lastName);
</script>

<nav class="flex px-4 py-3 font-semibold">
	<a class="flex items-center gap-1" href="/">
		<img src="/icons/site-logo.png" alt="duggup logo" class="w-7" />
		<span class="mb-1 text-xl">duggup</span>
	</a>
	<ul class="ml-auto flex items-center gap-2 text-sm text-neutral">
		{#each navItems as navItem}
			<li>
				<!-- svelte-ignore a11y-invalid-attribute -->
				<a
					href="#"
					class="flex items-center gap-2 rounded-md px-3 py-2 hocus:bg-stone-200 hocus:text-brand"
				>
					<img src={navItem.icon} alt={navItem.name} class="w-5" />
					<span>{navItem.name}</span>
				</a>
			</li>
		{/each}
		<Button href="#" variant="outline" class="border-[1px] border-b-4 border-neutral">
			<img src="icons/plus-square.svg" alt="Post" class="w-5" />
			<span>Post</span>
		</Button>
	</ul>
	<button class="ml-8 flex cursor-pointer items-center gap-2 text-base text-neutral">
		<span>
			<Avatar.Root class="border border-stone-400">
				<Avatar.Image src={userDetails.imgSrc} alt="profile image" />
				<Avatar.Fallback>{nameInitials}</Avatar.Fallback>
			</Avatar.Root>
		</span>
		<span>Krishna Kiran</span>
		<ChevronDown size={16} />
	</button>
</nav>
