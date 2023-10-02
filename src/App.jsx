import React from 'react'
import Homepage from "./components/Homepage/homepage.jsx"
import Competitions from './components/Competitions/Competitions.jsx'
import Members from './components/Members/Members.jsx'
import Footer from './components/Footer/Footer.jsx'

const App = () => {
  return (
    <div>
      <Homepage />
      <Competitions />
      <Members />
      <Footer />
    </div>
  )
}

export default App;
