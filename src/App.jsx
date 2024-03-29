import { useState, useEffect } from 'react'
import { Navigation } from './components/navigation'
import { Header } from './components/header'
import { Problem } from './components/problem'
import { Solution } from './components/solution'
import { Features } from './components/features'
import { Team } from './components/Team'
import { Contact } from './components/contact'
import { Slides } from './components/slides'
import JsonData from './data/data.json'
import SmoothScroll from 'smooth-scroll'
import React from 'react';

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
})

const App = () => {
  const [landingPageData, setLandingPageData] = useState({})
  useEffect(() => {
    setLandingPageData(JsonData)
  }, [])

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Problem data={landingPageData.Problem} />
      <Solution data={landingPageData.Solution} />
      <Features data={landingPageData.Features} />
      <Slides />
      <Team data={landingPageData.Team} />
      <Contact data={landingPageData.Contact} />
    </div>
  )
}

export default App
