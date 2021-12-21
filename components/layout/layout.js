import Header from './header'
import Footer from './footer'

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="min-h-screen pb-8">{children}</main>
      <Footer />
    </>
  )
}
