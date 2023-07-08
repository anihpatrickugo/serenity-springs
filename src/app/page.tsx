import Header from "./components/header"
import About from "./components/about"
import Services from "./components/services"
import Reservations from "./components/reservations"
import Footer from "./components/footer"

export default function Home() {
  return (
    <>
       <Header/>
       <About />
       <Services />
       <Reservations />
       <Footer/>
    </>
   
  )
}
