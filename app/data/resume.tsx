import { Icons } from "@/components/icons";

export const DATA = {
    name: "Yash Prakash",
    initials: "YP",
    url: "https://yashprakash.vercel.app",
    location: "India",
    locationLink: "https://www.google.com/maps/place/India",
    description:
        "Full-Stack Software Engineer with 2+ years of experience building scalable, customer-facing web applications and production-ready software solutions.",
    summary:
        "Full-Stack Software Engineer with 2+ years of experience building scalable, customer-facing web applications and production-ready software solutions. Expertise in JavaScript, React.js, Node.js, API development, cloud platforms (AWS/GCP), and responsive web design. Proven track record in Agile development, cross-functional team collaboration, performance optimization, and implementing CI/CD pipelines.",
    avatarUrl: "/me.jpg",
    skills: [
        "JavaScript (ES6+)",
        "TypeScript",
        "Python",
        "HTML5",
        "CSS3",
        "SQL",
        "Node.js",
        "React.js",
        "Next.js",
        "Vue.js",
        "Express.js",
        "GraphQL",
        "AWS (EC2, S3, Lambda)",
        "Google Cloud Platform (GCP)",
        "Docker",
        "CI/CD",
        "GitHub Actions",
        "PostgreSQL",
        "MongoDB",
        "Redis",
        "Figma",
    ],
    contact: {
        email: "yashprakash07@gmail.com",
        tel: "+91 9319153464",
        social: {
            GitHub: {
                name: "GitHub",
                url: "https://github.com/yashprakash07",
                icon: Icons.github,
                navbar: true,
            },
            LinkedIn: {
                name: "LinkedIn",
                url: "https://linkedin.com/in/yashprakash07",
                icon: Icons.linkedin,
                navbar: true,
            },
            X: {
                name: "X",
                url: "https://x.com/Ok_anxiety",
                icon: Icons.x,
                navbar: true,
            },
            email: {
                name: "Send Email",
                url: "mailto:yashprakash07@gmail.com",
                icon: Icons.email,
                navbar: false,
            },
        },
    },
    work: [
        {
            company: "Freelance Full-Stack Developer",
            href: "",
            badges: [],
            location: "Remote",
            title: "Self-Employed",
            logoUrl: "/freelance.png",
            start: "Aug 2025",
            end: "Present",
            description:
                "Deliver custom, responsive web applications for multiple clients across diverse industries using React.js, Next.js, Node.js, and cloud deployment strategies. Collaborate with cross-functional teams and stakeholders to gather requirements, architect solutions, and ensure on-time project delivery. Implement best practices including version control, code review, automated testing, and performance optimization for production-ready applications.",
        },
        {
            company: "OPK E-Services",
            href: "https://www.opkeservices.com/",
            badges: [],
            location: "Remote",
            title: "UI Developer | Frontend Developer",
            logoUrl: "/opk.png",
            start: "Feb 2025",
            end: "May 2025",
            description:
                "Architected and developed 15+ reusable React components with comprehensive documentation, reducing development time by 30%. Engineered real-time event tracking system using WebSocket and RESTful APIs, processing 10K+ daily user interactions for analytics dashboards. Collaborated with US-based clients and cross-functional teams to translate business requirements into technical solutions, delivering 95% of features on schedule. Optimized application performance by 57% through lazy loading, code-splitting, and JavaScript performance optimization techniques.",
        },
        {
            company: "Reclame Digital",
            href: "https://www.reclamedigital.com/",
            badges: [],
            location: "Remote",
            title: "Full-Stack Software Developer",
            logoUrl: "/reclame.png",
            start: "Jul 2023",
            end: "Feb 2025",
            description:
                "Developed 20+ JavaScript automation tools and microservices processing 5K+ daily transactions with 99.9% accuracy using Node.js and Express.js. Designed and implemented RESTful APIs for real-time dashboards tracking 50+ KPIs, improving operational efficiency by 75%. Led code review sessions and resolved 100+ production issues through systematic debugging, performance monitoring, and troubleshooting workflows. Migrated legacy jQuery modules to the modern Vue.js framework, reducing technical debt by 60% and improving maintainability.",
        },
        {
            company: "Campaign Studio",
            href: "https://campaignstudio.in/",
            badges: [],
            location: "Remote",
            title: "Frontend Software Developer",
            logoUrl: "/campaign-studio.png",
            start: "Jan 2022",
            end: "Jun 2023",
            description:
                "Engineered custom, responsive UI solutions for 12+ client deployments, increasing user engagement by 35% through intuitive design. Collaborated with remote Agile teams across 3 time zones to iterate on customer requirements and deliver features in 2-week sprints. Implemented A/B testing framework and data-driven optimization strategies, improving conversion rates by 22%. Enhanced frontend performance by 50% through efficient DOM manipulation, virtual scrolling, and browser optimization techniques.",
        },
    ],
    education: [
        {
            school: "Madan Mohan Malaviya University of Technology, Gorakhpur",
            href: "http://www.mmmut.ac.in/",
            degree: "B.Tech, Computer Science and Engineering",
            logoUrl: "/mmmut.png",
            start: "Jul 2019",
            end: "May 2023",
        },
    ],
    projects: [
        {
            title: "Pastebin Lite",
            href: "https://pastebin-lite-two.vercel.app/",
            dates: "Dec 2025",
            active: true,
            description:
                "Secure Text Sharing Platform. Built production-ready pastebin application with advanced security features, including password protection, TTL expiry, and encryption. Developed a comprehensive REST API supporting 15+ programming languages with syntax highlighting.",
            technologies: ["Next.js 15", "Tailwind CSS", "Redis", "TypeScript"],
            links: [
                {
                    type: "Website",
                    href: "https://pastebin-lite-two.vercel.app/",
                    icon: Icons.globe,
                },
                {
                    type: "Source",
                    href: "https://github.com/YashPrakash07/pastebin-lite",
                    icon: Icons.github,
                },
            ],
            image: "/pastebin.png",
        },
        {
            title: "CodePlanner AI",
            href: "https://codeplanner-ai.vercel.app/",
            dates: "Dec 2024",
            active: true,
            description:
                "AI-Powered Project Management Application. Developed full-stack AI-powered application for generating comprehensive project plans and code structures. Features include AI chat interface, project history, and export capabilities.",
            technologies: ["React.js", "Node.js", "Express.js", "Tailwind CSS", "OpenAI API"],
            links: [
                {
                    type: "Website",
                    href: "https://codeplanner-ai.vercel.app/",
                    icon: Icons.globe,
                },
                {
                    type: "Source",
                    href: "https://github.com/YashPrakash07/codeplanner-ai",
                    icon: Icons.github,
                },
            ],
            image: "/codeplanner.png",
        },
        {
            title: "OneCode IDE",
            href: "https://yashprakash07.github.io/OneCode-IDE/",
            dates: "Nov 2024",
            active: true,
            description:
                "Web-based Collaborative Code Editor. Engineered a browser-based IDE with syntax highlighting, file management, and basic code execution capabilities. Features a responsive modern interface.",
            technologies: ["JavaScript", "HTML5", "CSS3", "Monaco Editor"],
            links: [
                {
                    type: "Website",
                    href: "https://yashprakash07.github.io/OneCode-IDE/",
                    icon: Icons.globe,
                },
                {
                    type: "Source",
                    href: "https://github.com/YashPrakash07/OneCode-IDE",
                    icon: Icons.github,
                },
            ],
            image: "/onecode.png",
        },
    ],
} as const;
