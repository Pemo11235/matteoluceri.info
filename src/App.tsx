import { Header, Home, Footer, Resume, Projects, Contact } from './components'
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
        <Route
          path={`/${t.cta.button1}`}
          element={<Resume resumeCopy={t.resumeCopy} />}
        />
        <Route
          path={`/${t.cta.button2}`}
          element={<Projects projectsCopy={t.projectsCopy} />}
        />
        <Route
          path={`/${t.cta.button3}`}
          element={<Contact contactCopy={t.contactCopy} />}
        />
      </Routes>
      <Footer footerCopy={t.footerCopy} />
    </Router>
  )
}

export default App
