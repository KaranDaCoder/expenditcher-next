import { auth } from '@/auth'
import AddPaymentMode from '@/components/AddPaymentMode'
import DeleteButton from '@/components/navbar/DeleteButton'
import { cookies } from 'next/headers'
import Link from 'next/link'
import moment from 'moment';
import { redirect } from 'next/dist/server/api-utils'


export const getPaymentModes = async () => {
  try {
    const request = await fetch(`${process.env.AUTH_URL}/api/payment-modes`, { method: 'GET', cache: 'no-store', redirect: 'follow', headers: { Cookie: cookies() } });
    const response = await request.json();
    if (request.ok) {
      const { result, total } = response;
      return { result, total };
    } else {
      throw new Error();
    }
  } catch (error) {
    console.log(error);
  }
}
const PaymentModes = async () => {
  const session = await auth();
  if(!session) redirect("/");

  const {result, total} = await getPaymentModes();
  console.log(total)
  return (
    <main className='flex flex-col items-center justify-center w-full h-full gap-14'>
      <div className='flex items-center w-full gap-2 text-sm lg:text-base'>
        <Link href={"/dashboard"} className='text-fuchsia-800'>Dashboard</Link>
        <span>{'>'}</span>
        <Link href={"/payment-modes"}>Payment Modes</Link>
      </div>
      <div className='w-full mt-4'>
        <h2 className='text-xl text-center underline capitalize lg:text-2xl underline-offset-8'>Manage Payment Modes ({total})</h2>
      </div>
      <div className='relative flex items-center w-full gap-4 overflow-x-auto h-96'>
        <AddPaymentMode owner_id={session?.user?._id} />
        {total === 0 ? <div className='flex-none w-full lg:w-1/2 h-3/4 '>
          <div className='flex flex-col items-center justify-center w-full h-full rounded-2xl bg-slate-800 text-slate-100'>
            <h2>No Payment Methods found.</h2>
            </div>
        </div> : 
      result?.map((p_m,index) => (
          <div className='relative flex-none w-full bg-white border shadow-lg lg:w-1/2 h-3/4 rounded-2xl' key={p_m._id}>
          <div className='flex flex-col items-center justify-center w-full h-full space-y-5'>
            <h2 className='absolute text-6xl font-semibold left-2 top-4'>{index + 1}.</h2>
            <h2 className='text-xl capitalize lg:text-3xl'>{p_m?.payment_mode_name}</h2>
            <h2 className='text-lg capitalize lg:text-2xl'>{p_m?.payment_mode_type}</h2>
            <h2 className='text-sm capitalize lg:text-base'>Added On: <span className='font-semibold'>{moment(p_m.createdAt).format('MMMM-DD-YYYY')}</span></h2>
            {p_m?.payment_mode_name !== 'Cash' && <DeleteButton id={p_m._id}/>}
            </div>
          </div>
      ))
        }
       
      </div>
    </main>
  )
}
export default PaymentModes