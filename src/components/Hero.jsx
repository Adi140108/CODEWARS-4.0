import React, { useEffect, useState } from 'react';
import '../styles/animations.css';

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date('February 28, 2026 11:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-logo-container animate-float">
          <p className="anaadyanta-label">Part of</p>
          <img src="/assets/anaadyanta_final.png" alt="Anaadyanta '26" className="anaadyanta-logo" />
        </div>
        <h1 className="hero-title typing-effect">CODE WARS <span className="highlight">4.0</span></h1>
        <p className="hero-subtitle">The Ultimate Coding Battleground</p>

        <div className="countdown-wrapper fade-in-up">
          <p className="countdown-label">Event Countdown</p>
          <p className="event-date">FEBRUARY 28, 2026</p>
          <div className="countdown-container">
            <div className="countdown-item">
              <span className="count">{timeLeft.days}</span>
              <span className="label">Days</span>
            </div>
            <span className="separator">:</span>
            <div className="countdown-item">
              <span className="count">{timeLeft.hours}</span>
              <span className="label">Hours</span>
            </div>
            <span className="separator">:</span>
            <div className="countdown-item">
              <span className="count">{timeLeft.minutes}</span>
              <span className="label">Mins</span>
            </div>
            <span className="separator">:</span>
            <div className="countdown-item">
              <span className="count">{timeLeft.seconds}</span>
              <span className="label">Secs</span>
            </div>
          </div>
        </div>

        <div className="hero-actions fade-in-up">
          <a href="https://www.anaadyanta.in/events/gm_cw" target="_blank" rel="noopener noreferrer" className="btn-primary">Register Now</a>
          <a href="#rounds" className="btn-secondary">Explore Rounds</a>
        </div>
      </div>

      <style jsx>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow-x: hidden;
          padding-top: 120px; /* Increased from 60px to clear Navbar */
          padding-bottom: 60px; /* Add bottom padding */
        }

        .hero-content {
          text-align: center;
          z-index: 2;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .hero-logo-container {
          margin-bottom: 2rem;
        }

        .anaadyanta-label {
          color: #ccc;
          font-size: 1.2rem;
          font-family: 'Georgia', serif;
          font-style: italic;
          letter-spacing: 1px;
          margin-bottom: 0.5rem;
          font-weight: 300;
        }

        .anaadyanta-logo {
          max-width: 280px;
          display: block;
          margin: 0 auto 1.5rem;
          filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.3));
        }

        .hero-logo {
          max-width: 300px;
          filter: drop-shadow(0 0 20px rgba(188, 19, 254, 0.5));
        }

        .hero-title {
          font-size: 4rem;
          margin-bottom: 1rem;
          font-family: var(--font-mono);
          letter-spacing: 5px;
        }

        .highlight {
          color: var(--primary-color);
          text-shadow: 0 0 10px var(--primary-color);
        }

        .hero-subtitle {
          font-size: 1.8rem;
          color: #fff;
          margin-bottom: 2.5rem;
          text-transform: uppercase;
          letter-spacing: 3px;
          font-weight: 600;
          text-shadow: 0 0 10px rgba(0, 243, 255, 0.3);
        }

        .countdown-wrapper {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(10px);
          padding: 2rem 3rem;
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
          margin-bottom: 3rem;
          display: inline-flex;
          flex-direction: column;
          align-items: center;
        }

        .countdown-label {
          color: var(--primary-color);
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 0.5rem;
          font-weight: 500;
        }

        .event-date {
          color: #fff;
          font-size: 1.5rem;
          font-weight: 700;
          letter-spacing: 1px;
          margin-bottom: 1.5rem;
          text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
          font-family: var(--font-mono);
        }

        .countdown-container {
          display: flex;
          justify-content: center;
          align-items: center; /* Align separators correctly */
          gap: 1rem;
          margin-bottom: 0;
        }

        .countdown-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          min-width: 60px;
          /* Removed background on items since we have a wrapper card now */
          padding: 0.5rem;
        }

        .count {
          font-size: 2.5rem;
          font-weight: 700;
          color: #fff; /* Changed to white for better contrast inside card */
          font-family: var(--font-mono);
          text-shadow: 0 0 10px rgba(0, 243, 255, 0.5);
          line-height: 1;
        }

        .label {
          color: #aaa;
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-top: 5px;
        }
        
        .separator {
          font-size: 2rem;
          color: var(--primary-color);
          font-family: var(--font-mono);
          font-weight: 700;
          margin-bottom: 15px; /* Align with numbers visually */
          text-shadow: 0 0 10px rgba(0, 243, 255, 0.8);
          animation: blink-caret 1s step-end infinite; /* Reuse blink animation for interest */
        }

        .hero-actions {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
        }

        .btn-primary, .btn-secondary {
          padding: 1rem 2.5rem;
          border-radius: 50px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          transition: all 0.3s ease;
          cursor: pointer;
          text-decoration: none;
          display: inline-block;
        }

        .btn-primary {
          background: var(--primary-color);
          color: #000;
          box-shadow: 0 0 20px rgba(0, 243, 255, 0.4);
          border: 3px solid #fff;
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .btn-primary:hover {
          background: #fff;
          color: #000;
          box-shadow: 0 0 40px rgba(0, 243, 255, 0.9);
          transform: translateY(-5px) scale(1.05);
          border-color: var(--primary-color);
        }

        .btn-secondary {
          border: 2px solid var(--secondary-color);
          color: #fff;
        }

        .btn-secondary:hover {
          background: var(--secondary-color);
          box-shadow: 0 0 15px rgba(188, 19, 254, 0.6);
          transform: translateY(-3px);
        }

        .background-grid {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            linear-gradient(rgba(0, 243, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 243, 255, 0.05) 1px, transparent 1px);
          background-size: 50px 50px;
          z-index: 1;
          perspective: 1000px;
          transform: perspective(500px) rotateX(60deg) translateY(-100px) translateZ(-200px);
          animation: grid-move 20s linear infinite;
        }

        @keyframes grid-move {
          0% { transform: perspective(500px) rotateX(60deg) translateY(0) translateZ(-200px); }
          100% { transform: perspective(500px) rotateX(60deg) translateY(50px) translateZ(-200px); }
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }
          .hero-logo {
            max-width: 200px;
          }
          .btn-primary {
            width: 80%;
            max-width: 300px;
            padding: 1.2rem;
            font-size: 1.1rem;
            border-width: 3px;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
