// Skill data configuration file
// Used to manage data for the skill display page

export interface Skill {
	id: string;
	name: string;
	description: string;
	icon: string; // Iconify icon name
	category: "frontend" | "backend" | "database" | "tools" | "other";
	level: "beginner" | "intermediate" | "advanced" | "expert";
	experience: {
		years: number;
		months: number;
	};
	projects?: string[]; // Related project IDs
	certifications?: string[];
	color?: string; // Skill card theme color
}

export const skillsData: Skill[] = [
	// Frontend Skills
	{
		id: "astro",
		name: "Astro",
		description:
			"A modern static site generator supporting multi-framework integration and excellent performance.",
		icon: "logos:astro-icon",
		category: "frontend",
		level: "beginner",
		experience: { years: 0, months: 2 },
		projects: ["mizuki-blog"],
		color: "#FF5D01",
	},


	// Backend Skills
	{
		id: "nodejs",
		name: "Node.js",
		description:
			"A JavaScript runtime based on Chrome V8 engine, used for server-side development.",
		icon: "logos:nodejs-icon",
		category: "backend",
		level: "beginner",
		experience: { years: 0, months: 1 },
		projects: ["data-visualization-tool", "e-commerce-platform"],
		color: "#339933",
	},
	{
		id: "python",
		name: "Python",
		description:
			"A general-purpose programming language suitable for web development, data analysis, machine learning, and automation.",
		icon: "logos:python",
		category: "backend",
		level: "intermediate",
		experience: { years: 1, months: 5 },
		color: "#3776AB",
	},
	{
		id: "php",
		name: "PHP",
		description:
			"A widely-used server-side scripting language, particularly suitable for web development.",
		icon: "logos:php",
		category: "backend",
		level: "beginner",
		experience: { years: 0, months: 6 },
		projects: ["Shells",],
		color: "#777BB4",
	},
	
	// Database Skills
	{
		id: "mysql",
		name: "MySQL",
		description:
			"The world's most popular open-source relational database management system, widely used in web applications.",
		icon: "logos:mysql-icon",
		category: "database",
		level: "beginner",
		experience: { years: 0, months: 8 },
		projects: ["Raspberry Pi simulation", "SQLI Injection Testing"],
		color: "#4479A1",
	},


	// Tools
	{
		id: "git",
		name: "Git",
		description:
			"A distributed version control system, an essential tool for code management and team collaboration.",
		icon: "logos:git-icon",
		category: "tools",
		level: "beginner",
		experience: { years: 0, months: 5 },
		color: "#F05032",
	},
	{
		id: "vscode",
		name: "VS Code",
		description:
			"A lightweight but powerful code editor with a rich plugin ecosystem.",
		icon: "logos:visual-studio-code",
		category: "tools",
		level: "beginner",
		experience: { years: 0, months: 5 },
		color: "#007ACC",
	},
	{
		id: "pycharm",
		name: "PyCharm",
		description:
			"A professional Python IDE by JetBrains providing intelligent code analysis and debugging features.",
		icon: "logos:pycharm",
		category: "tools",
		level: "intermediate",
		experience: { years: 1, months: 4 },
		projects: ["python-web-app", "data-analysis"],
		color: "#21D789",
	},
	{
		id: "docker",
		name: "Docker",
		description:
			"A containerization platform that simplifies application deployment and environment management.",
		icon: "logos:docker-icon",
		category: "tools",
		level: "beginner",
		experience: { years: 1, months: 0 },
		color: "#2496ED",
	},
	{
		id: "apache",
		name: "Apache HTTP Server",
		description:
			"The world's most popular web server software, a stable and reliable HTTP server.",
		icon: "logos:apache",
		category: "tools",
		level: "beginner",
		experience: { years: 1, months: 6 },
		projects: ["traditional-web-server", "php-hosting"],
		color: "#D22128",
	},
	{
		id: "linux",
		name: "Linux",
		description:
			"An open-source operating system, the preferred choice for server deployment and development environments.",
		icon: "logos:linux-tux",
		category: "tools",
		level: "intermediate",
		experience: { years: 1, months: 5 },
		projects: ["server-management", "shell-scripting"],
		color: "#FCC624",
	},
	{
		id: "postman",
		name: "Postman",
		description:
			"An API development and testing tool that simplifies API design, testing, and documentation.",
		icon: "logos:postman-icon",
		category: "tools",
		level: "beginner",
		experience: { years: 0, months: 6 },
		projects: ["api-testing", "api-documentation"],
		color: "#FF6C37",
	},
	

	// Other Skills

];

// Get skill statistics
export const getSkillStats = () => {
	const total = skillsData.length;
	const byLevel = {
		beginner: skillsData.filter((s) => s.level === "beginner").length,
		intermediate: skillsData.filter((s) => s.level === "intermediate").length,
		advanced: skillsData.filter((s) => s.level === "advanced").length,
		expert: skillsData.filter((s) => s.level === "expert").length,
	};
	const byCategory = {
		frontend: skillsData.filter((s) => s.category === "frontend").length,
		backend: skillsData.filter((s) => s.category === "backend").length,
		database: skillsData.filter((s) => s.category === "database").length,
		tools: skillsData.filter((s) => s.category === "tools").length,
		other: skillsData.filter((s) => s.category === "other").length,
	};

	return { total, byLevel, byCategory };
};

// Get skills by category
export const getSkillsByCategory = (category?: string) => {
	if (!category || category === "all") {
		return skillsData;
	}
	return skillsData.filter((s) => s.category === category);
};

// Get advanced skills
export const getAdvancedSkills = () => {
	return skillsData.filter(
		(s) => s.level === "advanced" || s.level === "expert",
	);
};

// Calculate total years of experience
export const getTotalExperience = () => {
	const totalMonths = skillsData.reduce((total, skill) => {
		return total + skill.experience.years * 12 + skill.experience.months;
	}, 0);
	return {
		years: Math.floor(totalMonths / 12),
		months: totalMonths % 12,
	};
};
