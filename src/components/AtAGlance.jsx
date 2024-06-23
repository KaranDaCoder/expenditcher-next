import Link from 'next/link'
import React from 'react'

const AtAGlance = ({ allExpenses, expense_total }) => {
  return (
   <div className='w-full h-64 border shadow-md rounded-xl hover:border-green-600'>
    <h2 className='flex items-center justify-center w-full h-10 overflow-hidden text-lg font-semibold tracking-wide text-center uppercase'>At a Glance</h2>
    <div className='flex flex-col justify-around space-y-4 overflow-hidden h-50'>
     <h1 className='inline-flex items-center justify-center w-full gap-1 text-5xl'> <span className='text-3xl font-light text-yellow-500'>$</span>{expense_total}</h1>
     <p className='inline-flex flex-wrap w-full px-4 pt-3 italic text-slate-600'>You've spent from {allExpenses} transactions until today, June 15 `24.</p>
     <h2 className='flex items-center justify-center h-12'>
          <Link href={"/transactions"} className='w-1/2 py-2 tracking-wide text-center text-white uppercase transition-all duration-300 rounded-xl bg-slate-700 hover:bg-slate-600'>View All</Link>
     </h2>
    </div>
   </div>
  )
}

export default AtAGlance