import React from 'react'
import list from   "../Home/list.json";
import Cards from "../Home/cards";
import {Link} from "react-router-dom"

function course() {
  const filterd = list.filter((data)=>data.category==="Free");
  console.log(filterd);
  return (
  //  this component is all about rendering each  cards in course so by deafult we work on courses
    <>
   <div className="max-w-screen-2xl container mx-auto md:px-20">
 <p className='font-bold text-2xl pt-28 text-center'> We are delighted to have you <span className='text-pink-600'>here!)</span> </p>
      <p className='pl-6 sm:text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
     <Link to="/">
     <center><button className='bg-pink-500 mt-4 badge badge-secondary cursor-pointer-'>Back</button></center>
     </Link>
     </div>
     <div className="overflow-x-auto md:overflow-hidden">
     <div className="flex overflow-x-scroll md:grid grid-cols-1 md:grid-cols-3 gap-5">
      {/* use grid to arrange the componets in 2dimesions it is very important */}
     {filterd.map((item,item2)=>(<Cards item = {item} key={item.id} image = {item2.courses_i}/>))}
     </div>
     </div>

      </>
  )
}

export default course