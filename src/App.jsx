import NavBar from "./components/NavBar";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Footer from "./components/Footer";
import Technology from "./sections/Technology";
import Experience from "./sections/Experience";

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <About />
      <Projects />
      <Technology />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
