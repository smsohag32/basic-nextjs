import Header from '@/components/Header/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Basic Next Js',
  description: 'Basic Next Js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        <div className='min-h-[67vh]'>
          {children}
        </div>
        <Footer/>
        </body>
    </html>
  )
}
