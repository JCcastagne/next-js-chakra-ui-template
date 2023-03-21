import './DefaultLayout.module.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

export default function DefaultLayout ({ children }) {
  return (
    <div class='DefaultLayout'>
      <Navbar />
      <main>{children && children}</main>
      <Footer />
    </div>
  )
}
