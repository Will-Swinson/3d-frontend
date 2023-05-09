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
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  starbucks,
  tesla,
  carrent,
  jobit,
  tripguide,
  threejs,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
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
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "25H | Network Specialist",
    company_name: "Army",
    icon: starbucks,
    iconBg: "#383E56",
    date: "April 2021 - November 2023",
    points: [
      "As a former member of the Army, I bring a wealth of experience in leadership, people management, and technical expertise to any team.",
      "During my tenure, I was responsible for leading and maintaining teams of personnel, ensuring their readiness for any situation.",
      "Additionally, I developed a strong aptitude for networking with routers and other technologies, enabling me to troubleshoot and solve complex problems efficiently.",
      "With a proven track record of success in high-pressure situations, I am confident in my ability to deliver results and add value to any organization.",
    ],
  },
  {
    title: "Immersive Student Resident Engineer",
    company_name: "Galvanize",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Mar 2023 - July 2023",
    points: [
      "As a software engineer, I have expertise in React, JavaScript, HTML, CSS, Docker, PSQL, Node.js, Express.js, and Three.js.",
      "I excel at problem-solving and have a talent for communicating technical information to non-technical stakeholders. ",
      "My skills in web development and people management make me a valuable asset to any team.",
      "With a track record of successful application development and deployment, I am confident in my ability to deliver high-quality results on-time and on-budget.",
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
      "Will has an unstoppable passion for learning new things and helping other team members.",
    name: "John Kluse",
    designation: "Full Stack Software Engineer",
    company: "Galvanize",
    image:
      "https://media.licdn.com/dms/image/D4E03AQFOvPPTYpDlQA/profile-displayphoto-shrink_200_200/0/1682952898288?e=1689206400&v=beta&t=OMprqXtzKsrcQQA7iEIntRchEsvTHdW2WSvo_POsR-o",
  },
  {
    testimonial:
      "In my time of knowing him, it is clear to see that Will is a highly skilled and experienced software engineer with expertise in a variety of programming languages and technologies, including but not limited to JavaScript, React, Node.js, HTML, CSS, PostgreSQL, MySQL, and more.",
    name: "Phillip Mejia",
    designation: "Full Stack Software Engineer",
    company: "Galvanize",
    image:
      "https://media.licdn.com/dms/image/D5603AQGX5eU8pmowSQ/profile-displayphoto-shrink_200_200/0/1666140793700?e=1689206400&v=beta&t=czWZbtBSn0NPbs836Bl2S3G-VYUPUdtZWcqbqJbg00Y",
  },
  {
    testimonial:
      "Overall, I would highly recommend Will Swinson for any role related to software development. He is a talented, driven, and dedicated individual who would be an asset to any team.",
    name: "Joseph Carmeli",
    designation: "US Army Veteran | Full Stack Engineer",
    company: "Galvanize",
    image:
      "https://media.licdn.com/dms/image/C5603AQEocJ_CwJoD6g/profile-displayphoto-shrink_200_200/0/1664245429334?e=1689206400&v=beta&t=A368PJOrx3W-CzwIfcUWJhxqRa2xWKj8DbrCNvx6CG8",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials };
