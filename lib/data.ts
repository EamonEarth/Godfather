import lowdingMobile from "/public/portfolio/lowding-wide0-comp.jpg";
import lowdingDesktop from "/public/portfolio/lowding-wide1-comp.jpg";
import phasmicMobile from "/public/portfolio/phasmic-wide0.png";
import phasmicDesktop from "/public/portfolio/phasmic-wide1.png";
import portMobile from "/public/portfolio/port-wide0.png";
import portDesktop from "/public/portfolio/port-wide1.png";
import wacmn from "/public/portfolio/wacmn.png"

export const experience = [
    {
      id: 0,
      title: "Developer •",
      employer: "Freelance",
      subtitle: "Software + Web Development",
      times: "2023 - ",
      description:
        "Software, SPAs and custom Websites. Mostly frontend focused for personal and professional clients, predominantly built with React. Design, coding, backend set-up and deployment. Special emphasis on accessibility and reliability. See Projects below for some examples. ",
      link: "https://eamontravers.dev/#projects",
    },
    {
      id: 1,
      title: "MBA/EMBA Programme Coordinator •",
      employer: "Freelance / AUSTRAL TRAVEL",
      subtitle: "Programme coordination and delivery.",
      times: "2021 - ",
      description:
        "Being the person on the ground who has to bring all the threads of a programme together, and deliver it. With some universities, I'm essentially a glorified tour guide. For others, an active member of sessions with organisations like DIHK, Silicon Allee, Google & Bayer. I've been lucky enough to work with some great schools like the Cambridge Judge Business School, the Jones Graduate School at Rice and London Business School.",
      link: "https://australgroup.com/",
    },
    {
      id: 2,
      title: "Digital Audio Engineer •",
      employer: "Petersburg Art Space",
      subtitle: "Concert & Exhibition Spaces",
      times: "2020 - ",
      description:
        "In-house live-audio and mixing engineer in a bustling Berlin art space and event venue. The only constant here is the expectation that the work is at a high enough level to represent the venue. Shows vary from single night touring intl artists to government funded installation art.",
      link: "https://pas-berlin.org/pas-eng/",
    },
    {
      id: 3,
      title: "Vice-Chair/Prod Manager/Co-Founder •",
      employer: "Common Grounds Collective",
      subtitle: "Artists' collective",
      times: "2016 - 2019",
      description:
        "Founder and vice-chair of a successful Artists' collective. Creative and Technical director for core events, including slots at all major Irish festivals & flying 8200km to put on a festival in Parkfield, California.",
      link: "https://www.facebook.com/feileparkfield",
    },
    {
      id: 4,
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
      link: "https://github.com/EamonEarth/Lowding",
      images: [wacmn],
  
      shortDescription:
        "Interactive Stakeholder Map for the Western Australian Coastal and Marine Network",
      longDescription: {
        text: "Designed to help those working in the sector to be able to conveniently find relevant, active organisations based on individual focus areas. Funded by the Australian Government, I was just given a short written brief and database access. Auto-updates to include new Stakeholders",
        listTitle: "",
        listPoints: [
          
        ],
      },
      technologies: ["react", "html", "css", "typescript", "airtable", "tailwind"],
    },
    {
      id: 1,
      name: "Project Lowding",
      link: "https://github.com/EamonEarth/Lowding",
      images: [lowdingDesktop, lowdingMobile],
  
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
      id: 2,
      name: "Phasmic",
      link: "https://github.com/EamonEarth/phasmic",
      images: [phasmicDesktop, phasmicMobile],
      shortDescription: "Weird meets wonderful for quirky company site",
      longDescription: {
        text: "The client expressed a desire to appear independant while still exuding corporate efficiency. As the site has to appeal both to artists and financiers, we tried to walk the line between interesting and inoffensive.",
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
      id: 3,
      name: "Portfolio Site",
      link: "https://github.com/EamonEarth/Godfather",
      images: [portDesktop, portMobile],
      shortDescription: "Every detail counts on this sleek portfolio homepage.",
      longDescription: {
        text: "Built with NextJS. Site skeleton inspired by Brittany Chiang's beautiful site.",
        listTitle: "Some details you might have missed:",
        listPoints: [
          "Integration with RESTful APIs to populate the Haiku generation with user info (no user information is saved).",
          "LocalStorage used to persist contact form drafts, with state and storage being reset upon completion/deletion.",
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