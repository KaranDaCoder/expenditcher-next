'use client';

import { useRouter } from "next/navigation";

const DeleteButton = ({ id }) => {
 const router = useRouter();
 const handleDelete = async () => {
  console.log(`Delete!`)
  console.log(id);
  try {
   const request = await fetch(`/api/payment-modes/${id}`, { method: 'Delete', cache: 'no-cache', redirect: 'follow' });
   const response = await request.json();
   if (request.ok) {
    router.refresh();
    return response;
   } else {
    throw new Error();
   }
  } catch (error) {
   console.log(error)
  }
 }

 return (
  <div className='flex items-center justify-center w-full gap-4'>
   <button className='w-1/4 py-1 border rounded-lg lg:py-2'>Edit</button>
   <button className='w-1/4 py-1 text-white rounded-lg lg:py-2 bg-slate-800' onClick={handleDelete}>Delete</button>
  </div>
 )
}

export default DeleteButton