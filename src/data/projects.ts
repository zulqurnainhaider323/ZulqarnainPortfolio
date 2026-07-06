import carhub from "@/assets/project-carhub.jpg";
import students from "@/assets/project-students.jpg";
import library from "@/assets/project-library.jpg";
import weather from "@/assets/project-weather.jpg";

export const projects = [
  {
    slug: "carhub-spare-parts-marketplace",
    image: carhub,
    title: "CarHub - Spare Parts Marketplace",
    description: "Full-stack MERN web platform for buying and selling car spare parts.",
    overview:
      "CarHub is a marketplace experience focused on helping users browse, search, and manage spare-part listings with a clean full-stack flow.",
    features: [
      "User authentication",
      "Role-based access for admin and user accounts",
      "Product listing and search",
      "Cart and order system",
      "REST API integration",
    ],
    stack: ["MongoDB", "Express.js", "React.js", "Node.js"],
    tone: "brand" as const,
  },
  {
    slug: "student-management-system",
    image: students,
    title: "Student Management System",
    description: "CRUD-based student management platform using PHP and MySQL.",
    overview:
      "A compact admin system for managing student records, attendance, and grades through simple database-backed workflows.",
    features: [
      "Student records management",
      "Attendance management",
      "Grades management",
      "Admin panel with authentication",
    ],
    stack: ["PHP", "MySQL", "HTML", "CSS"],
    tone: "accent" as const,
  },
  {
    slug: "library-management-system",
    image: library,
    title: "Library Management System",
    description: "Database-integrated system for managing books, issues, and returns.",
    overview:
      "A library operations project for keeping book records organized and making issue, return, and search tasks easier to manage.",
    features: [
      "Book issue and return system",
      "Search functionality",
      "Record management",
      "Database-backed book inventory",
    ],
    stack: ["PHP", "MySQL", "HTML", "CSS"],
    tone: "brand" as const,
  },
  {
    slug: "weather-app",
    image: weather,
    title: "Weather App",
    description: "Real-time weather application using JavaScript and the OpenWeather API.",
    overview:
      "A browser-based weather app that fetches city weather data and presents current conditions in a quick, readable interface.",
    features: [
      "City-based weather search",
      "OpenWeather API integration",
      "Real-time weather data",
      "Responsive weather display",
    ],
    stack: ["JavaScript", "OpenWeather API", "HTML", "CSS"],
    tone: "accent" as const,
  },
];

export type Project = (typeof projects)[number];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
