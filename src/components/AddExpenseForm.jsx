'use client'
import { categories_array } from '@/lib/categoryList';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const AddExpenseForm = ({result, owner_id}) => {
 
 const router = useRouter();
 const [expense , setExpense] = useState({
   category : 'Other',
   name : '',
   amount: '',
   state: '',
   payment_mode_id: result[0]?._id,
   date: new Date(),
   status: 'Completed',
   description: '',
   owner_id: owner_id
 })

 const handleFormSubmission = async (e) => {
  e.preventDefault();
  setExpense((prev) => ({
   ...prev,
   [e.target.name] : e.target.value
  }))
 }

 const handleAddExpenseRequest = async (e) => {
  e.preventDefault();
  try {
   const request = await fetch(`/api/expense`, {
    method: 'POST',
    cache: 'no-store',
    redirect: 'follow',
    body: JSON.stringify(expense)
   })
   const response = await request.json();
   if (request.ok) {
    router.refresh();
    handleFormReset(e);
    console.log(response);
    return response
   } else {
    console.log(response)
   }
  } catch (error) {
   console.log(error)
  }
  router.refresh();
 }

 const handleFormReset = (e) => {
  e.preventDefault();
  setExpense(() => ({
   category: 'Other',
   name: '',
   amount: '',
   state: '',
   payment_mode_id: '',
   date: new Date(),
   status: 'Completed',
   description: '',
   owner_id: owner_id
  }))
 }
 return (
  <form
   onSubmit={handleAddExpenseRequest}
   onReset={handleFormReset}
   className='w-full h-full p-5 text-sm bg-white lg:p-10 text-slate-600'
  >
   {/* Category Dropdown */}
   <div className='flex flex-col w-full h-auto gap-2 lg:gap-4'>
    <select
     name='category'
     id='category'
     className='w-full h-10 font-semibold text-center border rounded-lg outline-none cursor-pointer'
     value={expense.category}
     onChange={handleFormSubmission}
    >
     {categories_array?.map(cat => (
      <option value={cat?.name} key={cat?.name} className='capitalize'>{cat?.name}</option>
     ))}
    </select>
    <input
     type='text'
     name='name'
     id='name'
     className='w-full h-10 px-2 text-center border rounded-md outline-none focus:border-green-600 placeholder:italic placeholder:capitalize'
     placeholder='transaction name'
     minLength='5'
     maxLength='40'
     autoComplete='off'
     required
     value={expense.name}
     onChange={handleFormSubmission}
    />
    <div className='flex flex-col w-full h-auto gap-2 lg:flex-row'>
     <input
      type='number'
      name='amount'
      id='amount'
      placeholder='$$'
      className='w-full h-10 text-center border rounded-md outline-none focus:border-green-600 placeholder:italic'
      inputMode='decimal'
      pattern='[0-9]*'
      min={0.01}
      max={9999999}
      step='any'
      required
      value={expense.amount}
      onChange={handleFormSubmission}
     />
     <input
      type='text'
      name='state'
      id='state'
      maxLength={2}
      placeholder='state'
      autoComplete='off'
      className='w-full h-10 text-center uppercase border rounded-md outline-none lg:w-1/4 focus:border-green-600 placeholder:italic placeholder:capitalize'
      value={expense.state}
      onChange={handleFormSubmission}
     />
     <select
      name='payment_mode_id'
      id='payment_mode_id'
      className='w-full h-10 text-center capitalize border rounded-md outline-none cursor-pointer'
      value={expense.payment_mode_id}
      onChange={handleFormSubmission}
     >
      {result?.map(p_m => (
       <option value={p_m?._id} key={p_m._id}>{p_m?.payment_mode_name}</option>
      ))}
     </select>
    </div>
    {/* Date + Payment Mode */}
    <div className='flex flex-col w-full h-auto gap-2 lg:flex-row'>
     <input
      type='date'
      name='date'
      id='date'
      className='flex items-center justify-center w-full h-10 text-sm text-center border rounded-md outline-none cursor-pointer lg:w-1/2'
      value={expense.date}
      onChange={handleFormSubmission}
     />
     <select
      name='status'
      id='status'
      className='w-full h-10 text-center border rounded-lg outline-none cursor-pointer lg:w-1/2'
      value={expense.status}
      onChange={handleFormSubmission}
     >
      <option value='Completed'>Completed</option>
      <option value="Pending">Pending</option>
      <option value="Canceled">Canceled</option>
     </select>
    </div>
    <textarea
     name='description'
     id='description'
     placeholder='description'
     rows={10}
     className='px-2 text-sm border rounded-md outline-none resize-none focus:border-green-600 placeholder:italic placeholder:capitalize'
     value={expense.description}
     onChange={handleFormSubmission}
    />
   </div>
   <div className='flex justify-around w-full gap-2 mt-4'>
    <button
     type='reset'
     className='w-1/2 px-4 py-3 border rounded-lg shadow-md'
     // onClick={() => setExpense({name : ''})}
    >
     Cancel
    </button>
    <button
     type='submit'
         className={`${(expense.name.length < 5 || expense.amount === '' || expense.date === '') ? 'hidden' : 'block'} w-1/2 px-4 py-3 text-white rounded-lg shadow-md bg-slate-800`}
    >
     Add
    </button> 
   </div>
  </form>
 )
}

export default AddExpenseForm