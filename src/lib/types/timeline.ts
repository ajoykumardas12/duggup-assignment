type Article = {
	imgSrc: string;
	summary: string;
};

type Company = {
	name: string;
	imgSrc: string;
};

type JobUpdateDetails = {
	detailType: 'job-update';
	details: {
		date: string;
		company: Company;
		location: string;
		position: string;
		type: string;
		commute?: string;
	};
};

type ArticleDetails = {
	detailType: 'articles';
	details: {
		date: string;
		articles: Article[];
	};
};

export type TimelineDetail = JobUpdateDetails | ArticleDetails;
