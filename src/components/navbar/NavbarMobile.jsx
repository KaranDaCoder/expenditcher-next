'use client'
import { useState } from 'react';
import { CloseIcon, DashboardIcon, HamburgerIcon, PaymentAccountsIcon, PlusIcon, UserIcon } from '../AllSvgs';
import Link from 'next/link';


const NavbarMobile = ({ session }) => {
 const [navMenu, setNavMenu] = useState(false);
 const handleNavMenuToggle = () => {
  setNavMenu(!navMenu);
 }
 return (
  <div className='lg:hidden'>
   {!navMenu && session ? <span className='cursor-pointer' onClick={handleNavMenuToggle}><HamburgerIcon /></span> :
    <div className={`fixed inset-0 w-full h-5/6 bg-white rounded-2xl shadow-2xl`}>
     <div className={`absolute inset-y-0 right-0 w-full h-full`}>
      {session && <div className='flex items-center w-full h-auto px-2 py-2 border-b'>
       <h2 className='w-full text-2xl font-semibold text-center uppercase'>Menu</h2>
       <span className='cursor-pointer' onClick={handleNavMenuToggle}>
        <CloseIcon />
       </span>
      </div>}
      <ul className='flex flex-col items-center justify-center w-full h-auto gap-10 px-10 mt-10 text-lg font-light'>
       <Link className='flex items-center w-full gap-4 cursor-pointer' onClick={handleNavMenuToggle} href={"/dashboard"}>
        <DashboardIcon /> Dashboard
       </Link>
       <Link className='flex items-center w-full gap-4 cursor-pointer' onClick={handleNavMenuToggle} href={"/add-expense"}>
        <PlusIcon /> Add Expense
       </Link>
       <Link className='flex items-center w-full gap-4 cursor-pointer' onClick={handleNavMenuToggle} href={"/payment-modes"}>
        <PaymentAccountsIcon /> payment modes
       </Link>
       <Link className='flex items-center w-full gap-4 cursor-pointer' onClick={handleNavMenuToggle} href={"/"}>
        <UserIcon /> My Profile
       </Link>
      </ul>
     </div>
    </div>


   }
  </div>
 )
}

export default NavbarMobile