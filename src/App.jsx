import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Roadmap from './components/Roadmap';
import Prizes from './components/Prizes';
import Rounds from './components/Rounds';
import Sponsors from './components/Sponsors';
import Rules from './components/Rules';
import Team from './components/Team';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import InteractiveBackground from './components/InteractiveBackground';
import Preloader from './components/Preloader';
import './styles/index.css';
import './styles/animations.css';

function App() {
  const [isLoading, setIsLoading] = React.useState(true);

  return (
    <div className="App">
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      <InteractiveBackground />
      <Navbar />
      <Hero />
      <About />
      <Roadmap />
      <Prizes />
      <Rounds />
      <Sponsors />
      <Rules />
      <Team />
      <FAQ />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
