<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar';
	import { Ellipsis, ExternalLink } from 'lucide-svelte';
	import CtaButton from './CTAButton.svelte';
	import { userDetails } from '$lib/store/user';
	import { getNameInitials } from '$lib/helper/getNameInitials';

	const nameInitials = getNameInitials(userDetails.firstName, userDetails.lastName);
</script>

<section class="mx-0 mb-4 mt-12 flex flex-col items-center gap-10 md:flex-row lg:mx-[13%]">
	<div class="flex flex-col items-center text-center">
		<Avatar.Root class="h-[7.5rem] w-[7.5rem] border-4 border-stone-200">
			<Avatar.Image src={userDetails.imgSrc} alt="Profile" />
			<Avatar.Fallback>{nameInitials}</Avatar.Fallback>
		</Avatar.Root>
		<h1 class="text-grayish-blue text-2xl font-bold">
			{`${userDetails.firstName} ${userDetails.lastName}`}
		</h1>
	</div>
	<div class="flex h-max flex-col gap-4 sm:flex-row sm:gap-0">
		<div class="flex flex-col items-center justify-between gap-2 md:items-start">
			<p>
				{userDetails.bio}
			</p>
			<CtaButton text="Follow" />
		</div>
		<div class="flex justify-around md:flex-col">
			<div class="flex flex-col items-center gap-0.5 md:items-end">
				<img src="icons/duggup-logo.png" alt="duggup" class="w-8 rounded-full" />
				<span class="text-base font-semibold">{userDetails.company}</span>
				<span class="text-gray text-nowrap text-xs font-semibold">{userDetails.position}</span>
			</div>
			<div class="text-neutral mt-4 flex flex-col items-center gap-4 text-nowrap md:flex-row">
				<a href={userDetails.website} class="flex gap-1">
					<span class="text-sm">My Website</span>
					<ExternalLink size={16} />
				</a>
				<button class="hocus:text-brand flex items-center gap-1">
					<span>Options</span>
					<Ellipsis size={22} />
				</button>
			</div>
		</div>
	</div>
</section>
