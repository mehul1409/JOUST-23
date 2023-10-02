import React from 'react'
import Homepage from "./components/Homepage/homepage.jsx"
import Competitions from './components/Competitions/Competitions.jsx'
import Members from './components/Members/Members.jsx'
import Footer from './components/Footer/Footer.jsx'
import Events from './components/Events/Events.jsx'

const App = () => {
  return (
    <div>
      <Homepage />
      <Competitions />
      <Events />
      <Members />
      <Footer />
    </div>
  )
}

export default App;
