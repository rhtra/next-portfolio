import { ValidSkills } from "./constants";

export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const experiences: ExperienceInterface[] = [
  {
    id: "decypher",
    position: "Senior Web Developer (Temporary Contract)",
    company: "Decypher Tech",
    location: "Colorado, USA (Remote)",
    startDate: new Date("2025-03-01"),
    endDate: new Date("2025-05-30"),
    description: [
      "Led development of various modules on the system",
      "Deployment to development, staging and production servers",
      "Code Reviews, merging of PRs",
    ],
    achievements: [
      "Delivered production code within 1 week of joining",
      "Optimized repository by organizing branches",
      "Created CI/CD pipeline on github using workflows after successful merging to branches (dev, staging and production)",
      "Developed quotation module for customers",
      "Collaborated closely with QA and designers for user-centric features, improving usability and workflows.",
      "Created an inventory system for internal use",
    ],
    skills: ["Typescript", "Vue.js", "Nest.js", "MySQL", "AWS"],
    companyUrl: "https://decyphertech.com/",
    logo: "/projects/decyphertech/logo.png",
  },
  {
    id: "coral",
    position: "Senior Javascript Developer",
    company: "Coral Active",
    location: "Australia (Remote)",
    startDate: new Date("2023-07-01"),
    endDate: new Date("2024-10-30"),
    description: [
      "Developed widgets on the system supporting chats, e-mails and calls",
      "Partnered with different clients such as Fidelity, Das Kann Bank and AT&T for various requirements and features",
      "Code Reviews, merging of PRs and deployment",
      "Demonstration of new features within the company"
    ],
    achievements: [
      "Delivered production code within 2 weeks of joining",
      "Led the integration of React widgets within the system",
      "Worked on different widgets and features with emphasis on feature flags for different organizations",
      "Demonstrated newly developed features for monthly company meetings",
      "Collaborated closely with QA and project manager for user-centric features, improving usability and workflows.",
      "Support for various tasks using Salesforce and Javascript",
    ],
    skills: ["Javascript", "Node.js", "Salesforce", "MySQL", "AWS", "CI/CD"],
    companyUrl: "https://www.coralactive.com/",
    logo: "/projects/coral/logo.png",
  },
  {
    id: "felix",
    position: "Senior React Developer to Team Lead",
    company: "Felix",
    location: "Australia (Remote)",
    startDate: new Date("2019-11-01"),
    endDate: new Date("2023-03-31"),
    description: [
      "Developed modules on the system",
      "Led the team responsible for implementing features based on onboarding clients' requirements",
      "Code Reviews, merging of PRs and deployment via CI/CD pipeline",
      "Demonstration of new features within the company",
      "Assigning tasks for the team members as well as approving estimates and approach",
      "Collaboration with developers, QA and product team"
    ],
    achievements: [
      "Promoted to Team Lead within a year",
      "Led the integration of React widgets within the system",
      "Migrated from class components to functional components",
      "One of the main contributors of the Procurement project that's similar to excel wherein every cell can be any type of data, dropdown with data coming from database, calculations, etc.",
      "Used jest for unit testing as well as Storybook for isolating reusable UI components",
      "Assigning feature and support tickets to team members",
      "Successful integration of clients within tight deadlines"
    ],
    skills: ["React", "Laravel", "Docker", "MySQL", "AWS", "Figma", "Storybook", "Jest", "CI/CD"],
    companyUrl: "https://marketplace.felix.net/",
    logo: "/projects/felix/logo.png",
  },
  {
    id: "ams",
    position: "Senior Web Developer",
    company: "Automotive Management Services",
    location: "Dubai, U.A.E.",
    startDate: new Date("2017-12-01"),
    endDate: new Date("2019-10-31"),
    description: [
    ],
    achievements: [
    ],
    skills: [".NET", "MsSQL", "React", "MsSQL", "Azure", "Jest", "CI/CD"],
    companyUrl: "https://ams.global",
    logo: "/projects/ams/logo.png",
  },
  {
    id: "arabia-horizons",
    position: "Web Developer",
    company: "Arabia Horizons Tours",
    location: "Dubai, U.A.E.",
    startDate: new Date("2016-12-01"),
    endDate: new Date("2017-10-31"),
    description: [
    ],
    achievements: [
    ],
    skills: ["PHP", "MySQL", "Javascript", "MySQL", "Wordpress"],
    companyUrl: "",
    logo: "/projects/arabiahorizons/logo.png",
  },
  {
    id: "zone-laser",
    position: "PHP Developer",
    company: "Zone Laser Support System",
    location: "Dubai, U.A.E.",
    startDate: new Date("2016-04-01"),
    endDate: new Date("2016-10-31"),
    description: [
    ],
    achievements: [
    ],
    skills: [],
    companyUrl: "https://lasertag.com/",
    logo: "/projects/zonelaser/logo.png",
  },
  {
    id: "simplex",
    position: "PHP Developer",
    company: "Simplex Internet Phils Inc.",
    location: "Ortigas, Metro Manila, Philippines",
    startDate: new Date("2016-12-01"),
    endDate: new Date("2017-10-31"),
    description: [
    ],
    achievements: [
    ],
    skills: [],
    companyUrl: "https://global.cafe24.com/",
    logo: "/projects/simplex/logo.png",
  },
  {
    id: "jeega",
    position: "PHP Developer to Team Lead",
    company: "JEEGA Information Technology Inc.",
    location: "Cubao, Metro Manila, Philippines",
    startDate: new Date("2013-03-01"),
    endDate: new Date("2015-10-31"),
    description: [
    ],
    achievements: [
    ],
    skills: ["PHP", "Javascript", "MySQL"],
    companyUrl: "https://www.kalibrr.com/c/jeega-information-technologies-inc-1/jobs",
    logo: "/projects/jeega/logo.png",
  },
  
];
