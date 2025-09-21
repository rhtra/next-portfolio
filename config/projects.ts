import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ProjectInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr?: PagesInfoInterface[];
}

export const Projects: ProjectInterface[] = [
  {
    id: "decypher-tech",
    companyName: "Decypher Tech",
    type: "Professional",
    category: ["Web Dev", "Full Stack"],
    shortDescription:
      "Developed modules for a system that caters to customers regarding cyber security for different establishments like malls, hotels and public places",
    websiteLink: "https://decyphertech.com/",
    techStack: [
      "Nest.js",
      "Vue.js",
      "AWS",
    ],
    startDate: new Date("2025-03-01"),
    endDate: new Date("2025-05-30"),
    companyLogoImg: "/projects/decyphertech/logo.png",
    descriptionDetails: {
      paragraphs: [
        "I was hired in Decypher Tech on a temporary contract to revive their system as their team all resigned. Unfortunately, I did not extend my contract due to toxic workplace issues",
        "During my time at Decypher Tech, I had the opportunity to work on a dynamic and user-focused project that involved designing and optimizing a system catering to a lot of users and potential clients. My role as a full-stack web developer was to ensure a seamless experience for users by creating an efficient and maintainable platform.",
        "Decypher Tech's business is about cyber security to establishments supplying routers, switches ensuring security and clear connectivity within the area"
      ],
      bullets: [
        "Developed modules for quotation for customers based on their requirements",
        "Made an inventory portal for internal users for our hardware equipments",
        "E-mail features for inquiries",
        "Created CI/CD pipeline for deployment to AWS EC2 instance",
        "Leveraged VueJS with TypeScript for captivating front-end experiences.",
        "Utilized Nest.js and MySQL to design and manage databases.",
      ],
    },
  },
  {
    id: "coral-active",
    companyName: "Coral Active",
    type: "Professional",
    category: ["Web Dev", "Frontend", "Full Stack"],
    shortDescription:
      "Developed and optimized functionalities for call center solutions catering to over 100,000 users emphasizing efficiency, maintainability and seamless integration for different clients.",
    websiteLink: "https://www.coralactive.com/",
    techStack: [
      "Javascript",
      "Node.js",
      "AWS",
    ],
    startDate: new Date("2023-07-01"),
    endDate: new Date("2024-12-31"),
    companyLogoImg: "/projects/coral/logo.png",
    descriptionDetails: {
      paragraphs: [
        "During my time at Coral Active, I had the opportunity to work with different organizations like Das Kann Bank, Fidelity and AT & T",
        "I collaborated closely with the product team to integrate cutting-edge features, employing technologies like React.js as widgets for our system that is designed in Javascript for captivating for seamless integration",
        "Coral Active's business is about providing a web-based call center platform for businesses that is easily accessible without any installation"
      ],
      bullets: [
        "Developed and optimized a high-performing website catering to over 100,000 agents.",
        "Collaborated closely with the product team to implement cutting-edge features.",
        "Worked with QA to tackle different areas of concern.",
        "Code reviews with the team",
        "Emphasized using feature flags as system is used by different organizations",
        "Utilized Node.js, MySQL to design and manage databases.",
      ],
    },
  },
  {
    id: "felix",
    companyName: "Felix",
    type: "Professional",
    category: ["Web Dev", "Frontend", "Team Lead"],
    shortDescription:
      "Led a team of seven(7) developers to create various modules for a vendor platform that connects to individuals and organizations to different vendors for construction needs",
    websiteLink: "https://marketplace.felix.net/",
    techStack: [
      "React",
      "Laravel",
      "AWS",
    ],
    startDate: new Date("2019-11-01"),
    endDate: new Date("2023-03-31"),
    companyLogoImg: "/projects/felix/logo.png",
    descriptionDetails: {
      paragraphs: [
        "Going back home to the Philippines as my parents were getting older, I was hired in Felix or Plantminer as they rebranded in 2022.",
        "In Felix, I was introduced to Jira and Kanban for monitoring issues as well as Figma for developing user interfaces",
        "Felix's objective is to create a platform for anyone to connect to vendors regarding their construction needs be it manpower, equipment, vehicles or any tools"
      ],
      bullets: [
        "Developed various modules like Request for Quotations, Vendor Listings, Project Listings, etc.",
        "Integrated different organizations to Felix for their operation needs",
        "Code Reviews, Release Manager for merging tickets that are ready for deployment from Bitbucket via CI/CD pipeline to AWS EC2 instance",
        "Assigning tasks to developers and approving estimates, approach and affected component or areas for each tickets",
        "Used jest for unit testing",
        "Storybook for isolating reusable components",
        "Familiarity with Figma for creating interfaces",
        "Redux for state management"
      ],
    },
  },
  {
    id: "ams",
    companyName: "AMS",
    type: "Professional",
    category: ["Web Dev", "Frontend", "Full Stack"],
    shortDescription:
      "Developed various systems from scratch like Document Control Management, E-learning, Supplier Management and many more.",
    websiteLink: "https://www.ams.global/",
    techStack: [
      ".NET",
      "React",
      "Azure",
    ],
    startDate: new Date("2017-12-01"),
    endDate: new Date("2019-08-31"),
    companyLogoImg: "/projects/ams/logo.png",
    descriptionDetails: {
      paragraphs: [
        "I was hired in AMS to create various systems like Document Control Management System, E-Learning, Supplier Management System for procurement, etc.",
        "In AMS, I was exposed to different technologies like .NET core, MsSQL, Azure, React, xAPI as an integration for Articulate and many more",
        "AMS' business is providing platform for sustainability in war-torn countries like Afghanistan with trainings, procurement and connecting to different suppliers"
      ],
      bullets: [
        "Created E-learning platform to provide trainings, seminar and documents for employees to sign in connection to Document Control Management System",
        "Developed Document Control Management System to create, upload, delete and update various documents like procedures, policies, etc.",
        "Made Supplier Management for procurement wherein any supplier can supply quotations with the Admin creating orders as well as inventory for internal use",
        "Developed Quick Launch for access to different platfroms within AMS",
        "Created various different modules for Fastrax like Inventory, Geo-tracking for vehicles, charts and graphs",
        "Leveraged React with TypeScript for captivating front-end experiences.",
        "Utilized MsSQL to design and manage databases.",
        "Collaborated with different departments for system requirements",
        "Coordinated with QA and Project Manager for development purposes",
        "Deployment to Azure server",
        "Used Kendo Grid and HighCharts for dashboard graphs and displays",
        "Experienced Scrum and Rapid Development for methodology",
        "Jest for unit testing",
        "Redux for state management"
      ],
    },
  },
  {
    id: "arabia-horizons",
    companyName: "Arabia Horizons Tours",
    type: "Professional",
    category: ["Web Dev", "Frontend", "Full Stack"],
    shortDescription:
      "Developed iTickets.ae, B2B platform for tours and attractions for organizations and applied Google Ads and Analytics as well as optimizing Arabia Horizons for 50,000 customers in Dubai",
    websiteLink: "https://arabiahorizons.com/",
    techStack: [
      "PHP",
      "Javascript",
    ],
    startDate: new Date("2016-12-01"),
    endDate: new Date("2017-10-31"),
    companyLogoImg: "/projects/arabiahorizons/logo.png",
    descriptionDetails: {
      paragraphs: [
        "Starting out my venture in Dubai, I was hired in Arabia Horizons as a Web Developer mainly using PHP, Javascript, HTML and CSS. I resigned due to shady practices like keeping your passport, delayed and unpaid salaries",
        "In Arabia Horizons, I created iTickets.ae - https://itickets.ae/index - a ticketing platform for tours and attractions in Dubai connecting to different organizations like At The Top Burj Khalifa, IMG World, Wild Wadi Waterpark, etc.",
        "Arabia Horizons' business is providing platforms wherein you can purchase tickets for tour and attractions in Dubai"
      ],
      bullets: [
        "Created iTickets.ae - https://itickets.ae/index - for ticketing applying Google Ads, Analytics, Facebook ads and Instagram Ads for sales",
        "Integrated Payfort as a payment gateway for Arabia Horizons system",
        "Developed B2B wherein various suppliers can purchase discounted tickets for different suppliers",
        "Integrated API connection to retrieve various data like available tickets, prices, etc. from different organizations",
        "Created iTickets.ae CMS wherein the admin can create bundles, promo codes and edit content",
        "Developed modules for Arabia Gateway like CMS, reports and graphs",
        "Created listing for Arabia Horizons to see sales where they came from: sites, facebook ads, google ads, etc.",
        "Support for Helicopter Tours using Wordpress",
        "Used PHP, Javascript, HTML and CSS for development",
        "Utilized MySQL to design and manage databases.",
        "Coordinated with Business Owner for development purposes",
        "Deployment to HostGator",
        "Experienced Agile for methodology",
      ],
    },
  },
  {
    id: "zone-laser",
    companyName: "Zone Laser",
    type: "Professional",
    category: ["Web Dev", "Full Stack"],
    shortDescription:
      "Created a high performing system like Banksia Online Roster and Banksia Online Booking for booking laser tag games for a lot customers in Australia",
    websiteLink: "https://lasertag.com/",
    techStack: [
      "Laravel",
      "Javascript"
    ],
    startDate: new Date("2016-04-01"),
    endDate: new Date("2016-10-31"),
    companyLogoImg: "/projects/zonelaser/logo.png",
    descriptionDetails: {
      paragraphs: [
        "I was hired in Zone Laser to create Banksia Online Roster and Banksia Online Booking. I resigned as I was migrating to U.A.E.",
        "In Zone Laser, I experienced using Laravel and started using Github",
        "Zone Laser's business is hosting laser tag games as well as a platform to book gaming on timeslots", 
      ],
      bullets: [
        "Developed Banksia Online Booking for reserving laser tag games as well as ordering in advance like foods and drinks",
        "Created Banksia Online Roster for the admin to schedule employees, view their time-ins and outs as well as an overview for the business operation hours",
        "Developed API responses for other organizations to connect to Banksia",
        "Integrated API connection to retrieve various data for ordering purposes to restock inventory from different organizations",
        "Used Laravel, Javascript, HTML and CSS for development",
        "Utilized MySQL to design and manage databases.",
        "Coordinated with Project Manager for development purposes",
        "Used Github for code repository",
        "Experienced Agile for methodology",
      ],
    },
  },
  {
    id: "simplex",
    companyName: "Simplex Internet Phils Inc.",
    type: "Professional",
    category: ["Web Dev", "Full Stack"],
    shortDescription:
      "Handled support tickets hosting over 10,000 users optimizing performance and efficiency leveraging a custom PHP framework for different parts of the system by different users and clients",
    websiteLink: "https://global.cafe24.com/",
    techStack: [
      "PHP",
      "Javascript"
    ],
    startDate: new Date("2015-11-01"),
    endDate: new Date("2016-02-28"),
    companyLogoImg: "/projects/simplex/logo.png",
    descriptionDetails: {
      paragraphs: [
        "I was hired in Simplex as a PHP Developer. I resigned as I feel that the skills gained are exclusive to Simplex",
        "In Simplex, I experienced using a custom framework made in PHP",
        "Simplex is a counterpart of Cafe24 in Korea that creates various systems like SEO, Order/Delivery Management and E-Commerce", 
      ],
      bullets: [
        "Handled support tickets for different parts of the system",
        "Coordinated with Project Manager for development purposes",
        "Used SVN for code repository",
        "Experienced Agile for methodology",
      ],
    },
  },
  {
    id: "jeega",
    companyName: "Jeega I.T. Inc.",
    type: "Professional",
    category: ["Web Dev", "Full Stack"],
    shortDescription:
      "Developed high performing and optimized sites emphasizing performance and efficiency like Hotel Operations found everywhere in the Philippines, Ticketing, Document Control Management, Attendance and Payment systems",
    websiteLink: "https://www.kalibrr.com/c/jeega-information-technologies-inc-1/jobs",
    techStack: [
      "PHP",
      "Javascript"
    ],
    startDate: new Date("2013-03-01"),
    endDate: new Date("2015-10-31"),
    companyLogoImg: "/projects/jeega/logo.png",
    descriptionDetails: {
      paragraphs: [
        "My first job is with Jeega formerly known as Corebyte. I was absorbed from intenship and later on became a Team Lead. I resigned for growth as I thought I was still lacking in a lot of areas.",
        "In Simplex, I started using PHP, jQuery, CodeIgniter, Bootstrap.",
        "Jeega's business is about software development for different clients. Jeega was later on acquired by ExpressPay for it's developers", 
      ],
      bullets: [
        "Developed Expresspay which is a platform for bills, booking airline tickets, cellphone loads and many more which connects to different organizations. You can see ExpressPay in a lot of places in the Philippines",
        "Created ACL Hotel Operations which covers bookings, floor monitoring, room service and inventory",
        "Developed Omniprime Ticketing - ticketing system for ports in Batangas, Philippines",
        "Created Library Filing System for EALO - law firm for uploading, updating and deleting documents",
        "Developed Attendance Monitoring for schools and universities that once the students tap their ID, their guardians will be notified via SMS",
        "Leveraged CodeIgniter, PHP, Javascript, jQuery and HTML for development",
        "Tead Lead of four{4} full stack developers",
        "Used SVN for code repository",
        "Experienced Agile for methodology",
      ],
    },
  },
  {
    id: "marj-arsolon",
    companyName: "Marj Arsolon Accountant Site",
    type: "Personal",
    category: ["Web Dev", "UI/UX", "Frontend"],
    shortDescription:
      "Developed a user-friendly website for my partner that serves as her portfolio and information",
    websiteLink: "https://marj-arsolon.netlify.app/",
    githubLink: "https://github.com/rhtra/accountant-portfolio",
    techStack: ["React", "CSS 3"],
    startDate: new Date("2024-05-24"),
    endDate: new Date("2024-05-24"),
    companyLogoImg: "/personal/marj/logo.png",
    // pagesInfoArr: [
    //   {
    //     title: "",
    //     description: "",
    //     imgArr: ["/projects/"],
    //   },
    //   {
    //     title: "",
    //     description:
    //       "",
    //     imgArr: [
    //       "",
    //       "",
    //     ],
    //   },
    // ],
    descriptionDetails: {
      paragraphs: ["Personal website for Marj Arsolon, an accountant, showcasing her skills and hobbies"],
      bullets: ["Developed using React"],
    },
  },
  {
    id: "snap-site",
    companyName: "Snap Site",
    type: "Personal",
    category: ["Web Dev", "UI/UX", "Frontend"],
    shortDescription:
      "Developed a landing page for a dating site with registration page",
    websiteLink: "https://snapsite-by-art.netlify.app/",
    githubLink: "https://github.com/rhtra/bd-tech-assessment",
    techStack: ["React", "CSS 3"],
    startDate: new Date("2024-08-19"),
    endDate: new Date("2024-08-19"),
    companyLogoImg: "/personal/snapsite/logo.png",
    // pagesInfoArr: [
    //   {
    //     title: "",
    //     description: "",
    //     imgArr: ["/projects/"],
    //   },
    //   {
    //     title: "",
    //     description:
    //       "",
    //     imgArr: [
    //       "",
    //       "",
    //     ],
    //   },
    // ],
    descriptionDetails: {
      paragraphs: ["Landing page for a dating site with registration page with steps"],
      bullets: ["Developed using React"],
    },
  },
  {
    id: "shift-scheduler",
    companyName: "Shift Scheduler",
    type: "Personal",
    category: ["Web Dev", "UI/UX", "Frontend"],
    shortDescription:
      "Developed a web-based app utilizing react-scheduler",
    websiteLink: "https://shift-scheduler-by-art.netlify.app/",
    githubLink: "https://github.com/rhtra/react-scheduler/",
    techStack: ["React"],
    startDate: new Date("2023-05-15"),
    endDate: new Date("2023-05-15"),
    companyLogoImg: "/personal/scheduler/logo.png",
    // pagesInfoArr: [
    //   {
    //     title: "",
    //     description: "",
    //     imgArr: ["/projects/"],
    //   },
    //   {
    //     title: "",
    //     description:
    //       "",
    //     imgArr: [
    //       "",
    //       "",
    //     ],
    //   },
    // ],
    descriptionDetails: {
      paragraphs: [""],
      bullets: ["Developed using React"],
    },
  },
  {
    id: "construction-ecommerce",
    companyName: "Construction E-commerce",
    type: "Personal",
    category: ["Web Dev", "UI/UX", "Frontend"],
    shortDescription:
      "Developed an e-commerce for construction needs",
    websiteLink: "https://github.com/rhtra/next-bolsterup-assessment",
    githubLink: "https://github.com/rhtra/next-bolsterup-assessment",
    techStack: ["React"],
    startDate: new Date("2023-05-15"),
    endDate: new Date("2023-05-15"),
    companyLogoImg: "/personal/global-construction/logo.png",
    // pagesInfoArr: [
    //   {
    //     title: "",
    //     description: "",
    //     imgArr: ["/projects/"],
    //   },
    //   {
    //     title: "",
    //     description:
    //       "",
    //     imgArr: [
    //       "",
    //       "",
    //     ],
    //   },
    // ],
    descriptionDetails: {
      paragraphs: [""],
      bullets: ["Developed using NextJS"],
    },
  },
  {
    id: "elegante-ecommerce",
    companyName: "Elegante E-commerce",
    type: "Personal",
    category: ["Web Dev", "UI/UX", "Frontend"],
    shortDescription:
      "Developed an e-commerce for clothes",
    websiteLink: "https://github.com/rhtra/elegante",
    githubLink: "https://github.com/rhtra/elegante",
    techStack: ["React"],
    startDate: new Date("2025-02-14"),
    endDate: new Date("2023-02-14"),
    companyLogoImg: "/personal/elegante-commerce/logo.png",
    // pagesInfoArr: [
    //   {
    //     title: "",
    //     description: "",
    //     imgArr: ["/projects/"],
    //   },
    //   {
    //     title: "",
    //     description:
    //       "",
    //     imgArr: [
    //       "",
    //       "",
    //     ],
    //   },
    // ],
    descriptionDetails: {
      paragraphs: [""],
      bullets: ["Developed using NextJS"],
    },
},

];

export const featuredProjects = Projects.slice(0, 3);
