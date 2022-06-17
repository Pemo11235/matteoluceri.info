import { Header, Home, Footer } from './components'
import Resume from './components/Resume'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
function App() {
  const t = {
    headerCopy: {
      name: 'Matteo Luceri',
      jobRole: 'Front-end Developer',
      shortJobRole: 'Front-End Dev',
    },
    cta: {
      button1: 'Resume',
      button2: 'Project',
      button3: 'Contact',
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
              end: '2013',
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
            description:
              'Javascript, Typescript, React, Next.js, React Native, Storybook, Chromatic, Redux, Cypress, Jest, StyledComponents, Webpack, Nodejs, Vim, Git, Mac, Linux, Windows, Latex, Android, Java, MATLAB',
          },
          {
            period: {
              start: '',
              end: '',
            },
            jobTitle: 'Clifton Strength',
            company: '',
            description:
              'Intellection, Learner, Input, Restorative, Connectedness',
          },
        ],
      },
    },
    assets: {
      avatar: 'assets/download.png',
    },
  }
  return (
    <Router>
      <Header headerCopy={t.headerCopy} headerButton={t.cta} />
      <Routes>
        <Route
          path='/'
          element={
            <Home
              homeButton={t.cta}
              homeCopy={t.homeCopy}
              avatar={t.assets.avatar}
            />
          }
        />
        <Route path='/resume' element={<Resume resumeCopy={t.resumeCopy} />} />
      </Routes>
      <Footer footerCopy={t.footerCopy} />
    </Router>
  )
}

export default App
