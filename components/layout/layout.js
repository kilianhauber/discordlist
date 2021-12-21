import Navbar from './navbar'
import Footer from './footer'

export default function Layout({ children }) {
  return (
    <>
      <main className="min-h-screen pb-8">{children}</main>
      <Footer />
    </>
  )
}
