import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@rhtra",
    icon: Icons.gitHub,
    link: "https://github.com/rhtra",
  },
  {
    name: "LinkedIn",
    username: "Arthur Buenaventura",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/arthur-buenaventura-5b4820100/",
  },
  {
    name: "Gmail",
    username: "arthur.a.buenaventura",
    icon: Icons.gmail,
    link: "mailto:arthur.a.buenaventura@gmail.com",
  },
];
