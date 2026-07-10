import React from 'react'

import About from './About'
import Process from './Process'
import Features from './Features'
import Stat from './Stat'
import Demo from './Demo'

import Pricing from './Pricing'
import FAQ from './FAQ'
import CTA from './CTA'

import HomeHero from './HomeHero'

import Testimonials3 from './Testimonials3'

const HomePage = () => {
  return (
    <div>
     
      
  

      {/* Page Sections */}
      <HomeHero />
      {/*<Brand />*/}
      <About />
      <Process />
      <Features />
      <Demo />
      {/*<Testimonials2 />*/}
      <Testimonials3 />
      {/*<Clients /> */}
      <Stat />
      <Pricing />
      <FAQ />
      <CTA />
    </div>
  )
}

export default HomePage