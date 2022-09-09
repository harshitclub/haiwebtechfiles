import React from 'react'
import Hero from '../components/Hero'
import CardSection from '../components/CardSection'
import OurServices from '../components/OurServices'
import BlogSection from '../components/BlogSection'
import AboutSection from '../components/AboutSection'
import OurPackages from '../components/OurPackages'
import FaqSection from '../components/FaqSection'

const Home = () => {
  return (
    <>
    <Hero/>
    <CardSection/>
    <OurServices/>
    <FaqSection/>
    <OurPackages/>
    <AboutSection/>
    <BlogSection/>
    </>
  )
}

export default Home