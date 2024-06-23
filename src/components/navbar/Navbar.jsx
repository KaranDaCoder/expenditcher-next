import Link from 'next/link';
import NavbarMobile from './NavbarMobile';
import NavbarDesktop from './NavbarDesktop';

import { auth } from '@/auth';
import SignOut from './SignOut';

const Navbar = async () => {
  const session = await auth();
  return (
    <nav className='sticky top-0 z-40 w-full bg-white border-b h-14 lg:h-24'>
      <div className='flex flex-col w-full h-full'>
        {/* Navbar Top */}
        <div className={`flex justify-between w-full ${session ? 'h-3/4' : 'h-full'} items-center`}>
          <div className='flex items-center h-full gap-2'>
            {session && <NavbarMobile session={session} />}
            <Link href={"/"}>
              <h2 className='text-2xl tracking-wide uppercase lg:text-3xl'>Expenditcher</h2>
            </Link>
          </div>
          {session ? <SignOut/> : <Link href={"/login"} className='px-4 py-1 text-sm border rounded-md'>
            <h2>Sign In</h2>
          </Link>}

        </div>
        {session && <NavbarDesktop session={session} />}
      </div>
    </nav>
  )
}

export default Navbar