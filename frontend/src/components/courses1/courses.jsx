import React from 'react'
import Navbar from   "../Home/Navbar";
import Footer from   "../Home/footer";
import Course from '../Courses/course';
function Courses() {
  return (
    <>
    <Navbar/>
    <div className='min-h-screen'>
  <Course/>
    </div>
    <Footer/>
    </>
  )
}

export default Courses