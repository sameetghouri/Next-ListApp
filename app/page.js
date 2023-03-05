import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Nav from '../components/Nav'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main >
      <Nav/>
     <h1>HomePage</h1>
     <Footer/>
    </main>
  )
}
