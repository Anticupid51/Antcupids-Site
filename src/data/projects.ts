// Project data configuration file
// Used to manage data for the project display page

export interface Project {
	id: string;
	title: string;
	description: string;
	image: string;
	category: "web" | "mobile" | "desktop" | "other";
	techStack: string[];
	status: "completed" | "in-progress" | "planned";
	liveDemo?: string;
	sourceCode?: string;
	startDate: string;
	endDate?: string;
	featured?: boolean;
	tags?: string[];
}

export const projectsData: Project[] = [
	{
		id: "mizuki-blog",
		title: "Mizuki Blog Theme",
		description:
			"Modern blog theme developed based on the Astro framework, supporting multilingual, dark mode, and responsive design features.",
		image: "",
		category: "web",
		techStack: ["Astro", "TypeScript", "Tailwind CSS", "Svelte"],
		status: "completed",
		liveDemo: "https://blog.example.com",
		sourceCode: "https://github.com/example/mizuki",
		startDate: "10/4/2025",
		endDate: "10/7/2025",
		featured: true,
		tags: ["Blog", "Theme", "Open Source"],
	},
	{
		id: "portfolio-website",
		title: "Personal Portfolio",
		description:
			"Personal portfolio website showcasing project experience and technical skills.",
		image: "",
		category: "web",
		techStack: ["React", "Next.js", "TypeScript", "Framer Motion"],
		status: "completed",
		liveDemo: "https://portfolio.example.com",
		sourceCode: "https://github.com/example/portfolio",
		startDate: "10/4/2025",
		endDate: "10/7/2025",
		featured: true,
		tags: ["Portfolio", "React", "Animation"],
	},
	{
		id: "NAS",
		title: "NAS",
		description:
			"Dedicated NAS solution for home.",
		image: "",
		category: "other",
		techStack: ["Hardware", "Software", "Network Protocols",],
		status: "in-progress",
		startDate: "10/7/2025",
		tags: ["Other", "Productivity", "Physical"],
	},
	{
		id: "data-visualization-tool",
		title: "Data Visualization Tool",
		description:
			"Data visualization tool supporting multiple chart types and interactive analysis.",
		image: "",
		category: "web",
		techStack: ["Vue.js", "D3.js", "TypeScript", "Node.js"],
		status: "completed",
		liveDemo: "https://dataviz.example.com",
		startDate: "10/4/2025",
		endDate: "10/7/2025",
		tags: ["Data Visualization", "Analytics", "Charts"],
	},
];

// Get project statistics
export const getProjectStats = () => {
	const total = projectsData.length;
	const completed = projectsData.filter((p) => p.status === "completed").length;
	const inProgress = projectsData.filter(
		(p) => p.status === "in-progress",
	).length;
	const planned = projectsData.filter((p) => p.status === "planned").length;

	return {
		total,
		byStatus: {
			completed,
			inProgress,
			planned,
		},
	};
};

// Get projects by category
export const getProjectsByCategory = (category?: string) => {
	if (!category || category === "all") {
		return projectsData;
	}
	return projectsData.filter((p) => p.category === category);
};

// Get featured projects
export const getFeaturedProjects = () => {
	return projectsData.filter((p) => p.featured);
};

// Get all tech stacks
export const getAllTechStack = () => {
	const techSet = new Set<string>();
	projectsData.forEach((project) => {
		project.techStack.forEach((tech) => techSet.add(tech));
	});
	return Array.from(techSet).sort();
};
