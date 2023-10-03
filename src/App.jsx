import React from 'react'
import "./App.css"
import Homepage from "./components/Homepage/homepage.jsx"
import Competitions from './components/Competitions/Competitions.jsx'
import Members from './components/Members/Members.jsx'
import Footer from './components/Footer/Footer.jsx'
import Events from './components/Events/Events.jsx'
import Contactus from './components/Contactus/Contactus.jsx'
import Joust from './components/Joust/Joust.jsx'

const App = () => {
  return (
    <div>
      <Homepage />
      <Joust />
      <Competitions />
      <Events />
      <Members />
      <Contactus />
      <Footer />
    </div>
  )
}

export default App;
