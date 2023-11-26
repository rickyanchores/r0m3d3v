import { useState } from 'react'
import './App.css'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Footer from './Pages/Footer/Footer'
import Contact from './Pages/Contact/Contact'
import Services from './Pages/Services/Services'
import Team from './Pages/Team/Team'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Home />
      <About />
      <Services />
      <Team />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
