'use client';
import { signIn } from "next-auth/react";

const Login = () => {
  return (
   <div className='flex items-center justify-center w-full h-screen'>
    <div className='flex flex-col w-full px-4 space-y-4 border shadow-xl lg:w-3/4 rounded-2xl h-5/6'>
      <h1 className='w-full py-1 text-2xl text-center uppercase'>Login / register</h1>
      <p className='inline-flex items-center justify-center w-full text-slate-500'>You can easily join Expenditcher with just one of your accounts. You need not to worry about remembering your credentials to use Expenditcher!</p>
     <div className='flex flex-col items-center justify-start w-full h-5/6'>
      <div className='flex flex-col items-center w-full gap-4 mt-10 border rounded-lg h-1/2'>
        <h2 className='w-full text-lg font-semibold text-center'>Login or Register</h2>
       <button className='inline-flex items-center justify-center w-5/6 px-16 py-2 text-lg border rounded-md h-1/6 text-slate-600' onClick={() => signIn('google', { callbackUrl: '/dashboard' })}>Google</button>
        <button className='inline-flex items-center justify-center w-5/6 px-16 py-2 text-lg border rounded-md h-1/6 text-slate-600'>Github</button>
        <button className='inline-flex items-center justify-center w-5/6 px-16 py-2 text-lg border rounded-md h-1/6 text-slate-600'>Facebook</button>
      </div>
     </div>
     </div>
    </div>
  )
}

export default Login