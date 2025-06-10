import { Logo } from "@/once-ui/components";
import { RevealFx, Badge, Row } from "@/once-ui/components";
import { style } from "./config";

const person = {
  firstName: "Obaid",
  lastName: "Awan",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Web Developer & Graphic Designer",
  avatar: "/images/Avatar01.JPEG",
  email: "obaidawan567@gmail.com",
  location: "Asia/Karachi", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Urdu"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Download my CV</>,
  description: (
    <>
      <>Feel free to download my complete CV to learn more about my experience, skills, and education. I’m always open to new opportunities and collaborations.
      </>
      <br />
      <>
        I’d love to connect! Whether you have questions, project ideas, or job offers, please reach out:
      </>
      <br />
      <br />

      <RevealFx fillWidth horizontal="center">
        <Badge background="brand-alpha-weak" onBackground="neutral-strong" textVariant="label-default-s" arrow={false}>
          <Row paddingY="2"> <i>{person.email}</i></Row>
        </Badge>
      </RevealFx>
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/obaixii",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/obaixii/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Always Learning🔍<br/>Always Growing🚀</>,
  featured: {
    display: true,
    title: <>Personal Site <strong className="ml-4">@obaixii</strong></>,
    href: "#",
  },
  subline: (
    <>
      I'm Obaid — Center Manager at &nbsp;<span style={{ fontWeight: "bold" }}>Le Lotus Clinique</span>, and a passionate Web Developer and Graphic Designer in my own time, creating digital experiences and visual designs through freelance and personal projects.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I’m a motivated and forward-thinking professional who loves turning challenges into meaningful solutions. I’m always learning and thrive in environments where technology, creativity, and collaboration come together. Whether it’s working across teams or solving complex problems, I stay curious and connected to new tools and ideas to create work that matters.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Le Lotus Clinique",
        timeframe: "2023 - Present",
        role: "Head of HR | Center Manager",
        achievements: [
          <>
            Optimized operational workflows across, Overseeing patient services, Appointment scheduling, Records management, Financial handling, and Inventory control.
          </>,
          <>
            Implemented and improved company policies, maintained decorum and discipline, managed leave records, and ensured smooth HR operations.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/LLC.JPEG",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Freelance",
        timeframe: "2022 - 2023",
        role: "Graphic Designer",
        achievements: [
          <>
            Freelance Designer at Fiverr (bilksar_studios), specializing in Digital design, photo editing, and layout design using Adobe Photoshop and Illustrator, with a focus on precision tracing techniques and client-driven visual solutions.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Virtual University of Paksitan",
        description: <>Bachelors in Business and Information Technology.</>,
        timeframe: "2023 - Present",
      },
      {
        name: "Askaria College",
        description: <>Intermediate of Sciences  (Pre-Engineering)</>,
        timeframe: "2020",
      },
      {
        name: "St. John's High School",
        description: <>Matriculation in Sciences</>,
        timeframe: "2018",
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Skills",
    skills: [
      {
        title: "Web Development",
        description: <>HTML5, CSS3, JavaScript, React.js, Next.js, TypeScript, Node.js, Express.js, MongoDB (MERN Stack), RESTful API development, responsive design, web optimization</>,
        // optional: leave the array empty if you don't want to display images
        images: [

        ],
      },
      {
        title: "Graphic Designing",
        description: <>Adobe Photoshop, Adobe Illustrator, Canva, Filmora</>,
        // optional: leave the array empty if you don't want to display images
        images: [

        ],
      },
      {
        title: "Tools & Platforms:",
        description: <> Git, GitHub, Postman, Visual Studio Code (VS Code), CRM software, basic AWS, deployment, CI/CD fundamentals</>,
        // optional: leave the array empty if you don't want to display images
        images: [

        ],
      },
      {
        title: "Soft Skills:",
        description: <>Team Player, Problem Solving, Continuous Learner, Time Management, Creativity, Customer Service, Adaptability, Communication, Leadership</>,
        // optional: leave the array empty if you don't want to display images
        images: [

        ],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
