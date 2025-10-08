// Timeline data configuration file
// Used to manage data for the timeline page

export interface TimelineItem {
	id: string;
	title: string;
	description: string;
	type: "education" | "work" | "project" | "achievement";
	startDate: string;
	endDate?: string; // If empty, it means current
	location?: string;
	organization?: string;
	position?: string;
	skills?: string[];
	achievements?: string[];
	links?: {
		name: string;
		url: string;
		type: "website" | "certificate" | "project" | "other";
	}[];
	icon?: string; // Iconify icon name
	color?: string;
	featured?: boolean;
}

export const timelineData: TimelineItem[] = [
	{
		id: "current-study",
		title: "Studying Information Technology",
		description:
			"Currently studying Information Technology, prioritizing networking principles and obtaining my Net+ alongside my Associates.",
		type: "education",
		startDate: "2024-06-01",
		location: "Florida",
		organization: "Kesier University",
		skills: ["Networking", "Python", "IT Foundation", "HTML/CSS", "MySQL", "Linux", "Cloud Computing"],
		achievements: [
			"Current GPA: 3.5/4.0",
			"Invited to join Phi Theta Kappa Honor Society",
			"Participated in multiple volunteering activities to establish tech labs in school.",
			"Taught my fellow classmates python basics and coding logic",
		],
		icon: "material-symbols:school",
		color: "#059669",
		featured: true,
	},
	{
		id: "mizuki-blog-project",
		title: "Mizuki Personal Blog Project",
		description:
			"A personal blog website developed using the Astro framework as a practical project for learning frontend technologies.",
		type: "project",
		startDate: "10/4/2025",
		endDate: "10/7/2025",
		skills: ["Astro", "TypeScript", "Tailwind CSS", "Git"],
		achievements: [
			"Learned responsive design and user experience optimization",
			"Completed the full process from design to deployment",
		],
		links: [
			{
				name: "GitHub Repository",
				url: "https://github.com/example/mizuki-blog",
				type: "project",
			},
			{
				name: "Live Demo",
				url: "https://mizuki-demo.example.com",
				type: "website",
			},
		],
		icon: "material-symbols:code",
		color: "#7C3AED",
		featured: true,
	},
	{
		id: "part-time-tutor",
		title: "Tutor to friends",
		description:
			"Provided programming tutoring for python, as well as helping others find their path in life.",
		type: "work",
		startDate: "01/01/2023",
		endDate: "10/7/2025",
		position: "Programming Tutor",
		skills: ["Python", "Teaching", "Communication"],
		achievements: [
			"Helped a friend undestand basic python concepts and complete simple projects",
			"Improved expression and communication skills amongst people with a different first language",
			"Gained teaching experience",
			"Taught others how to find their passion and career path",
			"Taught others basic cybersecurity and computer skills",
		],
		icon: "material-symbols:school",
		color: "#059669",
	},
	{
		id: "high-school-graduation",
		title: "FLYCA Graduation",
		description:
			"Graduated from FLYCA with my GED.",
		type: "education",
		startDate: "06/01/2018",
		endDate: "12/01/2018",
		location: "Starke, Florida",
		organization: "empower at-risk youth to become successful adults",
		achievements: [
			"Apart of the Color Guard team",
		],
		icon: "material-symbols:school",
		color: "#2563EB",
	},
	{
		id: "first-programming-experience",
		title: "First Programming Experience",
		description:
			"First encountered programming in university IT class, started learning Python basic syntax.",
		type: "education",
		startDate: "10/01/2024",
		skills: ["Python", "Basic Programming Concepts"],
		achievements: [
			'Completed first "Hello World" program',
			"Learned basic loops and conditional statements",
			"Developed interest in programming",
			"Developed basic games: RPS, Black Jack, choose your own adventure game.",
			"Caesar Cipher project",
			"base64 encoding/decoding project for password obfuscation",
			"Simulated a coffee vending machine and its monetary transactions to dispense coffee.",
		],
		icon: "material-symbols:code",
		color: "#7C3AED",
	},

];

// Get timeline statistics
export const getTimelineStats = () => {
	const total = timelineData.length;
	const byType = {
		education: timelineData.filter((item) => item.type === "education").length,
		work: timelineData.filter((item) => item.type === "work").length,
		project: timelineData.filter((item) => item.type === "project").length,
		achievement: timelineData.filter((item) => item.type === "achievement")
			.length,
	};

	return { total, byType };
};

// Get timeline items by type
export const getTimelineByType = (type?: string) => {
	if (!type || type === "all") {
		return timelineData.sort(
			(a, b) =>
				new Date(b.startDate).getTime() - new Date(a.startDate).getTime(),
		);
	}
	return timelineData
		.filter((item) => item.type === type)
		.sort(
			(a, b) =>
				new Date(b.startDate).getTime() - new Date(a.startDate).getTime(),
		);
};

// Get featured timeline items
export const getFeaturedTimeline = () => {
	return timelineData
		.filter((item) => item.featured)
		.sort(
			(a, b) =>
				new Date(b.startDate).getTime() - new Date(a.startDate).getTime(),
		);
};

// Get current ongoing items
export const getCurrentItems = () => {
	return timelineData.filter((item) => !item.endDate);
};

// Calculate total work experience
export const getTotalWorkExperience = () => {
	const workItems = timelineData.filter((item) => item.type === "work");
	let totalMonths = 0;

	workItems.forEach((item) => {
		const startDate = new Date(item.startDate);
		const endDate = item.endDate ? new Date(item.endDate) : new Date();
		const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
		const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30));
		totalMonths += diffMonths;
	});

	return {
		years: Math.floor(totalMonths / 12),
		months: totalMonths % 12,
	};
};
