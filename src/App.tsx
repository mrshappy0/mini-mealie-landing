import { About } from "./components/About";
// import { Cta } from "./components/Cta";
import { FAQ } from "./components/FAQ";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { Navbar } from "./components/Navbar";
import { Newsletter } from "./components/Newsletter";
import { ScrollToTop } from "./components/ScrollToTop";
import { Team } from "./components/Team";
import { Testimonials } from "./components/Testimonials";
import { ToastContainer } from 'react-toastify';
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <HowItWorks />
      <Features />
      {/* <Cta /> */} {/* TODO: consider removing */}
      <Testimonials />
      <Team />
      <Newsletter />
      <FAQ />
      <Footer />
      <ScrollToTop />
      <ToastContainer />
    </>
  );
}

export default App;
