
import './App.css'
import Footer from "./components/Footer/Footer.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Products from "./components/Products/Products.jsx";
import AboutCoffee from "./components/AboutCoffee/AboutCoffee.jsx";
import OrderProcess from "./components/OrderProcess/OrderProcess.jsx";
import Header from "./components/Header/Header.jsx";

function App() {


  return (
    <>
     <Header/>
      <main>
        <Hero/>
        <Products/>
        <AboutCoffee/>
        <OrderProcess/>
      </main>
      <Footer/>

    </>
  )
}

export default App
