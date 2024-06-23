import Link from 'next/link';
import AddExpenseForm from '@/components/AddExpenseForm';
import { getPaymentModes } from '../payment-modes/page';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import FlightIcon from '@mui/icons-material/Flight';
const AddExpense = async () => {
  const session = await auth();
  if(!session) redirect("/")
  const { result, total } = await getPaymentModes();
  return (
    <main className='w-full h-full'>
      <div className='flex items-center w-full gap-2 text-sm lg:text-base'>
        <Link href={'/dashboard'} className='text-fuchsia-800'>
          Dashboard
        </Link>
        <span>{'>'}</span>
        <Link href={'/add-expense'}>Add New Expense</Link>
      </div>
      <h2 className='inline-flex items-center justify-center w-full mt-10 mb-2 text-2xl uppercase'>
        Add New Expense
      </h2>
      <div className='w-full h-full m-auto bg-white border shadow-lg lg:w-3/4 rounded-xl'>
       <AddExpenseForm result={result} owner_id={session?.user?._id}/>
      </div>
    </main>
  );
};

export default AddExpense;
