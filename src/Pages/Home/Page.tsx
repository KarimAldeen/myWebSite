import React from 'react'
import HeroSection from '../../Components/Home/HeroSection'
import PowerfulFeatures from '../../Components/Home/PowerfulFeatures'
import AboutUs from '../../Components/Home/AboutUs'
import OurHow from '../../Components/Home/LookingFor'
import Questions from '../../Components/Home/Questions'
import Contact from '../../Components/Home/Contact'

const Page = () => {
  return (
    <div className='Home_Page'>
      <HeroSection/>
      <PowerfulFeatures/>
      <AboutUs/>
      <OurHow/>
      <Questions/>
      <Contact/>
    </div>
  )
}

export default Page