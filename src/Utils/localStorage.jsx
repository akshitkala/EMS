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
    taskNumber: 3,
    taskCount: {
      active: 1,
      new: 1,
      completed: 1,
      failed: 1,
    },
  },
  {
    id: 2,
    firstname: "Rohit",
    email: "employee2@example.com",
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
    taskCount: {
      active: 1,
      new: 1,
      completed: 1,
      failed: 0,
    },
  },
];

const admin = [
  {
    id: 1,
    firstname: "the admin",
    email: "a@gmail.com",
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
