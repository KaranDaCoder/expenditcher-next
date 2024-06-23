import { auth } from '@/auth';
import AtAGlance from '@/components/AtAGlance';
import MostExpensiveTx from '@/components/MostExpensiveTx';
import PaymentAccountCards from '@/components/PaymentAccountCards';
import TransactionStatuses from '@/components/TransactionStatuses';
import { getAllExpenses, getPaymentModes } from '@/lib/apiRequests';
import Link from 'next/link';
import { redirect } from 'next/navigation';

const Dashboard = async () => {
  const session = await auth();
  if (!session) redirect("/login");
  console.log(`Whats here?`)
  const { total: allExpenses, expense_total } = await getAllExpenses();
  const { total: completedExpenses } = await getAllExpenses('Completed');
  const { total: pendingExpenses } = await getAllExpenses('Pending');
  const { total: canceledExpenses } = await getAllExpenses('Canceled');
  const { total: paymentAccounts, result } = await getPaymentModes();

  return (
    <main className='flex flex-col w-full h-full gap-6'>
      <div className='flex items-center w-full gap-2 text-sm lg:text-base'>
        <Link href={"/dashboard"}>Dashboard</Link>
      </div>
      <div className="flex items-center w-full h-14">
        <h2 className="w-full text-4xl tracking-wide lg:text-5xl">Hello, {session?.user?.name || 'User'}.</h2>
      </div>

      <div className='grid w-full h-full grid-cols-1 gap-2 lg:grid-cols-3'>
        <AtAGlance allExpenses={allExpenses} expense_total={expense_total} />
        <TransactionStatuses completedExpenses={completedExpenses} pendingExpenses={pendingExpenses} canceledExpenses={canceledExpenses} allExpenses={allExpenses} />
        <MostExpensiveTx />
      </div >
      <div className='flex items-center justify-between w-full'>
      <h2 className='text-xl lg:text-2xl'>Your Payment Accounts ({paymentAccounts})</h2>
      <Link href={"/payment-modes"} className='hidden text-sm text-fuchsia-800 lg:flex'>Manage Payment Accounts</Link>
      </div>
      <div className='flex items-center justify-start w-full gap-4 py-2 overflow-x-auto h-60 lg:h-72'>
      {result?.map(p_m => (
        <div className='flex-none w-full h-full border shadow-md rounded-xl lg:w-1/3 hover:border-green-700' key={p_m._id}>
            <PaymentAccountCards p_m_name={p_m.payment_mode_name} pm_id={p_m._id} />
          </div>
      ))}
      
      </div>
    </main>
  )
}

export default Dashboard