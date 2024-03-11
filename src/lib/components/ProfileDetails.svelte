<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar';
	import { Button } from '$lib/components/ui/button';
	import { Ellipsis, ExternalLink } from 'lucide-svelte';
</script>

<section class="mb-4 mt-12 flex items-center gap-10">
	<div class="flex flex-col items-center text-center">
		<Avatar.Root class="h-[7.5rem] w-[7.5rem] border-4 border-stone-200">
			<Avatar.Image src="profile-image.png" alt="Profile" />
			<Avatar.Fallback>KK</Avatar.Fallback>
		</Avatar.Root>
		<h1 class="text-2xl font-bold text-[#4B5C6D]">Krishna Kiran</h1>
	</div>
	<div class="flex h-max">
		<div class="flex flex-col justify-between">
			<p>
				Co-Founder and CEO at Duggup - Social network for people in tech. Ex-Amazon Head of
				Engineering. I write hot-takes on building a business, shipping delightful products and
				accelerating product and career growth.
			</p>
			<Button
				variant="outline"
				class="w-max border-[1px] border-b-4 border-[#4d4d4d] hover:border-transparent hover:border-b-[#4d4d4d] hover:bg-[#0066FF] hover:text-white"
				>Follow</Button
			>
		</div>
		<div class="flex flex-col">
			<div class="flex flex-col items-end gap-0.5">
				<img src="icons/duggup-logo.png" alt="duggup" class="w-8" />
				<span class="text-base font-semibold">Duggup</span>
				<span class="text-nowrap text-xs font-semibold text-[#4d4d4d]"> Co-Founder and CEO </span>
			</div>
			<div class="mt-4 flex items-center gap-4 text-nowrap text-[#4d4d4d]">
				<!-- svelte-ignore a11y-invalid-attribute -->
				<a href="#" class="flex gap-1">
					<span class="text-sm">My Website</span>
					<ExternalLink size={16} color="#4d4d4d" />
				</a>
				<Ellipsis color="#4d4d4d" size={22} class="cursor-pointer " />
			</div>
		</div>
	</div>
</section>
