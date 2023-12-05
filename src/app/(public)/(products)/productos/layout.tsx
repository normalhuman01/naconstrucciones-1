import Link from "next/link"
import { ReactNode } from "react"

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <header className="bg-dark text-white p-5">
        <div className="max-w-[960px] mx-auto flex gap-1">
          <h1>
            PRODUCTOS
          </h1>
          <span>{`>>`}</span>
          <h2>
            <Link href="/productos/epp">EPP</Link>
          </h2>
          <span>{`>`}</span>
          <h2>
            <Link href="/productos/ferreteria">FERRETERÍA</Link>
          </h2>
        </div>
      </header>
      <main>{children}</main>
    </div>
  )
}

export default Layout