import React from 'react'
import './CSS/Home.css'
import HomeCarousel from '../components/HomeCarousel'
import Nav from '../components/Nav'
import Header from '../components/Header'

const Home = () => {
  return (
    <div>
      <Nav />
      <Header/>
      <HomeCarousel />
      <div className="homeContainer">
        {/* <Featured/>
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList/>
        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedProperties/>
        <MailList/>
        <Footer/> */}
      </div>
    </div>
  )
}

export default Home