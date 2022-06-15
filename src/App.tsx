import { Header, Home, Footer } from './components'
function App() {
  const t = {
    name: 'Matteo Luceri',
    jobRole: 'Front-end Developer',
    shortJobRole: 'Front-End Dev',
    headerButton: {
      button1: 'Resume',
      button2: 'Project',
      button3: 'Contact',
    },
  }
  return (
    <div style={{ backgroundColor: '#f3f3f3', height: '100vh' }}>
      <Header
        name={t.name}
        jobRole={t.jobRole}
        shortJobRole={t.shortJobRole}
        headerButton={t.headerButton}
      />
      <Home />
      <Footer />
    </div>
  )
}

export default App
