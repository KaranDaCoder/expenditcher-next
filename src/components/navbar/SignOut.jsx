'use client'
import { signOut } from 'next-auth/react';


const SignOut = () => {
  return (
   <button href={"/"} className='px-4 py-1 text-sm border rounded-md' onClick={() => signOut({ callbackUrl: '/' })}>
    <h2>Signout</h2>
   </button>
  )
}

export default SignOut