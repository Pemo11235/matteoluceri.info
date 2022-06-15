import { Header, Home, Footer } from './components'
import './App.css'
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
      text: "I'm Matteo Luceri, a Front-end Developer. And this thext is gonna be longer that wha it is now.",
    },
    footerCopy: {
      phone: '+39 340 73 67 218',
      email: 'matteoluceri@msn.com',
      linkedIn: 'https://www.linkedin.com/in/matteoluceri/',
      github: 'https://www.github.com/pemo11235/',
    },
    assets: {
      avatar:
        'https://github.com/Pemo11235/WebSite/blob/master/assets/download.png',
    },
  }
  return (
    <div>
      <Header headerCopy={t.headerCopy} headerButton={t.cta} />
      <Home homeButton={t.cta} homeCopy={t.homeCopy} />
      <Footer footerCopy={t.footerCopy} />
    </div>
  )
}

export default App
