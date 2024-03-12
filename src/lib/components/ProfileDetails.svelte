<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar';
	import { Ellipsis, ExternalLink } from 'lucide-svelte';
	import CtaButton from './CTAButton.svelte';
</script>

<section class="mx-[13%] mb-4 mt-12 flex items-center gap-10">
	<div class="flex flex-col items-center text-center">
		<Avatar.Root class="h-[7.5rem] w-[7.5rem] border-4 border-stone-200">
			<Avatar.Image src="profile-image.png" alt="Profile" />
			<Avatar.Fallback>KK</Avatar.Fallback>
		</Avatar.Root>
		<h1 class="text-grayish-blue text-2xl font-bold">Krishna Kiran</h1>
	</div>
	<div class="flex h-max">
		<div class="flex flex-col justify-between">
			<p>
				Co-Founder and CEO at Duggup - Social network for people in tech. Ex-Amazon Head of
				Engineering. I write hot-takes on building a business, shipping delightful products and
				accelerating product and career growth.
			</p>
			<CtaButton text="Follow" />
		</div>
		<div class="flex flex-col">
			<div class="flex flex-col items-end gap-0.5">
				<img src="icons/duggup-logo.png" alt="duggup" class="w-8 rounded-full" />
				<span class="text-base font-semibold">Duggup</span>
				<span class="text-gray text-nowrap text-xs font-semibold"> Co-Founder and CEO </span>
			</div>
			<div class="text-neutral mt-4 flex items-center gap-4 text-nowrap">
				<!-- svelte-ignore a11y-invalid-attribute -->
				<a href="#" class="flex gap-1">
					<span class="text-sm">My Website</span>
					<ExternalLink size={16} />
				</a>
				<button>
					<Ellipsis size={22} class="hocus:text-brand" />
				</button>
			</div>
		</div>
	</div>
</section>
