export interface JobDate {
	from: string;
	to: string;
}

export interface Tech {
	url: string;
	title: string;
	className: string;
}

export interface Job {
	jobTitle: string;
	jobId: string;
	companyName: string;
	jobDates: JobDate;
	jobDuties: string;
	techStack: string[];
}
