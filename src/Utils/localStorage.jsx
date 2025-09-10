import { MdOutlineFormatAlignJustify } from "react-icons/md";

const employees = [
  {
    id: 1,
    firstname: "Akshay",
    email: "ak@gmail.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Design Homepage",
        taskDescription: "Create homepage UI using Figma",
        taskDate: "2025-09-07",
        category: "Design",
        status: "new",
      },
      {
        taskTitle: "Fix Navbar",
        taskDescription: "Debug and fix navbar responsiveness",
        taskDate: "2025-09-08",
        category: "Development",
        status: "active",
      },
      {
        taskTitle: "Client Meeting",
        taskDescription: "Present project progress to client",
        taskDate: "2025-09-10",
        category: "Management",
        status: "completed",
      },
      {
        taskTitle: "Client Meeting update",
        taskDescription: "Present project progress to client",
        taskDate: "2025-09-10",
        category: "Management",
        status: "failed",
      },
    ],
    taskNumber: 4,
    taskCount: { active: 1, new: 1, completed: 1, failed: 1 },
  },
  {
    id: 2,
    firstname: "Rohit",
    email: "rohit@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Write API Docs",
        taskDescription: "Document authentication API endpoints",
        taskDate: "2025-09-07",
        category: "Documentation",
        status: "new",
      },
      {
        taskTitle: "Backend Debugging",
        taskDescription: "Resolve issue with login session handling",
        taskDate: "2025-09-09",
        category: "Development",
        status: "active",
      },
      {
        taskTitle: "Unit Testing",
        taskDescription: "Write Jest unit tests for auth module",
        taskDate: "2025-09-11",
        category: "Testing",
        status: "completed",
      },
    ],
    taskNumber: 3,
    taskCount: { active: 1, new: 1, completed: 1, failed: 0 },
  },
  {
    id: 3,
    firstname: "Priya",
    email: "priya@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Create Wireframes",
        taskDescription: "Design wireframes for dashboard module",
        taskDate: "2025-09-06",
        category: "Design",
        status: "new",
      },
      {
        taskTitle: "Prepare Presentation",
        taskDescription: "Slides for project status meeting",
        taskDate: "2025-09-08",
        category: "Management",
        status: "active",
      },
      {
        taskTitle: "Bug Fix",
        taskDescription: "Fix overflow issue on landing page",
        taskDate: "2025-09-09",
        category: "Development",
        status: "completed",
      },
    ],
    taskNumber: 3,
    taskCount: { active: 1, new: 1, completed: 1, failed: 0 },
  },
  {
    id: 4,
    firstname: "Aman",
    email: "aman@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Setup CI/CD",
        taskDescription: "Integrate GitHub Actions pipeline",
        taskDate: "2025-09-07",
        category: "DevOps",
        status: "new",
      },
      {
        taskTitle: "Database Backup",
        taskDescription: "Weekly backup of production DB",
        taskDate: "2025-09-08",
        category: "Database",
        status: "active",
      },
      {
        taskTitle: "Optimize Queries",
        taskDescription: "Improve performance of SQL queries",
        taskDate: "2025-09-10",
        category: "Database",
        status: "failed",
      },
    ],
    taskNumber: 3,
    taskCount: { active: 1, new: 1, completed: 0, failed: 1 },
  },
  {
    id: 5,
    firstname: "Neha",
    email: "neha@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "User Feedback",
        taskDescription: "Collect feedback from beta users",
        taskDate: "2025-09-06",
        category: "Research",
        status: "new",
      },
      {
        taskTitle: "Marketing Post",
        taskDescription: "Design poster for LinkedIn campaign",
        taskDate: "2025-09-08",
        category: "Marketing",
        status: "completed",
      },
      {
        taskTitle: "Schedule Meeting",
        taskDescription: "Arrange sync-up with design team",
        taskDate: "2025-09-09",
        category: "Management",
        status: "active",
      },
    ],
    taskNumber: 3,
    taskCount: { active: 1, new: 1, completed: 1, failed: 0 },
  },
];

const admin = [
  {
    id: 1,
    firstname: "Admin One",
    email: "admin1@example.com",
    password: "123",
  },
  {
    id: 2,
    firstname: "Admin Two",
    email: "admin2@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("Employees", JSON.stringify(employees));
  localStorage.setItem("Admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("Employees"));
  const admin = JSON.parse(localStorage.getItem("Admin"));
  return { employees, admin };
};
