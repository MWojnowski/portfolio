import "./app.scss";
import Carousel from "./components/Carousel/carousel";
import Contact from "./components/Contact/contact";
import Hero from "./components/Hero/hero";
import Navbar from "./components/Navbar/Navbar";
import Parallax from "./components/parallax/parallax";
import Portfolio from "./components/Portfolio/portfolio";


const App = () => {
  return <div>
    <section id="Główna">
     <Navbar/>
     <Hero/>
    </section>
    <section id="Oferta">
      <Parallax type="services" />
    </section>
      <Portfolio/>
    <section id="Opinie">
      <Parallax type="Opinions"/>
    </section>
    <section>
      <Carousel/>
    </section>
    <section id="Kontakt">
      <Contact/>
    </section>
  </div>;
};

export default App;