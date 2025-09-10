import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description: string;
  rating: number;
  icon: any;
}

export const skillsUnsorted: skillsInterface[] = [
  {
    name: "React",
    description:
      "Craft interactive user interfaces using components, state, props, and virtual DOM.",
    rating: 5,
    icon: Icons.react,
  },
  {
    name: "Next.js",
    description:
      "Effortlessly build dynamic apps with routing, layouts, loading UI, and API routes.",
    rating: 5,
    icon: Icons.nextjs,
  },
  {
    name: "GraphQL",
    description:
      "Fetch data precisely with a powerful query language for APIs and runtime execution.",
    rating: 4,
    icon: Icons.graphql,
  },
  {
    name: "Nest.js",
    description:
      "Create scalable and modular applications with a progressive Node.js framework.",
    rating: 4,
    icon: Icons.nestjs,
  },
  {
    name: "MySQL",
    description:
      "Store and retrieve data seamlessly from database.",
    rating: 5,
    icon: Icons.mysql,
  },
  {
    name: "Node.js",
    description:
      "Run JavaScript on the server side, enabling dynamic and responsive applications.",
    rating: 5,
    icon: Icons.nodejs,
  },
  {
    name: "Typescript",
    description:
      "Enhance JavaScript with static types, making code more understandable and reliable.",
    rating: 5,
    icon: Icons.typescript,
  },
  {
    name: "Javascript",
    description:
      "Create interactive and dynamic web experiences with the versatile scripting language.",
    rating: 5,
    icon: Icons.javascript,
  },
  {
    name: "HTML 5",
    description:
      "Structure web content beautifully with the latest version of HyperText Markup Language.",
    rating: 4,
    icon: Icons.html5,
  },
  {
    name: "CSS 3",
    description:
      "Style web pages creatively with the latest iteration of Cascading Style Sheets.",
    rating: 4,
    icon: Icons.css3,
  },
  {
    name: "Storybook",
    description:
      "Tool for building and documenting UI components in isolation",
    rating: 4,
    icon: Icons.storybook,
  },
  {
    name: "Vue",
    description:
      "Build dynamic web apps with a TypeScript-based open-source.",
    rating: 3,
    icon: Icons.vue,
  },
  {
    name: "Redux",
    description:
      "Manage app state effectively using a predictable and centralized state container.",
    rating: 4,
    icon: Icons.redux,
  },
  {
    name: "Socket.io",
    description:
      "Enable real-time, bidirectional communication between clients and servers effortlessly.",
    rating: 3,
    icon: Icons.socketio,
  },
  {
    name: "Material UI",
    description:
      "Create stunning and responsive UIs with a popular React UI framework.",
    rating: 4,
    icon: Icons.mui,
  },

  {
    name: "Tailwind CSS",
    description:
      "Design beautiful, modern websites faster with a utility-first CSS framework.",
    rating: 5,
    icon: Icons.tailwindcss,
  },
  {
    name: "AWS",
    description:
      "Utilize Amazon Web Services to build and deploy scalable, reliable, and secure applications.",
    rating: 3,
    icon: Icons.amazonaws,
  },
  {
    name: "Bootstrap",
    description:
      "Quickly create responsive and appealing web designs using a popular CSS framework.",
    rating: 4,
    icon: Icons.bootstrap,
  },
  {
    name: "Netlify",
    description:
      "Manage and organize relational databases efficiently for data-driven applications.",
    rating: 4,
    icon: Icons.netlify,
  },
  {
    name: "Github",
    description:
      "Version control for development based on git",
    rating: 4,
    icon: Icons.gitHub,
  },
  {
    name: "Jira",
    description:
      "Issue-tracking tool that manages worflows",
    rating: 4,
    icon: Icons.jira,
  },
  {
    name: "Laravel",
    description:
      "Web development framework based in PHP",
    rating: 4,
    icon: Icons.laravel,
  },
  {
    name: ".NET",
    description:
      "Web Development framework developed by Microsoft",
    rating: 2,
    icon: Icons.dotnet,
  },
  {
    name: "Azure",
    description:
      "Build and deploy scalable, reliable, and secure applications developed by Microsoft.",
    rating: 2,
    icon: Icons.azure,
  },
  {
    name: "Bitbucket",
    description:
      "Alternate version control system similar to Github",
    rating: 3,
    icon: Icons.bitbucket,
  },
  {
    name: "Scrum",
    description:
      "software development methodology based in Agile",
    rating: 4,
    icon: Icons.scrum,
  },
  {
    name: "Wordpress",
    description:
      "Content management system for content on a website.",
    rating: 3,
    icon: Icons.wordpress,
  },
];

export const skills = skillsUnsorted
  .slice()
  .sort((a, b) => b.rating - a.rating);

export const featuredSkills = skills.slice(0, 6);
