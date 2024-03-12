import type { TimelineDetail } from '$lib/types/timeline';

export const timelineDetails: TimelineDetail[] = [
	{
		detailType: 'articles',
		details: {
			date: 'Dec 2023',
			articles: [
				{
					imgSrc: '/posts/post-1.png',
					summary: 'No amount of technology can convert a bad story into a good story.'
				},
				{
					imgSrc: '/posts/post-2.png',
					summary: `Most people don't have original ideas. Here is how Sam Altman pushes himself to have unpopular ideas.`
				}
			]
		}
	},
	{
		detailType: 'job-update',
		details: {
			date: 'Nov 2023',
			company: {
				name: 'Duggup',
				imgSrc: 'icons/duggup-logo.png'
			},
			location: 'San Francisco Bay Area',
			position: 'Co-Founder and CEO',
			type: 'Full-time',
			commute: 'Remote'
		}
	},
	{
		detailType: 'articles',
		details: {
			date: 'Mar 2023',
			articles: [
				{
					imgSrc: '/posts/post-3.png',
					summary: `Startup Lesson I am reflecting. Don't build for the "average person".`
				},
				{
					imgSrc: '/posts/post-4.png',
					summary: 'Your biggest regrets at 80 will be acts of omission.'
				}
			]
		}
	},
	{
		detailType: 'job-update',
		details: {
			date: 'Sep 2022',
			company: {
				name: 'BetterUp',
				imgSrc: 'icons/betterup-logo.png'
			},
			location: 'San Francisco Bay Area',
			position: 'VP Engineering',
			type: 'Full-time'
		}
	}
];
