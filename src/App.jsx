import React from 'react'
import "./App.css"
import Homepage from "./components/Homepage/homepage.jsx"
import Competitions from './components/Competitions/Competitions.jsx'
import Members from './components/Members/Members.jsx'
import Footer from './components/Footer/Footer.jsx'
import Events from './components/Events/Events.jsx'
import Contactus from './components/Contactus/Contactus.jsx'
import Joust from './components/Joust/Joust.jsx'
import FAQ from './components/FAQ/FAQ.jsx'
import { Gallery } from './components/Gallery/Gallery'

const App = () => {
  return (
    <div>
      <Homepage />
      <Joust />
      <Competitions />
      <Events />
      <Members />
      {/* <FAQ /> */}
      <Contactus />
      <Gallery />
      <Footer />
    </div>
  )
}

export default App;
