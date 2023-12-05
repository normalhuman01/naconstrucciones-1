import { ReactNode } from 'react'
import { Header } from './_components/Header'
import { Footer } from './_components/Footer'

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='min-h-screen flex flex-col'>
      <Header />
      <main className='flex-1'>{children} </main>
      <Footer />
    </div>
  )
}

export default Layout