import React, { useEffect, useRef, useState } from 'react';

const About = () => {
  const contentRef = useRef(null);
  const [cardsVisible, setCardsVisible] = useState(false);
  const cardsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCardsVisible(true);
          }
        });
      },
      { threshold: 0.15 }
    );

    if (contentRef.current) observer.observe(contentRef.current);
    if (cardsRef.current) cardObserver.observe(cardsRef.current);

    return () => {
      observer.disconnect();
      cardObserver.disconnect();
    };
  }, []);

  const features = [
    {
      id: 1,
      title: "Multiple Rounds",
      desc: "From interactive quizzes to intense coding battles and debugging challenges, navigate through challenging rounds that test different aspects of your skills.",
      color: "#00f3ff"
    },
    {
      id: 2,
      title: "Cash Prizes",
      desc: "Compete for a prize pool worth ₹7,000, along with exclusive vouchers, certificates, and recognition.",
      color: "#bc13fe"
    },
    {
      id: 3,
      title: "Networking",
      desc: "Connect with industry professionals, like-minded coders, and potential employers in a dynamic environment.",
      color: "#00ff9d"
    }
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container">
        <h2 className="section-title">About The Event</h2>

        <div className="about-content" ref={contentRef}>
          <div className="about-intro">
            <p>
              <span className="highlight-text">Code Wars</span> is a competitive event designed to identify and promote
              technical excellence among students. Participants are required to demonstrate strong
              analytical thinking, problem-solving abilities, and the capability to perform effectively under pressure.
            </p>
            <p>
              We are pleased to present the <span className="highlight-text">4th Edition</span> of CodeWars this year,
              continuing our commitment to fostering a strong competitive programming culture.
            </p>
          </div>

          <div className="features-grid" ref={cardsRef}>
            {features.map((feature, i) => (
              <div
                key={feature.id}
                className={`feature-card ${cardsVisible ? 'card-in' : ''}`}
                style={{ '--i': i, '--accent': feature.color }}
              >
                <div className="card-shimmer"></div>
                <div className="card-top-stripe"></div>
                <div className="feature-number">{feature.id}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-desc">{feature.desc}</p>
                <div className="card-glow-bg"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .section-padding {
          padding: 100px 0;
          background-color: transparent;
          position: relative;
        }

        .about-content {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease-out;
        }

        .about-content.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .about-intro {
          text-align: center;
          max-width: 800px;
          margin: 0 auto 4rem;
        }

        .about-intro p {
          margin-bottom: 1.5rem;
          font-size: 1.1rem;
          line-height: 1.8;
          color: #ccc;
        }

        .highlight-text {
          color: var(--primary-color);
          font-weight: 700;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .feature-card {
          background: #0a0a0a;
          padding: 3rem 2rem;
          border-radius: 15px;
          text-align: center;
          border: 1px solid rgba(255, 255, 255, 0.05);
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          overflow: hidden;
          opacity: 0;
          transform: translateY(30px) scale(0.95);
          transition: border-color 0.4s ease, box-shadow 0.4s ease, transform 0.4s ease;
        }

        .feature-card.card-in {
          animation: featureSlideIn 0.7s ease forwards;
          animation-delay: calc(var(--i) * 0.18s + 0.1s);
        }

        @keyframes featureSlideIn {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        /* Colored top stripe */
        .card-top-stripe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 3px;
          background: linear-gradient(90deg, var(--accent), transparent);
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .feature-card:hover .card-top-stripe {
          opacity: 1;
        }

        /* Shimmer sweep effect */
        .card-shimmer {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255, 255, 255, 0.03) 40%,
            rgba(255, 255, 255, 0.06) 50%,
            rgba(255, 255, 255, 0.03) 60%,
            transparent 100%
          );
          transition: left 0.6s ease;
          pointer-events: none;
          z-index: 1;
        }

        .feature-card:hover .card-shimmer {
          left: 100%;
        }

        /* Background glow on hover */
        .card-glow-bg {
          position: absolute;
          bottom: -50%;
          left: 50%;
          transform: translateX(-50%);
          width: 200%;
          height: 200%;
          background: radial-gradient(circle at center, var(--accent), transparent 70%);
          opacity: 0;
          transition: opacity 0.5s ease;
          pointer-events: none;
          z-index: 0;
        }

        .feature-card:hover .card-glow-bg {
          opacity: 0.04;
        }

        .feature-card:hover {
          transform: translateY(-10px) scale(1.03) !important;
          border-color: var(--accent);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.6), 0 0 25px color-mix(in srgb, var(--accent) 20%, transparent);
        }

        .feature-number {
          width: 60px;
          height: 60px;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--accent);
          margin-bottom: 1.5rem;
          box-shadow: 0 0 20px color-mix(in srgb, var(--accent) 15%, transparent);
          font-family: var(--font-mono);
          border: 1px solid color-mix(in srgb, var(--accent) 30%, transparent);
          transition: transform 0.4s ease, box-shadow 0.4s ease;
          position: relative;
          z-index: 2;
        }

        .feature-card:hover .feature-number {
          transform: scale(1.15);
          box-shadow: 0 0 30px color-mix(in srgb, var(--accent) 35%, transparent);
          animation: numberPulse 1.5s ease-in-out infinite;
        }

        @keyframes numberPulse {
          0%, 100% { box-shadow: 0 0 20px color-mix(in srgb, var(--accent) 25%, transparent); }
          50% { box-shadow: 0 0 35px color-mix(in srgb, var(--accent) 50%, transparent); }
        }

        .feature-title {
          font-size: 1.5rem;
          color: #fff;
          margin-bottom: 1rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          position: relative;
          z-index: 2;
          transition: color 0.3s ease;
        }

        .feature-card:hover .feature-title {
          color: var(--accent);
        }

        .feature-desc {
          color: #aaa;
          line-height: 1.6;
          font-size: 0.95rem;
          position: relative;
          z-index: 2;
        }
      `}</style>
    </section>
  );
};

export default About;
