import { ReactNode } from 'react'
import { Header } from './_components/Header'
import { Footer } from './_components/Footer'

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Header />
      <main>{children} </main>
      <Footer />
    </div>
  )
}

export default Layout