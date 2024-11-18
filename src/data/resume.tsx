import { Icons } from "@/components/icons";
import { HomeIcon, Folder } from "lucide-react";
import { title } from "process";

export const DATA = {
  name: "Pranjal Rastogi",
  initials: "SG",
  url: "https://sahilgulihar.me",
  location: "Rajasthan, India",
  locationLink: "https://www.google.com/maps/place/rajasthan",
  description: "I build and break stuff. (Arch btw)",
  summary:
    "I am a final-year BTech student at Poornima College of Engineering, graduating in 2025. I have over a year of experience in full-stack development using the MERN stack, with a strong foundation in data structures and algorithms. Currently, I am exploring Golang and focusing on improving my problem-solving skills. I have worked on various projects and internships, showcasing my ability to deliver efficient and scalable solutions.",
  avatarUrl: "https://avatars.githubusercontent.com/u/112870288?v=4",

  skills: [
    "React",
    "Next.js",
    "Javascript",
    "Typescript",
    "Node.js",
    "Express.js",
    "Go",
    "Postgres",
    "Docker",
    "Prisma",
    "Bash",
    "C++",
    "Express",
    "TailwindCSS",
    "MongoDB",
    "MySQL",
    "Git",
    "Github",
    "Linux",
    "Redis",
    "Kafka",
    "AWS",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/projects", icon: Folder, label: "Projects" },
  ],
  contact: {
    email: "pranjalrastogi9829@gmail.com",
    tel: "+9829225965",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/pranjal-rastogi",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/pranjal-rastogi-984623222/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/pranjal_098",
        icon: Icons.x,

        navbar: true,
      },
      // Youtube: {
      //   name: "Youtube",
      //   url: "https://dub.sh/dillion-youtube",
      //   icon: Icons.youtube,
      //   navbar: true,
      // },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Hikup Technology Pvt. Ltd.",
      href: "https://www.hikup.co/",
      badges: [],
      location: "Offline",
      title: "Frontend Engineer Intern",
      logoUrl: "https://www.hikup.co/assets/images/logo.png",
      start: "July 2022",
      end: "August 2022",
      description:
        "Implemented new features in HTML, CSS, and JavaScript based on client feedback, improving user interaction and satisfaction. Worked with the team to develop and maintain the company website and web applications.",
    },
    {
      company: "Oulier",
      badges: [],
      href: "https://outlier.ai/",
      location: "Remote",
      title: "AI Trainer",
      logoUrl:
        "https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/256x256/e6cbe87f729939dc98b4afbd3afbee34",
      start: "December 2023",
      end: "May 2024",
      description:
        " Trained AI models to improve accuracy in natural language processing (NLP) and machine learning tasks, contributing to the development of intelligent systems.",
    },
    {
      company: "Promo Daddy",
      href: "",
      badges: [],
      location: "Remote",
      title: "Web Developer",
      logoUrl:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAtFBMVEX////z8/P7+/vx8fFAP0Q6OUA1NTY/PkVxcXD19fX4+PhCQUc3Nj2kpKbc3NxAP0IuLy5paWlycnU5OTx6eXwuLDSpqanY2NozMzZBQUQ6Ojqjo6Nsa2/JycnBwcFAQEBGRkbh4eGMjIyVlZUxMDcsKy5LSU9OTk4pKSmurq5ZWVkpKC1FRUW3t7eamprg4OBiYmMdHR2CgYMmJC0bGiLQ0M4UEh0XFxQjIyUcGx9cXGBTUlh7kqXOAAANW0lEQVR4nO2cCX+isNaHIQRoCCO0uACtUivUhWq38b6dme//vd6TsMhmxVoH594885sZZQn5Zzk5JyRKkkAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAg+F8DtaXrjH4NY7YK2mIFN+Ou83s0Pd/UW0N1NX7rOsdHQvwA62pbdKxjd9N1no9jE+JAu27N3KR4oDSmRJTes3KBPXWOdW10xPVvKg0n9cPy8tq3geBqcmEikYPV62NuGLmWOaylMotDjD34g3GI19+Xve/gWIU9G5s/qsfuXZ2CETJNlf0/uJa/MYMns1fhdi1LDQ2OKazU4TayPMuJfz/82Lw9Riqlzn1zT+2GfQo3HwP83HC8rhCOUM9+mCbfRnfQXtVH8t35/Dp7FPZdTLHbMLrXFQYWxhYYq6zC1yHU4s23Z/TLNCpUVialFOvvy9qpmsJZiK2g1Cq379AXG+xtRzQpnD75HjVDHWN7Vj1XVai4Oo62UqHLIulHSPXf58nuF2hQOLZ16Fi3ytwP9PCmYm2qCoeabj5UE11ZND5mkD0rdYVrO6A4glZmvGg6dlZlu1hV+BLQwbSa6MSlzsX4djWFswhT30lq4M32sGqVBFQVxp61qqaJjJg6R42y56SiEPVtj6rzrN5uYSSw7KJJrSicxtSvNVIk/dGt+3Pk9isUFSJJ/u16nvuy63uTyPOsqGBSKwqfB1S7rad6o1q+cZb8Hk+pDqeeCoa+FAD2fIt6i101VRT2wn9K4VaD8C/+UXbWlLnqBfZVduyfVjiGkZpGtaEaXbuUapk5+acVXqlYN0cN7vZbSINFL/n8byvUqZuMDEUHhfHg64N0BP/XFWqJoulyuGQM02B2qNH/DoUqdrlC5afpMkwzNaL7FY5CXFeIQKF3mQr1ROEEQjwA4vUg4Gc+qcN4Tx1evkI3iiKdBk/8zH6F0wH2a/GHJP3WveCcuT6GZoXUud2Oeo84uOdn9is0BnrQ4IGG4LGfMdNHsUehy4bFR/2gQglKQau1x21EnZq32hWnKtxoNBxWx9C+Q6OLeb9xqsLnBdWdyuzh1qa6dTETw6cqZGOMc42Ktaio2LNrs8adcbLC6Tv1tKtCV5zOVWzdX0wVVhXyD0cplNYRtlSadTu0DDHFUe/sGW9NWaEz6gFDk2rDXu8Z7OTTFL4/z/xPFEqbmOp6ON+Me6PJLHAx1eNJ03R5R5QUUi9iQLTkwYgf6xTie4ZjfaIQScPY8jzLgVtcx/M8p2kmuTsKCq/BTWPzwPA389pSMM5nBxvqEA7ObQuCZ8wudeyrS3prUVJ4+24CLvvL/ikA3+PUljQqhOj5Og5DuDIe9HvSBTVRqagQSevb/WRTinsUShLZLm+H695FieMUFbZhr8JLBTlYP2rudmt7/5ZCaQ6BfdN7wn08+LjpPf4FM3OesHtzc8foF8kt/rh49I/pWXbBVo6WD/m5ahpvs3XtjcbZ2L9sS9bYehpzEAKldTVxOkejfBQOmjCCRPk7F2X2FIEBzdbasDQGxTRMzV79lWULRFYUReYo9amFkeZalsXnZTwrh83lr7nxGUWU7g5b1m5N1AY8ARjgrfQ2L0mjkAiGz+799tz6jFRcQoPBVGZzX1swfF/zMwKPJrXYiygOsqNacJ10QiQpK3B9qKrZGr8J/knTyNHsEKrcWpz5PRuRkz9pHSYKjfQ7IRD2wCGD1bKiGAZhsI/TeWQ6H+tEoXkL52V+jl1MiIGkqeZYlhn3J8/8VjhmKEVkeMZ0+RJjL7AfJJI8kN0oIbgUSPOH2GdywihqpNKSVA32hFKtKnJ6GeS+8BFkzm3X/M+SzaZh9xbBkTRFmeUWKcHAdV/fpigpFN44khszkuaynTtUfZ0hJStjwgsd0kd5cnDq6wIlpd42QRXZSSSykRUEN5FE5hKIodxHYfi6hDrE7sbgWUtuZ0gvgRn+mqBdQnCzUkgWrlf4Hagfu9r/bQuliiSSP6348WsYdYEkqzw5E4oKCuX8MKtFLfy5ZApvoWKzcmbnjOWAaq8jVFSUKWRNlheSnFQ7uorccG5kz+RXZv+n+TtlZpWkDWMHSqTx5oryhpMpZGehHxrJlXPbDD8enLpCxcH0dW1krYskPZwpVAw2Jhlp30e8S1ih+crtE+KtA56H0udm/59AvYhk/pCsVhMLsFNIssLlKPOF5kJ4y1ppUaGxdMHXQyTLW1FhXpD8OexyY/yq4bvdlUTJytaQS4/7qkJSVqgUBSaC4YJMYaVE5PvIBItfVSitLDwYEXlXh9ywFBWm7Y9JISgIaEzyu/kDSN4dTgwma3WIKqWWZiRVmNiDwlllHmkODYutlNnBX561QgWFiTEtKUysJ2I3GjPwZcel5+XmoHGEPgZSrUOD7FeY/EdI8Wroiw4t9UNIb/yTarxayw2spDBpHYnCsU3NZeF5/AmJvgYn6zhqdWiQioZyHVYVMosalVspjO3Ld0+bVIqqrpClxRWSHijcVBUap1uZZoVKOVmuKa9DbkrLZ0HiYjElu5ugTn68e9H2kELELBFiCRssas4UZv0gNaMn12FttOCDRaFzJwNXVodcoVy+nZCRYshlhTG2DymU+/0pSXo22e7WFZOsyHMP4MR+yEuqtIC+ai3lmi3dFSuSE8NbMk/QSqEO9ynMj9y9xy8ocXQI9MNwvXueYuSGhlTTOB4+LBUlkpJEOVVmcF8tdRl3Z1OfEaXDQaZw+dP76B1Q6IThvcGdUNlYf2TzAkpaVrzpKN/SFZOenTveRtJMmR7m0stJ4AGXGSyKBGckbTzc4eefFYJQOjLDPdwtIcqL+yDJzQr5U6BkwKldcb9JIcbtInwfI8NIYhyFNZlkGEYyOV1iyRtmDTZzJhWSjbosH8uVZtssDLQraGy7k5Z9e1kbTCIitYE1VZh634T8csNkhstQ0Gxh/uxlXqlSdNaMxNM7TaIhE1JUmKSaqIMz7IGS8fIrjfG9JNrfwUN4z0m/Rb+uebWnBVUu/WSM5yVHpj/dOH0LbBhvtvlzugufkExygybLZR/raxBWfGlgyhtOHg9DHGWweL1vsimWZI5FZ5/4lAv8q6bTLrqaHlX9PkoMIA9zywrZQyD/LLro/VLVPLa/tsN3Ll9J4sg8JyxzxS8nUJ2JQiiPh4FRjHH45+4wf0wvWPSSZOoTW0Z2BP4duXS38WTleaa0e175zr+yr3Fjtt2QttH02o6ZRrYQVearUnU9mH8xa9/Em4rjdi6+YlO11f7DtVuYOA6x//LFrH0TMxPH7eZuUaCrrTK7hIgkm0YkA+p3vC0TAtqw5UvNF1X32vSaW4fmb7qnA6p1vLpmG1Kn5duWvkqjNn7WzKF5s+hBHTasffubTGPqNCxOa+LWpK1WIbw5eVgvjUOqdbsnEUntt0eszWSZxiGuQWF+T0jtrt/sP+reffE7koZXXMe0/1D2W0YD7LRpcSsL4+zz0KT22V9efApb8Iq1Uu+afDgfD2ypjO+WbYTyjp02dnFu6X+yzxtQeMwrynMwM71FcbhAS5dS8/ebTalzVb4UjFKLdZUosPR8VHlTqd31vtml6ZV6CjJ+h1S3/ICqTmXtwR84fDhBollqP1sZcIOp1vWe0rHtmcvyoY3DltT4V9WsvfmBfdj/UWxv5/vAGPr0Hbk8hSlkqDImPzCFenBd9XU2WmAfHi6mC2zm489cVztfMEx8S70rfEfk0cTQQp+oGlWs4ERrs1JhZAda5qEfvdzjLIDp84rflyHEU3cbW69Zmm1EW0QXY1CYDfJGRKFPds2VReOiRRl/uDEMe2PXre4EVmzcIrqYuIGW1fQUFHa/6LvoRnImD7x1KrPbip+NAk89vIt5GXr5IM9fk39PNk8Axr9idPFZ9LDCunUwvR8wwGb2aAwKu/+pDBaSHxFdZMOFMhk2srzTd+uKJu4lrKKaxgXr/jm76GJ6tbA1vwnNolbuxgwdOujWLeVE1GobXbhpdDF+V3UYMvew2/cEvsP731v9tRe2gK/d6nMwjTy66EXgEphsjrGRX7n5fHDo+wWsGp5pnuXetELF+E//pv9oeYE/HO1jV2tXUIcdKsuQNavtD2Ixb47/KJb31KpqVpYenjv7bRj5LgSthWV3n8Em+jFuFexL0r1ldTxbmqLMAh1bYAcPka7sw7rb7o2KHzTt3/v7oGQHU3ltWiPJWzq2pbaVQtkOup4tzcn3PbW6WKftNo4og4ZfzuiIvoqj1mZ9pVNv3iZy3zbthe6IIftpIL7x6SCjN5P9fJm1PHj52NNx53OJGco7eChR9SVwI5GKKTg0lnb4UrDQl2FKGesFzvY8fYrnUUq1K833qHfgSky94OMCvNKMiToIzVaEg5n0fB23uDqeX8wvRrERA42HP1ox4SZpuj54+fKCKlAgOEBn2/am/au/Qb+7GHhutv8V4a+jm49dCUSOTtv/FPSXodjprJVODodL34Drdzbbho74QfYTMNBl7X4WCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCARn5v8B/RA+kixSSwkAAAAASUVORK5CYII=",
      start: "June 2024",
      end: "September 2024",
      description:
        "Implemented major features for multiple clients and projects. Worked on the frontend and backend of the projects. Tasks varying from landing pages to full-fledged web applications with some complex requests such as Websockets and pubsub severs.",
    },
  ],
  education: [
    {
      school: "Ever Shine Senior Secondary School",
      href: "https://www.evershineschool.com/",
      degree: "High School",
      logoUrl:
        "data:image/png;base64,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",
      start: "2009",
      end: "2021",
    },
    {
      school: "Poornima College Of Engineering",
      href: "https://www.poornima.org/",
      degree: "Btech in Computer Science",
      logoUrl:
        "data:image/png;base64,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",
      start: "2021",
      end: "Present",
    },
  ],
  projects: [
    {
      title: "AI Content Generator",
      href: "https://github.com/pranjal-rastogi/Creator-AI",
      dates: "",
      active: true,
      description:
        "This AI-powered content generation platform allows creators to input any text or ideas, generating comprehensive and tailored outputs across various fields. ",
      technologies: [
        "Next.js",
        "React",
        "TailwindCSS",
        "Drizzle ORM",
        "Clerk Auth",
        "Razorpay",
        "Typescript",
        "Gemini API",
      ],
      links: [
        {
          type: "Website",
          href: "https://creator-ai-tau.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/pranjal-rastogi/Creator-AI",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Coollors",
      href: "https://github.com/pranjal-rastogi/Coollors",
      dates: "",
      active: true,
      description:
        "This application enables users to easily create, customize, and save color palettes, providing a seamless experience for designers, developers, and creatives. ",
      technologies: [
        "Next.js",
        "Typescript",
        "Supabase",
        "Clerk Auth",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://coollors.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/pranjal-rastogi/Coollors",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },

    {
      title: "Web Inspire",
      href: "https://github.com/pranjal-rastogi/web-inspire",
      dates: "",
      active: true,
      description:
        "A curated list of good looking websites. The goal is to inspire and help you create beautiful websites.",
      technologies: [
        "Next.js",
        "Typescript",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Vercel",
        "PlayWright",
      ],
      links: [
        {
          type: "Website",
          href: "https://web-inspire-three.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/pranjal-rastogi/web-inspire",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "MediaSnip",
      href: "https://github.com/pranjal-rastogi/MediaSnip",
      dates: "",
      active: true,
      description:
        "A simple cli tool written in Golang to download, trim and convert video in video or audio format with timestamp support. All via a console.",
      technologies: [
        "Golang",
        "Bash",
        "ffmpeg",
        "yt-dlp",
        "File system",
        "Linux",
        "CLI",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/pranjal-rastogi/MediaSnip",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Resume Builder",
      href: "https://github.com/pranjal-rastogi/Resume-Builder",
      dates: "",
      active: true,
      description:
        "A resume builder website is a web-based tool that allows users to create and customize a professional resume to their desired specifications. These websites typically provide templates for creating a resume.",
      technologies: ["React", "Javascript", "TailwindCSS"],
      links: [
        {
          type: "Website",
          href: "https://resume-builder-tau-indol.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/pranjal-rastogi/Resume-Builder",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Paint",
      href: "https://github.com/pranjal-rastogi/Paint",
      dates: "",
      active: true,
      description:
        "This drawing tool website will allow users to create freehand sketches, lines, rectangles, and add text. Users can customize the drawing tools by adjusting colors, stroke width, and other properties. ",
      technologies: ["React", "TalwindCSS", "HTML5", "Javascript"],
      links: [
        {
          type: "Website",
          href: "https://paint-pearl.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/pranjal-rastogi/Paint",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Booking App",
      href: "https://github.com/pranjal-rastogi/booking-app",
      dates: "",
      active: true,
      description:
        "The Go Conference Booking Application is a command-line tool that allows users to book tickets for the Go Conference. Users enter their details and ticket quantity, and the app confirms their booking. It uses concurrency to handle multiple bookings, struct-based data storage for user details, and validates inputs for a smooth booking experience.",
      technologies: ["Golang", "Bash"],
      links: [
        {
          type: "Source",
          href: "https://github.com/pranjal-rastogi/booking-app",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Todo List",
      href: "https://github.com/pranjal-rastogi/todo-list",
      dates: "",
      active: true,
      description:
        "The React Todo List with Local Storage project is a web-based task management application developed using React, designed to empower users to organize their tasks effectively while utilizing local storage for data persistence.",
      technologies: ["React", "TailwindCSS"],
      links: [
        {
          type: "Website",
          href: "https://todo-list-flame-three.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/pranjal-rastogi/todo-list",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
} as const;
