import Link from 'next/link'
import React from 'react'
import { DashboardIcon, PaymentAccountsIcon, PlusIcon, UserIcon } from '../AllSvgs'

const NavbarDesktop = () => {
 return (
  <ul className='items-center justify-center hidden w-full gap-8 tracking-wide capitalize border-b h-1/2 lg:flex'>
   <li className='flex flex-col items-center h-full cursor-pointer'>
    <DashboardIcon />
    <Link href={"/dashboard"}>Dashboard</Link>
   </li>
   <li className='flex flex-col items-center h-full cursor-pointer'>
    <PlusIcon />
    <Link href={"/add-expense"}>Add Expense</Link>
   </li>
   <li className='flex flex-col items-center h-full cursor-pointer'>
    <PaymentAccountsIcon />
    <Link href={"/payment-modes"}>Payment Modes</Link>
   </li>
   <li className='flex flex-col items-center h-full cursor-pointer'>
    <UserIcon />
    <Link href={"/"}>My Profile</Link>
   </li>
  </ul>
 )
}

export default NavbarDesktop