import './App.css'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import { Button } from '@mui/material'
import Skills from './components/Skills'
import Projects from './components/Projects'

function App() {

  return (
    <>
    <div className='rootDiv paddingLR'>
      <div className='leftDiv'>
        <Hero/>
      </div>
      <div className='rightDiv'>
        <About/>
        <br />
        <br />
        <br />
        <Experience/>
        <br />
        <br />
        <Button variant='contained'>View Resumé</Button>
        <br />
        <br />
        <br />
        <br />
        <br />
        <Projects/>
        <br />
        <br />
        <br />
        <br />
        <Skills/>
      </div>
    </div>
    </>
  )
}

export default App
