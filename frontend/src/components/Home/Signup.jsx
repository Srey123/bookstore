// import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Login from './Login.jsx'
import { useForm } from "react-hook-form"


function Signup() {
  
  const {
    register,
   handleSubmit,
   formState: { errors },
 } = useForm ();

 const onSubmit = (data) => console.log (data);
  

  return (
    <div className='flex h-screen items-center justify-center'>
      <div className="w-[600px]">
        <div className="modal-box">
          <form   onSubmit={handleSubmit(onSubmit)} method="dialog">
            <Link to={"/"} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-black">✕</Link>
         

          {/* Name */}
          <div className='mt-4 space-y-2'>
            <span className='mb-8 text-black'>Name</span>
            <br/>
            <input
              type="text"
              placeholder="Enter your full name"
          
              // onChange={(e) => validateName(e.target.value)}
              className="w-80 px-3 py-1 border border-gray-100 rounded-md outline-none focus:border-blue-400"
              {...register("text", { required: true })}
            />
            <br/>
            {errors.text && <span>This field is required</span>}

            {/* {nameError && <p className="text-red-500">{nameError}</p>} */}
          </div>

          {/* Email */}
          <div className='mt-4 space-y-2'>
            <span className='mb-8 text-black'>Email</span>
            <br/>
            <input
              type="email"
              placeholder="Enter your email address"
              // value={email}
             
              className="w-80 px-3 py-1 border border-gray-100 rounded-md outline-none focus:border-blue-400"
              {...register("email", { required: true })}
            />
              <br/>
            {errors.email && <span>This field is required</span>}

            {/* {emailError && <p className="text-red-500">{emailError}</p>} */}
          </div>

          {/* Password */}
          <div className='mt-4 space-y-2'>
            <span className='mb-8 text-black'>Password</span>
            <br/>
            <input
              type="password"
              placeholder="Enter your password"
              // value={password}
             
              className="w-80 px-3 py-1 border border-gray-100 rounded-md outline-none focus:border-blue-400"
              {...register("password", { required: true })}
            />
              <br/>
            {errors.password && <span>This field is required</span>}

          </div>

          <div className='flex justify-around mt-4'>
            {/* Navigaring from signup page to login page  */}
            <button className='bg-pink-500 text-white rounded-md px-3 py-1' >Signup</button>
            <p className="text-black">Have an account?{" "}
              <button  className='underline text-blue-500 cursor-pointer' onClick={()=>document.getElementById('my_modal_3').showModal()}>Login!</button>
              <Login/>
            </p>
          </div>
          </form>
        </div>
       
      </div>
    </div>
  );
}

export default Signup;
