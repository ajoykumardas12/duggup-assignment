<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar';
	import { Button } from '$lib/components/ui/button';
	import { Ellipsis, ExternalLink } from 'lucide-svelte';
</script>

<section>
	<div>
		<Avatar.Root>
			<Avatar.Image src="profile-image.png" alt="Profile" />
			<Avatar.Fallback>KK</Avatar.Fallback>
		</Avatar.Root>
		<h1>Krishna Kiran</h1>
	</div>
	<div>
		<div>
			<p>
				Co-Founder and CEO at Duggup - Social network for people in tech. Ex-Amazon Head of
				Engineering. I write hot-takes on building a business, shipping delightful products and
				accelerating product and career growth.
			</p>
			<Button>Follow</Button>
		</div>
		<div>
			<div>
				<img src="icons/duggup-logo.png" alt="duggup" />
				<span>Duggup</span>
			</div>
			<span> Co-Founder and CEO </span>
			<div>
				<!-- svelte-ignore a11y-invalid-attribute -->
				<a href="#">
					<span>My Website</span>
					<ExternalLink />
				</a>
				<Ellipsis />
			</div>
		</div>
	</div>
</section>
