import BMC from './bmcCard'
import Footer from './footer'
import Header from './header'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        {children}
        <BMC />
      </main>
      <Footer />
    </>
  )
}

export default Layout
