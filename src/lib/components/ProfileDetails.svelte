<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar';
	import { Ellipsis, ExternalLink } from 'lucide-svelte';
	import CtaButton from './CTAButton.svelte';
	import { userDetails } from '$lib/store/user';
	import { getNameInitials } from '$lib/helper/getNameInitials';

	const nameInitials = getNameInitials(userDetails.firstName, userDetails.lastName);
</script>

<section class="mx-[13%] mb-4 mt-12 flex items-center gap-10">
	<div class="flex flex-col items-center text-center">
		<Avatar.Root class="h-[7.5rem] w-[7.5rem] border-4 border-stone-200">
			<Avatar.Image src={userDetails.imgSrc} alt="Profile" />
			<Avatar.Fallback>{nameInitials}</Avatar.Fallback>
		</Avatar.Root>
		<h1 class="text-2xl font-bold text-grayish-blue">
			{`${userDetails.firstName} ${userDetails.lastName}`}
		</h1>
	</div>
	<div class="flex h-max">
		<div class="flex flex-col justify-between">
			<p>
				{userDetails.bio}
			</p>
			<CtaButton text="Follow" />
		</div>
		<div class="flex flex-col">
			<div class="flex flex-col items-end gap-0.5">
				<img src="icons/duggup-logo.png" alt="duggup" class="w-8 rounded-full" />
				<span class="text-base font-semibold">{userDetails.company}</span>
				<span class="text-nowrap text-xs font-semibold text-gray">{userDetails.position}</span>
			</div>
			<div class="mt-4 flex items-center gap-4 text-nowrap text-neutral">
				<!-- svelte-ignore a11y-invalid-attribute -->
				<a href={userDetails.website} class="flex gap-1">
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
