import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  restapi,
  tailwind,
  springboot,
  mongodb,
  git,
  hibernate,
  sql,
  micro,
  Taskease,
  busbuddy,
  threejs,
  spark,
  mahicorner,
  rockpaper,
  postman,

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "FullStack Web Developer",
    icon: web,
  },
  {
    title: " React.js Developer",
    icon: mobile,
  },
  {
    title: "Java Backend Developer",
    icon: backend,
  },
  {
    title: "Springboot Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Rest API",
    icon: restapi,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "SpringBoot",
    icon: springboot,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Hibernate",
    icon: hibernate,
  },
  {
    name: "SQL",
    icon: sql,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Winjit Technology Pvt Ltd",
    icon: spark,
    iconBg: "#383E56",
    date: "June 2024 -  Currently working",
    points: [
      "Working on OPS 360 Application and portal",
    ],
  },
  {
    title: "Java Backend Engineer",
    company_name: "Unitrans Infotech Services",
    icon: micro,
    iconBg: "#E6DEDD",
    date: "March 2021 - May 2024",
    points: [
      "Played a pivotal role among a team of ten developers on the Event Booking System project, achieving high efficiency in delivering a comprehensive web application for event management using React and Java/J2EE.",
      "Integrated Java applications with databases (e.g., Oracle, MySQL, PostgreSQL), optimizing database schemas and executing SQL queries for seamless data retrieval and storage.",
      "Performance Optimization in Java codebase using Spring Boot framework, resulting in a 20% improvement in application response time",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Resolved critical bugs and issues through meticulous debugging and testing, ensuring a bug fix success rate of 95% and minimizing production incidents by 30%",
    ],
  },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Realtor - Revolutionizing Real Estate Solutions:",
    description:
      "Realtor redefines the real estate landscape by offering a seamless platform for direct property transactions in US.
Bridging the gap between owners and tenants/buyers, realtor provides a transparent and efficient experience.With
advanced features and comprehensive services, realtor empowers users to navigate the property market with ease and
confidence.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "springboot",
        color: "pink-text-gradient",
      },
    ],
  //  image: Taskease,
  //  source_code_link: "https://github.com/Musa6630/TaskEase-CRUD_API",
  },
  {
    name: "Bus Buddy",
    description:
      "BusBuddy is an advanced online bus ticket booking system that provides users with a streamlined and secure platform for reserving bus tickets. The system includes a powerful payment gateway integration with Stripe, ensuring seamless and safe online transactions. One of its standout features is the implementation of PDF ticket generation, enhancing the overall user.",
    tags: [
      {
        name: "Spring Boot",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "SQL",
        color: "pink-text-gradient",
      },
      {
        name: "Hibernate JPA",
        color: "blue-text-gradient",
      },
      {
        name: "Spring MVC",
        color: "green-text-gradient",
      },
      {
        name: "JWT",
        color: "pink-text-gradient",
      },
      {
        name: "Stripe Payment Gateway",
        color: "blue-text-gradient",
      },
      {
        name: "Mail Authentication",
        color: "green-text-gradient",
      },
    ],
    image: busbuddy,
    source_code_link: "https://github.com/Musa6630/busbuddy",
  },
  {
    name: "Mahi Corner",
    description:
      "",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: mahicorner,
    source_code_link: "https://musa6630.github.io/Cake_boutique/",
  },
  {
    name: "Rock Paper Scissors",
    description:
      "",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: rockpaper,
    source_code_link: "https://musa6630.github.io/rock-paper-scissors.github.io/",
  },
  {
    name: "PostMan Clone",
    description:
      "",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: postman,
    source_code_link: "https://github.com/Musa6630/Postman_Clone",
  },
];

export { services, technologies, experiences, testimonials, projects };
