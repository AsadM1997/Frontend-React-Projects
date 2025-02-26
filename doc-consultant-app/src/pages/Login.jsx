import React from 'react'
import { useState } from 'react'
const Login = () => {
  const [state ,setState]=useState('Singn Up')
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const[name,setName]=useState('')
  const onSubmitHandler= async(event)=>{
    event.preventDefault()
  }
  return (
    <form className='min-h-[80vh] flex items-center'>
      <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px ] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg'>
        <p className='font-semibold text-2xl'>{state === 'Singn Up' ? 'Create Account' : 'Login'}</p>
        <p>Please {state === 'Sign Up' ? 'sign up' : 'Login'} sign up to book appointment</p>

        <div>
        <p>Full Name</p>
        <input className='border border-zinc-300 rounded w-full p-2 mt-1 ' type='text' onChange={(e)=>setName(e.target.name)} value={name} required/>
       </div>

       <div>
        <p>Email</p>
        <input  className='border border-zinc-300 rounded w-full p-2 mt-1 '  type='email' onChange={(e)=>setEmail(e.target.name)} value={email} required/>
       </div>

       <div>
        <p>password</p>
        <input  className='border border-zinc-300 rounded w-full p-2 mt-1 '  type='password' onChange={(e)=>setPassword(e.target.name)} value={password} required/>
       </div>

      <button className='bg-primary text-white'>{state === 'Singn Up' ? 'create Account' : 'Login'}</button>
      <p>Already have an account? <a>Login here</a></p>
      </div>
    </form>
  )
}

export default Login