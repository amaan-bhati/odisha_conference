import "./app.scss";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
import Culture from "./components/culture/culture";

const App = () => {
  return (
    <div>
      <Cursor />

      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
     
      
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      
      <Portfolio />
      <section>
        <Services />
      </section>
      <section id="Culture">
        <Culture />
      </section>
      <section id="Contact">
        <Contact />
      </section>
      
      {/* <Test/>
    <Test/> */}
    </div>
  );
};

export default App;
