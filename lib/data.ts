import lowdingDesktop from "/public/portfolio/lowding-wide1-comp.jpg";
import phasmicDesktop from "/public/portfolio/phasmic-wide1.png";
import portDesktop from "/public/portfolio/port-wide1.png";
import wacmn from "/public/portfolio/wacmn.png"

import wacmnMobile from "/public/portfolio/mapsMobile.jpg"
import phasmicMobile from "/public/portfolio/phasmicMobile.jpg"
import lowdingMobile from "/public/portfolio/lowdingMobile.jpg"
import portMobile from "/public/portfolio/portMobile.jpg"

import wacmnSquare from "/public/portfolio/wacmnSquare.png"
import lowdingThumbnail from "/public/portfolio/lowdingThumbnail.png"
import portThumbnail from "/public/portfolio/portThumbnail.png"
import phasmicThumbnail from "/public/portfolio/phasmicThumbnail.png"

export const experience = [
    {
      id: 0,
      title: "Web Developer",
      employer: "WACMN",
      subtitle: "Western Australian Coastal and Marine Management Network",
      times: "2024 - ",
      description:
        "Currently the primary web developer for the WACMN's modernisation scheme. Tasked with collating info, structuring databases and creating web apps with React to fulfil the organisation's government brief.",
      link: "https://wacmnstewards.info",
    },
    {
      id: 1,
      title: "Developer •",
      employer: "Freelance",
      subtitle: "Frontend & web development",
      times: "2023 - ",
      description:
        "Web apps and frontends. Daily usage of React, Next.js, HTML5, Typescript, Node.js, CSS & Figma. Design, coding, backend set-up and deployment. Special emphasis on accessibility and reliability. See Projects below for some examples. ",
      link: "https://eamontravers.dev/#projects",
    },
    {
      id: 2,
      title: "MBA/EMBA Programme Coordinator •",
      employer: "Freelance / AUSTRAL TRAVEL",
      subtitle: "Programme coordination and delivery.",
      times: "2021 - ",
      description:
        "Being the person on the ground who has to bring all the threads of a programme together, and deliver it. With some universities, I'm essentially a glorified tour guide. For others, an active member of sessions with organisations like DIHK, Silicon Allee, Google & Bayer. I've been lucky enough to work with some great schools like the Cambridge Judge Business School, the Jones Graduate School at Rice and London Business School.",
      link: "https://australgroup.com/",
    },
    {
      id: 3,
      title: "Digital Audio Engineer •",
      employer: "Petersburg Art Space",
      subtitle: "Concert & Exhibition Spaces",
      times: "2020 - ",
      description:
        "Live audio and mix engineer in a bustling Berlin art space and event venue. The only constant here is the expectation that the work is at a high enough level to represent the venue. Shows vary from single night touring intl artists to government funded installation art.",
      link: "https://pas-berlin.org/pas-eng/",
    },
    {
      id: 4,
      title: "Vice-Chair/Prod Manager/Co-Founder •",
      employer: "Common Grounds Collective",
      subtitle: "Artists' collective",
      times: "2016 - 2019",
      description:
        "Founder and vice-chair of a successful Artists' collective. Creative and Technical director for core events, including slots at all major Irish festivals & flying 8200km to put on a festival in Parkfield, California.",
      link: "https://www.facebook.com/feileparkfield",
    },
    {
      id: 5,
      title: "Musical director, composer & performer",
      employer: "Freelance",
      subtitle: "Piano, drums, electronics & guitar",
      times: "2013 - present",
      description:
        "I've been lucky enough to tour internationally with some original projects as well as commercial productions. I also occasionally compose for radio/indie-films. ",
      link: "https://open.spotify.com/track/7vKPf1pOrAFmgq4Rp9JSa2?si=03c4d9e006ea43e4",
    },
  ];

  export const PROJECTS = [
    {
      id: 0,
      name: "WACMN Map",
      githubLink: "https://github.com/EamonEarth/maps-ts",
      link: "http://www.wacmnstewards.info",
      linkTitle: "www.wacmnstewards.info",
      image: wacmn,
      mobileImage: wacmnMobile,
      thumbnail: wacmnSquare,

      shortDescription:
        "Interactive Stakeholder Map for the Western Australian Coastal and Marine Network",
      longDescription: {
        text: "Web app designed to help those working in the sector conveniently search, filter and contact relevant organisations. Funded by the Australian Government, I designed and built all parts of the site. Auto-updates to include new Stakeholders",
        listTitle: "",
        listPoints: [
          
        ],
      },
      technologies: ["react", "html", "css", "typescript", "airtable", "tailwind"],
    },
    {
      id: 1,
      name: "Phasmic",
      githubLink: "https://github.com/EamonEarth/phasmic",
      image: phasmicDesktop,
      mobileImage:  phasmicMobile,
      thumbnail: phasmicThumbnail,

      shortDescription: "Creative & professional landing page for a Neustart Kultur application",
      longDescription: {
        text: "Bold but functional. Slick and grungy homepage for an contemporary art production house",
        listTitle: "Worth a mention:",
        listPoints: [
          "Custom randomiser to select from fontArray for the Header element.",
          "Constant design balance between quirky and respectable",
          "Nodemailer implementation",
        ],
      },
  
      technologies: [
        "UX",
        "Nodemailer",
        "Node",
        "html",
        "css",
        "typescript",
        "tailwind",
        "figma",
      ],
    },
    {
      id: 2,
      name: "Project Lowding",
      githubLink: "https://github.com/EamonEarth/Lowding",
      image: lowdingDesktop,
      mobileImage: lowdingMobile,
      thumbnail: lowdingThumbnail,


      shortDescription:
        "Neat little design thesis project advocating for lower impact design choices. ",
      longDescription: {
        text: "A fun challenge to reinforce the theme/brand of the website with web development choices. As well as building the site I refined the UX.",
        listTitle: "Worth a mention:",
        listPoints: [
          "Pixel-perfect fidelity with the designer's mock-up, achieved with Figma and silky communication.",
          "Performant/efficient development choices were a must, at the risk of hypocrisy! Achieved both with general best practices and framework specific resources.",
        ],
      },
      technologies: ["figma", "html", "css", "typescript", "prisma", "tailwind"],
    },
    {
      id: 3,
      name: "Portfolio Site",
      githubLink: "https://github.com/EamonEarth/Godfather",
      image: portDesktop,
      mobileImage: portMobile,
      thumbnail: portThumbnail,

      shortDescription: "Every detail counts on this sleek portfolio homepage.",
      longDescription: {
        text: "Built with NextJS. Site skeleton inspired by Brittany Chiang's beautiful site.",
        listTitle: "Some details you might have missed:",
        listPoints: [
          "Integration with RESTful APIs to populate the Haiku generation with user info (no user information is saved).",
          "sessionStorage used to persist contact form drafts, with state and storage being reset upon completion/deletion.",
          "Intersection Observers and complex state-management enable a confident and smooth UX.",
        ],
      },
  
      technologies: [
        "ChatGPT",
        "nextjs",
        "APIs",
        "html",
        "css",
        "typescript",
        "tailwind",
        "figma",
      ],
    },
  ];