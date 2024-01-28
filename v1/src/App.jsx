import './App.css'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'

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
        <br />
        <Experience/>
      </div>
    </div>
    </>
  )
}

export default App
