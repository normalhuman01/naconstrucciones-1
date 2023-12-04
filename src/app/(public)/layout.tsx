import { ReactNode } from 'react'
import { Header } from './_components/header'
import { Footer } from './_components/footer'

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