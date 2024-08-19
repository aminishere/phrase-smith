import About from "./components/About";

import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";


export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero/>
      <About/>
      
      <HowItWorks/>
      
      <Footer/>
    </main>
  );
}
