import { Header, Home, Footer, Resume, Projects } from './components'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { getCopy } from './utils/getCopy'
import React from 'react'
function App() {
  const t = React.useMemo(() => getCopy(), [])

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
              coloredAvatars={t.assets.coloredAvatars}
            />
          }
        />
        <Route path='/resume' element={<Resume resumeCopy={t.resumeCopy} />} />
        <Route
          path='/projects'
          element={<Projects projectsCopy={t.projectsCopy} />}
        />
      </Routes>
      <Footer footerCopy={t.footerCopy} />
    </Router>
  )
}

export default App
