import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Roadmap from './components/Roadmap';
import Prizes from './components/Prizes';
import Rounds from './components/Rounds';
import Rules from './components/Rules';
import Team from './components/Team';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import InteractiveBackground from './components/InteractiveBackground';
import './styles/index.css';
import './styles/animations.css';

function App() {
  return (
    <div className="App">
      <InteractiveBackground />
      <Navbar />
      <Hero />
      <About />
      <Roadmap />
      <Prizes />
      <Rounds />
      <Rules />
      <Team />
      <FAQ />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
