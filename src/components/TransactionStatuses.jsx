import React from 'react'

const TransactionStatuses = ({ completedExpenses, pendingExpenses, canceledExpenses, allExpenses }) => {
 return (
  <div className='w-full h-64 overflow-hidden border shadow-md rounded-xl'>
   <h2 className='flex items-center justify-center w-full h-10 overflow-hidden text-lg font-semibold tracking-wide text-center uppercase'>Transaction Status</h2>
   <div className='flex flex-col items-center justify-center px-10 space-y-4 capitalize h-50'>
    <h2 className='inline-flex items-center justify-between w-full gap-5 text-lg'>Completed <span>{completedExpenses}</span></h2>
    <h2 className='inline-flex items-center justify-between w-full gap-5 text-lg'>Pending<span>{pendingExpenses}</span></h2>
    <h2 className='inline-flex items-center justify-between w-full gap-5 text-lg'>Canceled<span>{canceledExpenses}</span></h2>
    <div className='w-full h-1 border bg-slate-500'></div>
    <h2 className='inline-flex justify-between w-full gap-5 text-lg'>Total<span>{allExpenses}</span></h2>
   </div>
  </div>
 )
}

export default TransactionStatuses