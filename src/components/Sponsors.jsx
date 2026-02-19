import React, { useEffect, useRef, useState } from 'react';

const Sponsors = () => {
    const [visible, setVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setVisible(true);
            },
            { threshold: 0.15 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section id="sponsors" className="sponsors-section" ref={sectionRef}>
            <div className="container">
                <h2 className="section-title">Sponsors</h2>

                <div className={`sponsor-cta-card ${visible ? 'visible' : ''}`}>
                    <div className="cta-glow"></div>
                    <h3 className="cta-heading">Become a Sponsor</h3>
                    <p className="cta-desc">
                        Support the next generation of coding talent by sponsoring CodeWars 4.0.
                        Reach out to us for partnership opportunities.
                    </p>
                    <a href="mailto:bigsoc.nmit@gmail.com" className="cta-button">
                        Contact for Sponsorship
                    </a>
                </div>
            </div>

            <style>{`
        .sponsors-section {
          padding: 100px 0;
          background-color: transparent;
        }

        .sponsor-cta-card {
          max-width: 650px;
          margin: 0 auto;
          background: rgba(10, 10, 20, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 3.5rem 3rem;
          text-align: center;
          position: relative;
          overflow: hidden;
          opacity: 0;
          transform: translateY(30px) scale(0.97);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }

        .sponsor-cta-card.visible {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        .cta-glow {
          position: absolute;
          top: -50%;
          left: 50%;
          transform: translateX(-50%);
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(0, 243, 255, 0.06) 0%, transparent 70%);
          pointer-events: none;
        }

        .cta-heading {
          font-family: var(--font-mono);
          font-size: 1.8rem;
          color: #fff;
          margin-bottom: 1.2rem;
          letter-spacing: 1px;
          position: relative;
          z-index: 1;
        }

        .cta-desc {
          color: #aaa;
          font-size: 1rem;
          line-height: 1.7;
          max-width: 500px;
          margin: 0 auto 2rem;
          position: relative;
          z-index: 1;
        }

        .cta-button {
          display: inline-block;
          padding: 0.85rem 2.2rem;
          background: linear-gradient(135deg, #00f3ff, #00c4cc);
          color: #000;
          font-weight: 700;
          font-size: 0.95rem;
          border-radius: 8px;
          text-decoration: none;
          letter-spacing: 0.5px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          position: relative;
          z-index: 1;
        }

        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(0, 243, 255, 0.3);
        }

        .sponsor-cta-card:hover {
          border-color: rgba(0, 243, 255, 0.25);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4), 0 0 20px rgba(0, 243, 255, 0.05);
        }

        @media (max-width: 768px) {
          .sponsor-cta-card {
            padding: 2.5rem 1.5rem;
            margin: 0 1rem;
          }

          .cta-heading {
            font-size: 1.4rem;
          }
        }
      `}</style>
        </section>
    );
};

export default Sponsors;
