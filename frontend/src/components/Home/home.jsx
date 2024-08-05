import React from 'react'
import Navbar from   "./Navbar";
import Banner from  "./Banner";
import Footer from "./footer";
import Freebook from './Freebook';
function Home() {
  return (
    <div>
        
      <Navbar/>
      <Banner/>
      <Freebook/>
     <br></br>
      <Footer/>
    </div>
  )
}

export default Home;