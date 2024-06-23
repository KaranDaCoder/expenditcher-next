import React from 'react';

const HamburgerIcon = () => {
 return (
  <svg
   xmlns='http://www.w3.org/2000/svg'
   fill='none'
   viewBox='0 0 24 24'
   strokeWidth={3.0}
   stroke='green'
   className='size-8'
  >
   <path
    strokeLinecap='round'
    strokeLinejoin='round'
    d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
   />
  </svg>
 );
};

const ArrowIconDown = () => {
 return (
  <svg
   xmlns='http://www.w3.org/2000/svg'
   fill='none'
   viewBox='0 0 24 24'
   strokeWidth={2.5}
   stroke='currentColor'
   className='w-4 h-4'
  >
   <path
    strokeLinecap='round'
    strokeLinejoin='round'
    d='m19.5 8.25-7.5 7.5-7.5-7.5'
   />
  </svg>
 );
};

const ArrowIconUp = () => {
 return (
  <svg
   xmlns='http://www.w3.org/2000/svg'
   fill='none'
   viewBox='0 0 24 24'
   strokeWidth={1.0}
   stroke='green'
   className='size-8'
  >
   <path
    strokeLinecap='round'
    strokeLinejoin='round'
    d='m4.5 15.75 7.5-7.5 7.5 7.5'
   />
  </svg>
 );
};

const PlusIcon = () => {
 return (
  <svg
   xmlns='http://www.w3.org/2000/svg'
   fill='none'
   viewBox='0 0 24 24'
   strokeWidth={3.0}
   stroke='green'
   className='size-6'
  >
   <path
    strokeLinecap='round'
    strokeLinejoin='round'
    d='M12 4.5v15m7.5-7.5h-15'
   />
  </svg>
 );
};

const DeleteIcon = () => {
 return (
  <svg
   xmlns='http://www.w3.org/2000/svg'
   fill='none'
   viewBox='0 0 24 24'
   strokeWidth={1.8}
   stroke='red'
   className='w-5 h-5'
  >
   <path
    strokeLinecap='round'
    strokeLinejoin='round'
    d='m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0'
   />
  </svg>
 );
};

const DashboardIcon = () => {
 return (
  <svg
   xmlns='http://www.w3.org/2000/svg'
   fill='green'
   viewBox='0 0 24 24'
   strokeWidth={0.5}
   stroke='green'
   className='size-6'
  >
   <path
    strokeLinecap='round'
    strokeLinejoin='round'
    d='M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z'
   />
  </svg>
 );
};

const SettingsIcon = () => {
 return (
  <svg
   xmlns='http://www.w3.org/2000/svg'
   fill='none'
   viewBox='0 0 24 24'
   strokeWidth={2.0}
   stroke='grey'
   className='size-6'
  >
   <path
    strokeLinecap='round'
    strokeLinejoin='round'
    d='M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z'
   />
   <path
    strokeLinecap='round'
    strokeLinejoin='round'
    d='M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
   />
  </svg>
 );
};

const LogoutIcon = () => {
 return (
  <svg
   xmlns='http://www.w3.org/2000/svg'
   fill='red'
   viewBox='0 0 24 24'
   strokeWidth={2.0}
   stroke='red'
   className='size-6'
  >
   <path
    strokeLinecap='round'
    strokeLinejoin='round'
    d='m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25'
   />
  </svg>
 );
};

const PaymentAccountsIcon = () => {
 return (
  <svg
   xmlns='http://www.w3.org/2000/svg'
   fill='none'
   viewBox='0 0 24 24'
   strokeWidth={2.5}
   stroke='green'
   className='size-6'
  >
   <path
    strokeLinecap='round'
    strokeLinejoin='round'
    d='M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z'
   />
  </svg>
 );
}

const UserIcon = () => {
 return (
  <svg xmlns="http://www.w3.org/2000/svg" fill="green" viewBox="0 0 24 24" strokeWidth={2.0} stroke="green" className="size-6">
   <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
  </svg>
 )

}

const CloseIcon = () => {
 return (
  <svg xmlns="http://www.w3.org/2000/svg" fill="blue" viewBox="0 0 24 24" strokeWidth={2.0} stroke="blue" className="size-6">
   <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
  </svg>
 )
}

const automotiveIcon = () => {
 return (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
   <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25ZM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 1 1 6 0h3a.75.75 0 0 0 .75-.75V15Z" />
   <path d="M8.25 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0ZM15.75 6.75a.75.75 0 0 0-.75.75v11.25c0 .087.015.17.042.248a3 3 0 0 1 5.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 0 0-3.732-10.104 1.837 1.837 0 0 0-1.47-.725H15.75Z" />
   <path d="M19.5 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" />
  </svg>

 )
}
export {
 HamburgerIcon,
 ArrowIconDown,
 ArrowIconUp,
 PlusIcon,
 DeleteIcon,
 DashboardIcon,
 SettingsIcon,
 LogoutIcon,
 PaymentAccountsIcon,
 UserIcon,
 CloseIcon,
 automotiveIcon
};
