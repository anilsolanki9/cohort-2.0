import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import Services from './components/Services';
import './App.css';

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Stats />
      <Services />
    </>
  );
}
