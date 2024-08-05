import React from 'react'
import {Link} from "react-router-dom";
import { useForm } from "react-hook-form"
function Login() {
  

  const {
     register,
    handleSubmit,
    formState: { errors },
  } = useForm ();

  const onSubmit = (data) => console.log (data);
  

  return (
    <div>
        {/* You can open the modal using document.getElementById('ID').showModal() method */}
 
<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form  onSubmit={handleSubmit(onSubmit)}  method="dialog" >
      {/* if there is a button in form, it will close the modal */}
      
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-black"  onClick={()=>document.getElementById('my_modal_3').close()}>✕</Link>
   
    
    {/* Email */}
 <div className='mt-4 space y-2'>
    <span className='mb-8 text-black'>Email</span>
    <br/>
    <input 
  type="email" 
  placeholder="Enter your email address" 
  className="w-80 px-3 py-1 border border-gray-100 rounded-md outline-none focus:border-blue-400" 
  {...register("email", { required: true })}
/>
<br/>

{errors.email && <span>This field is required</span>}

   
 </div>
 {/* Password: */}
 <div className='mt-4 space y-2'>
    <span className='mb-8 text-black'>Password</span>
    <br/>
    <input 
  type="password" 
  placeholder="Enter your password" 
  className="w-80 px-3 py-1 border border-gray-100 rounded-md outline-none focus:border-blue-400" 
  {...register("password", { required: true })}
/>
<br/>
{errors.password && <span>This field is required</span>}

</div>
<div className='flex justify-around mt-4'>
    <button className='bg-pink-500 text-white rounded-md px-3 py-1'>Login</button>
    <p className="text-black">Not registered!{" "}<Link to="Signup" className='underline text-blue-500 cursor-pointer'> Signup!</Link></p>
</div>
</form>
  </div>
  
</dialog>
    </div>
  )
}

export default Login;