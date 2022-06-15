import { Header, Home, Footer } from './components'
function App() {
  const t = {
    name: 'Matteo Luceri',
    jobRole: 'Front-end Developer',
    shortJobRole: 'Front-End Dev',
  }
  return (
    <div style={{ backgroundColor: '#f3f3f3', height: '100vh' }}>
      <Header name={t.name} jobRole={t.jobRole} shortJobRole={t.shortJobRole} />
      <Home />
      <Footer />
    </div>
  )
}

export default App
