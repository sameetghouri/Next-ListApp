import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Nav from '../components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main >
      <Nav/>
     <h1>HomePage</h1>
     <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
        
     <Link href='/forks'>See Forks Listing</Link>
    
     <Footer/>
    </main>
  )
}
