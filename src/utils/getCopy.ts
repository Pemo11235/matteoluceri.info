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
    text: 'I\'m Matteo and I am a front-end developer with 3 years of experience under my belt. I am a Javascript pro and have a solid background in front-end development. I have worked on several projects and technologies, such as Next.js, Node.js, and React Native; and I support the "javascript everywhere" philosophy. On top of that, I am a huge music lover, especially when it comes to playing guitar and writing songs. ',
    text_b:
      'My mission? To make the world a more beautiful place, one pixel - or one note - at a time !',
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
            start: 'October 2022',
            end: 'Present',
          },
          jobTitle: 'Front-End Developer ',
          company: 'Caffeina | Ideas Never Sleep',
          description:
            'I had opportunity to work on a unique and exciting project for client Merck. I developed a web application that translates brain impulses collected with an EEG helmet into artistic representations. I used vanilla Javascript, HTML, CSS, Browserify, and especially HTML Canvas to generate the artwork. In addition, I created a mosaic containing all the generated "synaptic portraits." I had the opportunity to install, present and manage the activity during the event, receiving positive feedback for both the technical aspect and my communication skills.',
        },
        {
          period: {
            start: 'November 2021',
            end: 'October 2022',
          },
          jobTitle: 'Front-End Developer Consultant',
          company: 'Axelerant',
          description:
            'At Axelerant (formerly Innoteam), I worked as a front-end consultant for BrumBrum, a major client, where I supported the front-end team in developing new features and maintaining websites.',
        },
        {
          period: {
            start: 'November 2020',
            end: 'November 2021',
          },
          jobTitle: 'App/Front-End Developer',
          company: 'I-tel',
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
        projectTitle: 'matteoluceri.info',
        description:
          'Sounds very recursive! I started making this site a bit for fun and a bit to test my skills, using my site as a small laboratory to experiment. I refer to the Github page for more details!',
        linkGithub: 'https://github.com/Pemo11235/matteoluceri.info',
        imageSrc: '/images/matteoluceri.info.png',
      },
    ],
  },
  contactCopy: {
    title: 'Contact',
    subtitle: 'Feel free to contact me !',
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
