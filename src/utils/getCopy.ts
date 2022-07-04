import { LabelType } from './../components/Contact'
export const getCopy = () => ({
  color: {
    orange: '#EEA302',
    red: '#FF3B25',
    cyan: '#80D8DA',
  },
  headerCopy: {
    name: 'Matteo Luceri',
    jobRole: 'Front-end Developer',
    shortJobRole: 'Front-End Dev',
  },
  cta: {
    button1: 'Resume',
    button2: 'Projects',
    button3: 'Contact',
    color: {
      orange: '#EEA302',
      red: '#FF3B25',
      cyan: '#80D8DA',
    },
  },
  homeCopy: {
    greeting: 'Hello World!',
    text: "My name is Matteo Luceri I'm a Front End Engineer based in Ravenna ☀️. I describe myself as a passionate developer who loves coding 💻  and creating things. I'm currently working as a Front-End Developer at Innoteam where I work as front-end consultant. I'm also graduate in Computer Science. 🎓",
  },
  footerCopy: {
    phone: '+39 340 73 67 218',
    email: 'matteoluceri@msn.com',
    linkedIn: 'https://www.linkedin.com/in/matteoluceri/',
    github: 'https://www.github.com/pemo11235/',
  },
  resumeCopy: {
    title: 'Resume',
    section1: {
      title: 'Work Experience',
      items: [
        {
          period: {
            start: 'November 2021',
            end: 'Present',
          },
          jobTitle: 'Front-End Developer Consultant',
          company: 'Innoteam S.r.l.',
          description:
            'FE consultant at the moment for a big Milan company. I’m supporting FE team to maintain, refactor and to re-brand the web-site after company acquisition.',
        },
        {
          period: {
            start: 'November 2020',
            end: 'November 2021',
          },
          jobTitle: 'App/Front-End Developer',
          company: 'I-tel S.r.l.',
          description:
            'Development of native app in Android. Development of cross-platform mobile applications in React Native.',
        },
        {
          period: {
            start: 'March ',
            end: 'June 2020',
          },
          jobTitle: 'Undergraduate Internship',
          company: 'Università degli Studi di Bari "Aldo Moro"',
          description:
            'I did my internship in the math department where I did a research and development about ”Compressive Sensing(CS) in Smart Grid (SG) monitoring systems”.',
        },
        {
          period: {
            start: '2015 ',
            end: '2017',
          },
          jobTitle: 'Woodworking and renovation',
          company: '',
          description: '',
        },
        {
          period: {
            start: '2011 ',
            end: '2015',
          },
          jobTitle: 'Waiter',
          company: '',
          description: '',
        },
      ],
    },
    section2: {
      title: 'Education',
      items: [
        {
          period: {
            start: '2017 ',
            end: '2020',
          },
          jobTitle: 'BSc: Computer Science And Digital Communication',
          company: 'Università degli Studi di Bari "Aldo Moro"',
          description:
            'Theoretical foundations of programming, languages and algorithms, computability and complexity, methods for multimedia applications aimed at a wide range of application domains.',
        },
        {
          period: {
            start: '2008',
            end: '2012',
          },
          jobTitle: 'High School Diploma',
          company: 'I.I.S.S. ”Luigi Einaudi” - Manduria',
          description:
            'Focus on: Programming, Law and Economics. Programmer-Accountant Diploma',
        },
      ],
    },
    section3: {
      title: 'Skills',
      items: [
        {
          period: {
            start: '',
            end: '',
          },
          jobTitle: 'Hard Skills',
          company: '',
          description: [
            'Javascript*',
            'CSS*',
            'HTML*',
            'Typescript*',
            'React*',
            'Next.js',
            'React Native',
            'Storybook',
            'Chromatic',
            'Redux',
            'Cypress',
            'Jest',
            'StyledComponents',
            'Webpack',
            'NodeJs',
            'Vim',
            'Git',
            'MacOS',
            'Linux',
            'Windows',
            'Latex',
            'Android',
            'Java',
            'MATLAB',
          ],
        },
        {
          period: {
            start: '',
            end: '',
          },
          jobTitle: 'Clifton Strength',
          company: '',
          description: [
            'Intellection?',
            'Learner?',
            'Input?',
            'Restorative?',
            'Connectedness?',
          ],
          tooltipDescription: [
            'Introspective and appreciate intellectual discussions.',
            'Desire to learn and want to continuously improve.',
            'Need to collect and archive: information, ideas, artifacts or even relationship.',
            'Adept at dealing with problems.Good at figuring out what is wrong and resolving it.',
            'Faith in the links among all things: there are few coincidences almost every event has meaning.',
          ],
        },
      ],
    },
  },
  projectsCopy: {
    title: 'Projects',
    projects: [
      {
        id: 'project_1',
        projectTitle: 'Full Stack Open 2021-2022',
        description:
          'FSO or Full Stack Open is the University of Helsinki’s free massive open online course (MOOC) on Web Development. This course introduce to React, Redux, Node.js, MongoDB, GraphQL ,TypeScript and React Native in one go! FSO leads to modern JavaScript-based web development. The main focus is on building single page applications with ReactJS that use REST APIs built with Node.js.The course is split up into 12 parts.Those present in the repo are my solutions to the exercises.',
        linkGithub: 'https://github.com/Pemo11235/FSO2021-Full-Stack-Open-2021',
        imageSrc: '/images/certificate-fullstack.png',
      },
      {
        id: 'project_2',
        projectTitle: 'Compressive Sensing in Smart Grids monitoring systems',
        description:
          'Smart Grid (SG) technology transforms the traditional power network from a physical level into systems that comprise two levels side by side, the physical and the informative. Collecting, transferring and analyzing an enormous amount of data that can be acquired by different nodes in the network, together with the uncertainty caused by distributed power generators, challenges standard methods for safety and monitoring in future SGs.This thesis presents an effective dynamic solution for SG monitoring by combining concepts related to Compressive Sensing (CS) and Sparse Recovery (SR). Following a preliminary analysis of the stated concepts, a study is proposed to implement a SG model in MATLAB, with the aim to show and finally to compare some applications of CS - SR algorithmic techniques that are going to obtain effective problem solutions.',
        linkGithub:
          'https://github.com/Pemo11235/Bachelor-Thesis-Compressive-Sensing-in-Smart-Grids-monitoring-systems',
        imageSrc: '/images/tesi.png',
      },
      {
        id: 'project_3',
        projectTitle: 'Full Stack Open 2021-2022',
        description:
          'FSO or Full Stack Open is the University of Helsinki’s free massive open online course (MOOC) on Web Development. This course introduce to React, Redux, Node.js, MongoDB, GraphQL ,TypeScript and React Native in one go! FSO leads to modern JavaScript-based web development. The main focus is on building single page applications with ReactJS that use REST APIs built with Node.js.The course is split up into 12 parts.Those present in the repo are my solutions to the exercises.',
        linkGithub: 'https://github.com/Pemo11235/FSO2021-Full-Stack-Open-2021',
        imageSrc: '/images/certificate-fullstack.png',
      },
    ],
  },
  contactCopy: {
    title: 'Contact',
    subtitle: 'Feel free to contact me anytime!',
    contactInfo: {
      email: 'matteoluceri@msn.com',
      phone: '+39 340 73 67 218',
    },
    contactForm: {
      name: {
        placeholder: 'Insert your name',
        required: true,
        label: 'name' as LabelType,
      },
      lastName: {
        placeholder: 'Insert your last name',
        required: true,
        label: 'last name' as LabelType,
      },
      email: {
        placeholder: 'Insert your e-mail',
        required: true,
        label: 'email' as LabelType,
      },
      message: {
        placeholder: 'Please insert a message',
        required: true,
        label: 'message' as LabelType,
      },
      subject: {
        placeholder: 'Insert the subject',
        required: true,
        label: 'subject' as LabelType,
      },
      submit: 'Submit',
      success: 'Message sent successfully!',
      error: 'Error sending message!',
    },
  },
  assets: {
    avatar: '/images/download.png',
    coloredAvatars: [
      '/images/orange-avatar.png',
      '/images/red-avatar.png',
      '/images/cyan-avatar.png',
    ],
  },
})
