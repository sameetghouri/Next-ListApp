import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='flex flex-col items-center'>
      
     <h1 className='text-2xl  pb-4' >HomePage</h1>
     <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
        
     <Link href='/forks' className='block mt-5 bg-sky-600 hover:bg-sky-500 text-white px-4 py-2 rounded'>See Forks Listing</Link>
    
    </div>
  )
}
