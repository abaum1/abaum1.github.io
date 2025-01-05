
import profile from './profile.jpg';
import { faGoogle, faGithub, arrowRight, faGooglePlay, faGoogleDrive } from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons';

export const navigation = {
  name: "Amelia",
  links: [
    {
      title: "About",
      link: "#about",
    },
    {
      title: "Projects",
      link: "#projects",
    },
    {
      title: "Talks",
      link: "#talks",
    },
    {
      title: "Contact",
      link: "#contact",
    },
    {
      title: "Links",
      link: "/links",
    },
  ],
}
export const intro = {
  title: "Amelia Baum",
  description: "Currently: Masters Student @ MIT Transit Lab | Formerly: Software Engineer @ Swiftly, Inc.",
  image: profile.src,
  buttons: [
    {
      title: "Contact Me",
      link: "#contact",
      isPrimary: true,
    },
    {
      title: "Resume",
      link: "https://docs.google.com/document/d/1SG2S9Gy1tyDesWskZaemnE_qs_W1mjEtShKS09XS0fI/edit?tab=t.0",
      isPrimary: false,
    },
  ],
}

export const about = {
  title: "Who I am",
  description: [
    "I am a transit technology professional with 5 years of experience working in fast-paced, innovative industry and research environments. My technical background in transportation planning, data science, and software engineering, combined with experience working in the public transit domain, has allowed me to deliver diverse projects effectively to a variety of stakeholders.",
  ],
}

export const talks = {
  title: "Talks",
  link: "Talks",
  cards: [
    {
      title: "Improving Bus Operator Quality of Life: Scheduling Innovations and A Validation Plan",
      description: "Washington Metropolitan Area Transit Authority | Washington, D.C. | January 9, 2025",
      icons: null,
    },
    {
      title: "Bus Operator Work Preferences: A Case Study at Chicago Transit Authority",
      description: "TRB | Washington, D.C. | January 6, 2025",
      icons: null,
    },
    {
      title: "Block Run Scheduling For Bus Driver Retention",
      description: "GIRO Users Conference | Montreal, QC | September 13, 2024",
      icons: null,
    },
    {
      title: "A Clustering Based Analysis for Understanding Bus Driver Work Preferences",
      description: "Transit Data Conference | London, UK | July 2, 2024",
      icons: null,
    },
    {
      title: "A Bold Proposal For Block Run Scheduling",
      description: "Chicago Transit Authority | Chicago, IL | June 3, 2024",
      icons: null,
    },
    // {
    //   title: "Schedule Design for Bus Driver Retention",
    //   description: "Washington Metropolitan Area Transit Authority | Washington, D.C. | January 12, 2024",
    //   icons: null,
    // },
    {
      title: "Schedule Design for Bus Driver Retention",
      description: "Chicago Transit Authority | Chicago, IL | February 17, 2024",
      icons: null,
    }
  ],
}

export const projects = {
  title: "Projects",
  cards: [
    {
      title: "Marginal Or Meaningful?",
      description: "An immersive tool for exploring the impacts of the MBTA Communities Act",
      icons: [
        {
          icon: faGoogle,
          link: "https://www.mbtaca.homes/",
        },

      ]
    },
    {
      title: "Reinforcement Learning for Extraboard Operator Assignment",
      description: "A project to optimize extraboard operator assignment using reinforcement learning",
      icons: [
        {
          icon: faGithub,
          link: "https://github.com/abaum1/1.200-project",
        },
        {
          icon: faGoogleDrive,
          link: "https://docs.google.com/presentation/d/1anEAXVbz81D2XNCvcjuw7p-StROPhREMYzv59s-w_X8/edit#slide=id.p",
        },

      ]
    },
    {
      title: "SF Travel Demand Tool",
      description: "A user-friendly, public-facing Javascript web application to visualize projected travel demand for proposed developments in San Francisco",
      icons: [
        {
          icon: faGithub,
          link: "https://sftraveldemand.sfcta.org/",
        },
      ]
    },
  ],
}

export const contact = {
  title: "Get in touch",
  description: "Want to talk about buses, trains, bikes or a cool role in transit technology? Please email me at amelia_b@mit.edu.",
  buttons: [
    {
      title: "Email Me",
      link: "mailto:amelia_b@mit.edu",
      isPrimary: true,
    },
  ]
}

// SEARCH ENGINE 
export const SEO = {
  // 50 - 60 char  
  title: "Masters Student | Transit Technology Professional",
  // description: "TODO bio",
  image: profile.src,
}

export const links = {
  image: profile.src,
  title: "@abaum1",
  description: "Masters Student | Transit Technology Professional",
  cards: [
    {
      title: "My GitHub",
      link: "https://github.com/abaum1/",
    },
    {
      title: "My LinkedIn",
      link: "https://www.linkedin.com/in/ameliabaum/",
    },
  ]
}