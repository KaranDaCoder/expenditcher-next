import React from 'react'

const MostExpensiveTx = () => {
  return (
   <div className='w-full h-64'>
    <div className='w-full h-full border shadow-md rounded-xl'>
     <h2 className='flex items-center justify-center w-full h-10 overflow-hidden text-lg font-semibold tracking-wide text-center uppercase'>Most Expensive</h2>
     <div className='flex flex-col justify-around space-y-8 overflow-hidden h-50'>
      <h1 className='inline-flex items-center justify-center w-full gap-1 mt-2 text-5xl'> <span className='text-3xl font-light text-yellow-500'>$</span>1,345.34</h1>
      <p className='w-full px-4 italic text-center text-slate-600'>your most expensive transaction. You spent on Transaction Name on June 15 `24.</p>
     </div>
    </div>
   </div>
  )
}

export default MostExpensiveTx