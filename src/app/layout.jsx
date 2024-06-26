import './globals.css';
import { Poppins } from 'next/font/google';
import Footer from '@/components/Footer';
import Navbar from '@/components/navbar/Navbar';
import { Suspense } from 'react';
import Loading from './loading';


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
});


export const metadata = {
  title: "Expenditcher | Dashboard",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} w-full mx-auto container bg-white px-2 md:px-3 lg:px-4 text-pretty overflow-x-hidden flex flex-col gap-2 lg:gap-3 text-slate-600`}>
        <Suspense fallback={<Loading/>}>
        <Navbar />
        <main className='w-full lg:min-h-[calc(100dvh-8rem)] min-h-[calc(100dvh-6rem)]'>
          {children}
        </main>
        <Footer />
        </Suspense>
      </body>
    </html>
  );
}
