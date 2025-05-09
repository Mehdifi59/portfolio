/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Mehdi Zarouri",
  title: "Bonjour, Je Suis Mehdi",
  subTitle: emoji(
    "Étudiant en 2ᵉ année passionné par les systèmes, les réseaux et la cybersécurité 🔐. Actuellement en stage au Campus Cyber à EuraTech, je suis curieux, motivé, et toujours prêt à apprendre et à relever de nouveaux défis techniques 🚀."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Mehdifi59",
  linkedin: "https://fr.linkedin.com/in/mehdi-zarouri-49271a354",
  gmail: "memezed59@gmail.com",
  gitlab: "https://gitlab.univ-lille.fr/mehdi.zarouri.etu",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Ce que je fais",
  subTitle: "ÉTUDIANT PASSIONNÉ PAR LES SYSTÈMES, LES RÉSEAUX ET LA CYBERSÉCURITÉ 🔐",
  skills: [
    emoji("⚡ Surveillance, sécurisation et administration des systèmes et réseaux"),
    emoji("⚡ Analyse de vulnérabilités et participation à des tests d’intrusion"),
    emoji("⚡ Mise en place de solutions de sécurité (pare-feu, VPN, antivirus, etc.)"),
    emoji("⚡ Apprentissage des concepts liés à l’ethical hacking et à la protection des données")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "Windows Server",
      fontAwesomeClassname: "fab fa-windows"
    },
    {
      skillName: "Wireshark",
      fontAwesomeClassname: "fas fa-network-wired"
    },
    {
      skillName: "Virtualisation (VMware, VirtualBox)",
      fontAwesomeClassname: "fas fa-desktop"
    },
    {
      skillName: "Bash / Shell",
      fontAwesomeClassname: "fas fa-terminal"
    },
    {
      skillName: "Python (scripts de sécurité)",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "TCP/IP, DNS, DHCP",
      fontAwesomeClassname: "fas fa-project-diagram"
    },
    {
      skillName: "Outils de cybersécurité (Nmap, Metasploit, etc.)",
      fontAwesomeClassname: "fas fa-shield-alt"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "C",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Université de Lillle",
      logo: require("./assets/images/universite_de_lille_logo.jpeg"),
      subHeader: "BUT Informatique",
      duration: "Septembre 2023 - Juin 2026",
      desc: "Spécialité Systèmes, réseaux et cybersécurité",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      schoolName: "Lycée Colbert",
      logo: require("./assets/images/logo_colbert.png"),
      subHeader: "Baccalauréat STI2D",
      duration: "Semptembre 2020 - Juillet 2021",
      desc: "Mention assez bien",
      //descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Systèmes & Réseaux",
      progressPercentage: "80%"
    },
    {
      Stack: "Cybersécurité",
      progressPercentage: "70%"
    },
    {
      Stack: "Programmation (C, Python, Bash)",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Stagiaire en Cybersécurité & IT",
      company: "Campus Cyber (EuraTechnologies)",
      companylogo: require("./assets/images/campuscyberfr_logo.jpeg"), // Remplace ou ajoute une image si tu en as une
      date: "Mai 2024 – Juin 2024",
      desc: "Stage de 2 mois en immersion dans les environnements Cybersécurité et IT.",
      descBullets: [
        "Implémentation de Ludus pour tester une CyberRange open-source",
        "Création de contenus pentest (IoT, Blue Team, intrusion physique)",
        "Test et validation de contenus existants",
        "Renouvellement de parc (12 PC sous Windows 11) et migration depuis Windows 10",
        "Configuration d’infrastructures réseaux et supervision des sauvegardes",
        "Mise à jour de la documentation et gestion de l’inventaire des comptes SaaS"
      ]
    },
    {
      role: "Stagiaire en import/export bancaire",
      company: "Société Générale",
      companylogo: require("./assets/images/societe_general_logo.png"), // Ajoute ton image si disponible
      date: "Août 2021",
      desc: "Découverte du fonctionnement des flux financiers internationaux au sein du service import/export."
    }
  ]
};
/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projets Académiques",
  subtitle: "Quelques projets que j'ai pu faire durant mon cursus académique",
  projects: [
    {
      image: require("./assets/images/matrix.png"),
      projectName: "Déploiement Matrix/Synapse",
      projectDesc: "Déploiement de matrix et de synapse pas à pas en détaillant chaque procédure.",
      footerLink: [
        {
          name: "Voir le code source",
          url: "https://gitlab.univ-lille.fr/etu/2024-2025/s303/j-khachnane-mihoubi-zarouri"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/Odoo_Official_Logo.png"),
      projectName: "Déploiement Odoo",
      projectDesc: "Déploiement de Odoo automatique via des scripts bash.",
      footerLink: [
        {
          name: "Voir le code source",
          url: "https://gitlab.univ-lille.fr/aymane.benafquir.etu/sae_odoo"
        }
      ]
    },
    {
      image: require("./assets/images/graphique.png"),
      projectName: "Developemment d'une Application Classification",
      projectDesc: "Développement en équipe d'une application de classification KNN",
      footerLink: [
        {
          name: "Voir le code source",
          url: "https://gitlab.univ-lille.fr/sae302/2024/J4_SAE3.3"
        }
      ]
    },
    {
      image: require("./assets/images/itineraire.png"),
      projectName: "Logiciel de calcul d'itinéraire",
      projectDesc: "Développement d'un logiciel permettant de calculer des itinéraires à l'aide de l'algorithme de Djikstra",
      footerLink: [
        {
          name: "Voir le code source",
          url: "https://gitlab.univ-lille.fr/sae2.01-2.02/2024/B4"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "CV",
  subtitle: "Vous pouvez télécharger mon cv ici",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Me contacter ☎️"),
  subtitle:
    "Pour discuter d'un projet ou simplement me dire bonjour ? Ma boite est ouverte à tout !.",
  email_address: "memezed59@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
