import DATA from './data.js'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Certifications from './components/Certifications.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Nav name={DATA.name} />
      <Hero data={DATA} />
      <About data={DATA} />
      <Skills data={DATA} />
      <Certifications data={DATA} />
      <Experience data={DATA} />
      <Projects data={DATA} />
      <Contact data={DATA} />
      <Footer data={DATA} />
    </>
  )
}
