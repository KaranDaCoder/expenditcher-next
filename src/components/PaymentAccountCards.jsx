import Link from 'next/link'

const PaymentAccountCards = ({ p_m_name, pm_id }) => {
  return (
     <div className='flex flex-col items-center justify-center w-full h-full gap-6'>
      <h2 className='w-full text-2xl font-light text-center capitalize lg:text-3xl'>{p_m_name}</h2>
      <h1 className='inline-flex items-center justify-center w-full gap-1 text-xl lg:text-3xl'> <span className='text-xl font-light text-yellow-500'>$</span>{`expense_total`}</h1>
    <h2 className='flex items-center justify-center w-1/2 h-12'>
     <Link href={`/transactions/${pm_id}`} className='w-full py-3 tracking-wide text-center text-white uppercase transition-all duration-300 rounded-xl bg-slate-700 hover:bg-slate-600'>View All</Link>
    </h2>
     </div>

  )
}

export default PaymentAccountCards