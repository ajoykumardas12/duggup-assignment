<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar';
	import { ChevronDown } from 'svelte-radix';

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
		},
		{
			name: 'Post',
			icon: 'icons/plus-square.svg'
		}
	];
</script>

<nav>
	<div>
		<img src="/icons/duggup-logo.png" alt="duggup logo" />
		<span>duggup</span>
	</div>
	<ul>
		{#each navItems as navItem}
			<li>
				<span>
					<img src={navItem.icon} alt={navItem.name} />
				</span>
				<span>{navItem.name}</span>
			</li>
		{/each}
	</ul>
	<div>
		<span>
			<Avatar.Root>
				<Avatar.Image src="/profile-image.png" alt="profile image" />
				<Avatar.Fallback>KK</Avatar.Fallback>
			</Avatar.Root>
		</span>
		<span>Krishna Kiran</span>
		<ChevronDown />
	</div>
</nav>
