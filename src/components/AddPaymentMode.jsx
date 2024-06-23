'use client'
import { useRouter } from "next/navigation";
import { useState } from "react";

const AddPaymentMode = ({ owner_id }) => {
  const router = useRouter();
  const [paymentMode, setPaymentMode] = useState({
    payment_mode_name: '',
    payment_mode_type: 'Credit Card',
    owner_id
  })

  const handleFormSubmission = (e) => {
    setPaymentMode((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }
  const handleFormReset = (e) => {
    e.preventDefault();
    setPaymentMode({
      payment_mode_name: '',
      payment_mode_type: 'Credit Card'
    })
  }

  const addNewPayment = async (e) => {
    e.preventDefault();
    try {
      const request = await fetch(`/api/payment-modes`, {
        method: 'POST',
        cache: 'no-store',
        redirect: 'follow',
        body: JSON.stringify(paymentMode)
      })
      console.log(paymentMode, 'to be posted!')
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
  }
  return (
    <form onSubmit={addNewPayment} onReset={handleFormReset} className='z-10 flex-none w-full p-2 bg-white border lg:sticky lg:left-0 h-5/6 rounded-2xl lg:w-1/3'>
      <h2 className='w-full mb-2 text-lg font-semibold text-center'>Add payment mode</h2>
      <div className='flex flex-col items-center justify-center w-full h-5/6'>
        <label htmlFor="" className='flex-none w-full text-sm text-slate-600'>Payment Mode Name</label>
        <input type="text" name="payment_mode_name" id="" value={paymentMode.payment_mode_name} placeholder='Payment Mode Name' className='w-full h-10 px-4 bg-white border rounded-md outline-none' required minLength={3} maxLength={60} autoComplete='off' role="presentation" onChange={handleFormSubmission} />
        <label htmlFor="" className='flex-none w-full mt-4 text-sm text-slate-600'>Payment Mode Type</label>
        <select name="payment_mode_type" id="" className='w-full h-10 px-4 border rounded-md outline-none cursor-pointer' value={paymentMode.payment_mode_type} onChange={handleFormSubmission}>
          <option value="Credit Card">Credit Card</option>
          <option value="Debit Card">Debit Card</option>
          <option value="Checking Account" >Checking Account</option>
          <option value="Saving Account" >Saving Account</option>
        </select>
        <div className='flex items-center justify-around w-full gap-3'>
          <button className='w-1/2 py-2 bg-white border rounded-lg mt-9' type="reset">Cancel</button>
          <button className={`${paymentMode.payment_mode_name.length < 6 ? 'hidden' : 'w-1/2 py-2 text-white rounded-lg mt-9 bg-slate-800 transition-all duration-500'}`} type="submit">Add</button>
        </div>
      </div>
    </form>
  )
}

export default AddPaymentMode