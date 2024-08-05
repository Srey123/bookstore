
// To  directly get the compontent fucntion directly we have to type rfce
// if you type directly rfc you will get export at the initial stage ofd the component only

import React from 'react'

function cards({item,image}) {
 
  return (
    <>
    <div>
      <div className="card bg-base-100 md: w-92 h-50 shadow-xl  p-8 dark:bg-slate-900 dark:text-white hover:scale-105  duration-200  ">
  <figure>
    <img
src={item.image||image}


      alt="Books" />
      
      
  </figure>
  
  <div className="card-body">
    <h2 className="card-title">
    {item.name}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">${item.price}</div>
      <div className="badge badge-outline cursor-pointer hover:bg-pink-500 hover:text-white ">Buy now</div>
    </div>
  </div>
</div></div>
    </>
  )
}

export default cards
