import React, { useEffect, useRef, useState } from 'react';

const Rounds = () => {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const [visibleSections, setVisibleSections] = useState(new Set());
  const cardRefs = useRef([]);
  const sectionRefs = useRef([]);

  const rounds = [
    {
      id: 1,
      title: "Trivia Triumph",
      subtitle: "Speed & Accuracy",
      description: "A fast-paced quiz on Menti. Questions cover coding, algorithms, and logical reasoning. Points awarded for speed and accuracy.",
      icon: "⚡",
      color: "var(--primary-color)"
    },
    {
      id: 2,
      title: "Byte-sized Battle",
      subtitle: "Code Golf",
      description: "Write correct solutions using the fewest characters possible. 1v1 matchups where concise code wins.",
      icon: "⛳",
      color: "#ff9f43"
    },
    {
      id: 3,
      title: "Bug Buster",
      subtitle: "Debug & Sabotage",
      description: "Fix buggy code efficiently. Includes a strategic 'sabotage' phase to inject bugs into opponent code.",
      icon: "🐛",
      color: "#bc13fe"
    }
  ];

  const roundDetails = [
    {
      description: "An interactive quiz that tests your knowledge about coding, algorithms, logical reasoning, and general computer science concepts.",
      details: [
        { label: "Duration", value: "30 min" },
        { label: "Format", value: "Interactive real-time quiz" },
        { label: "Platform", value: "To be announced on-spot" },
        { label: "Judging", value: "Speed & accuracy of responses" }
      ]
    },
    {
      description: "A code golf challenge where teams compete to write the most concise yet functional solution to programming problems.",
      details: [
        { label: "Duration", value: "30 min" },
        { label: "Format", value: "One-on-one team matchups based on chosen language" },
        { label: "Objective", value: "Fewest characters of correct code wins" },
        { label: "Tiebreakers", value: "Submission time, execution efficiency" }
      ]
    },
    {
      description: "The ultimate debugging challenge with a strategic sabotage element where teams fix buggy code while also injecting bugs into opponents' code.",
      details: [
        { label: "Duration", value: "90 min" },
        { label: "Format", value: "Debug code with all errors as quickly as possible" },
        { label: "Strategic element", value: "3-minute window to inject bugs into opponent's code" },
        { label: "Judging", value: "Speed and correctness of debugging" }
      ]
    }
  ];

  useEffect(() => {
    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.dataset.cardindex);
            setVisibleCards((prev) => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.15 }
    );

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.dataset.sectionindex);
            setVisibleSections((prev) => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.15 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) cardObserver.observe(ref);
    });

    sectionRefs.current.forEach((ref) => {
      if (ref) sectionObserver.observe(ref);
    });

    return () => {
      cardObserver.disconnect();
      sectionObserver.disconnect();
    };
  }, []);

  return (
    <section id="rounds" className="rounds-section">
      <div className="container">
        <h2 className="section-title">The Battlefield</h2>

        {/* Quick Overview Cards */}
        <div className="rounds-grid">
          {rounds.map((round, index) => (
            <div
              key={round.id}
              className={`round-card ${visibleCards.has(index) ? 'card-visible' : ''}`}
              style={{ '--card-color': round.color, '--card-delay': `${index * 0.2}s` }}
              data-cardindex={index}
              ref={(el) => (cardRefs.current[index] = el)}
            >
              <div className="round-number">0{round.id}</div>
              <div className="round-icon">{round.icon}</div>
              <h3 className="round-title">Round {round.id}: {round.title}</h3>
              <h4 className="round-subtitle">{round.subtitle}</h4>
              <p className="round-desc">{round.description}</p>
              <div className="card-border"></div>
            </div>
          ))}
        </div>

        {/* Detailed Breakdown */}
        <div className="details-section">
          <h3 className="details-heading">Detailed Breakdown</h3>
          {roundDetails.map((round, index) => (
            <div
              key={index}
              className={`detail-card ${visibleSections.has(index) ? 'detail-visible' : ''} ${index % 2 === 1 ? 'slide-right' : 'slide-left'}`}
              style={{
                '--detail-delay': `${index * 0.2}s`,
                '--accent-color': rounds[index].color
              }}
              data-sectionindex={index}
              ref={(el) => (sectionRefs.current[index] = el)}
            >
              <div className="detail-accent"></div>
              <div className="detail-inner">
                <div className="detail-header">
                  <span className="detail-round-badge" style={{ borderColor: rounds[index].color, color: rounds[index].color }}>
                    <span className="badge-icon">{rounds[index].icon}</span> Round {index + 1}
                  </span>
                  <h3 className="detail-title" style={{ color: rounds[index].color }}>
                    {rounds[index].title.toUpperCase()}
                  </h3>
                </div>
                <p className="detail-desc">{round.description}</p>
                <div className="info-grid">
                  {round.details.map((detail, i) => (
                    <div
                      key={i}
                      className={`info-pill ${visibleSections.has(index) ? 'pill-visible' : ''}`}
                      style={{ '--pill-delay': `${(index * 0.2) + 0.3 + (i * 0.1)}s` }}
                    >
                      <span className="info-dot" style={{ background: rounds[index].color }}></span>
                      <span className="info-text">
                        <strong>{detail.label}:</strong> {detail.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .rounds-section {
          padding: 100px 0;
          background-color: transparent;
        }

        .rounds-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          padding: 2rem 0;
        }

        /* Overview Cards */
        .round-card {
          background: #111;
          padding: 2.5rem;
          border-radius: 15px;
          position: relative;
          overflow: hidden;
          transition: all 0.4s ease;
          border: 1px solid rgba(255, 255, 255, 0.05);
          opacity: 0;
          transform: translateY(40px) scale(0.95);
        }

        .round-card.card-visible {
          opacity: 1;
          transform: translateY(0) scale(1);
          transition: opacity 0.6s ease var(--card-delay),
                      transform 0.6s ease var(--card-delay);
        }

        .round-card:hover {
          transform: translateY(-10px) scale(1.02);
          background: #161616;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.5);
        }

        .round-card:hover .card-border {
          opacity: 1;
        }

        .round-card:hover .round-icon {
          transform: scale(1.2) rotate(5deg);
        }

        .round-number {
          position: absolute;
          top: 15px;
          right: 20px;
          font-size: 3.5rem;
          font-weight: 800;
          color: rgba(255, 255, 255, 0.03);
          font-family: var(--font-mono);
          line-height: 1;
          pointer-events: none;
        }

        .card-border {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: 2px solid var(--card-color);
          border-radius: 15px;
          opacity: 0;
          transition: opacity 0.4s;
          pointer-events: none;
          box-shadow: inset 0 0 20px var(--card-color);
        }

        .round-icon {
          font-size: 3rem;
          margin-bottom: 1.5rem;
          filter: drop-shadow(0 0 10px var(--card-color));
          transition: transform 0.4s ease;
          display: inline-block;
        }

        .round-title {
          font-size: 1.4rem;
          margin-bottom: 0.5rem;
          color: #fff;
        }

        .round-subtitle {
          font-size: 1rem;
          color: var(--card-color);
          margin-bottom: 1.5rem;
          font-family: var(--font-mono);
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .round-desc {
          color: #aaa;
          line-height: 1.6;
          font-size: 0.95rem;
        }

        /* Detailed Breakdown */
        .details-section {
          margin-top: 5rem;
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }

        .details-heading {
          text-align: center;
          color: #fff;
          font-size: 1.6rem;
          font-family: var(--font-mono);
          letter-spacing: 1px;
          margin-bottom: 0.5rem;
        }

        .detail-card {
          position: relative;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 16px;
          overflow: hidden;
          opacity: 0;
          transition: all 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .detail-card.slide-left {
          transform: translateX(-50px) scale(0.97);
        }

        .detail-card.slide-right {
          transform: translateX(50px) scale(0.97);
        }

        .detail-card.detail-visible {
          opacity: 1;
          transform: translateX(0) scale(1);
          transition-delay: var(--detail-delay);
        }

        .detail-card:hover {
          border-color: var(--accent-color);
          background: rgba(255, 255, 255, 0.04);
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        /* Glowing accent bar on left */
        .detail-accent {
          position: absolute;
          top: 0;
          left: 0;
          width: 4px;
          height: 0%;
          background: var(--accent-color);
          border-radius: 4px 0 0 4px;
          box-shadow: 0 0 15px var(--accent-color), 0 0 30px var(--accent-color);
          transition: height 0.8s ease;
          transition-delay: calc(var(--detail-delay) + 0.3s);
        }

        .detail-card.detail-visible .detail-accent {
          height: 100%;
        }

        .detail-inner {
          padding: 2.5rem 3rem;
        }

        .detail-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .detail-round-badge {
          border: 1px solid;
          padding: 0.35rem 1rem;
          border-radius: 20px;
          font-size: 0.75rem;
          font-family: var(--font-mono);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          white-space: nowrap;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          transition: all 0.3s ease;
        }

        .detail-card:hover .detail-round-badge {
          background: var(--accent-color);
          color: #000 !important;
        }

        .badge-icon {
          font-size: 0.9rem;
        }

        .detail-title {
          font-size: 1.3rem;
          font-family: var(--font-mono);
          font-weight: 700;
          letter-spacing: 1.5px;
        }

        .detail-desc {
          color: #bbb;
          font-size: 1rem;
          line-height: 1.7;
          margin-bottom: 2rem;
          max-width: 800px;
        }

        .info-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        /* Info Pills with staggered reveal */
        .info-pill {
          background: rgba(0, 0, 0, 0.4);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 10px;
          padding: 1rem 1.5rem;
          display: flex;
          align-items: flex-start;
          gap: 0.8rem;
          opacity: 0;
          transform: translateY(15px);
          transition: opacity 0.5s ease, transform 0.5s ease, background 0.3s ease, border-color 0.3s ease;
        }

        .info-pill.pill-visible {
          opacity: 1;
          transform: translateY(0);
          transition-delay: var(--pill-delay);
        }

        .info-pill:hover {
          background: rgba(0, 0, 0, 0.7);
          border-color: rgba(255, 255, 255, 0.15);
          transform: translateY(-3px) translateX(5px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        }

        .info-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          flex-shrink: 0;
          margin-top: 6px;
          box-shadow: 0 0 8px currentColor;
          animation: pulse-dot 2s ease-in-out infinite;
        }

        @keyframes pulse-dot {
          0%, 100% { box-shadow: 0 0 6px currentColor; transform: scale(1); }
          50% { box-shadow: 0 0 14px currentColor, 0 0 20px currentColor; transform: scale(1.3); }
        }

        .info-text {
          color: #ccc;
          font-size: 0.9rem;
          line-height: 1.4;
        }

        .info-text strong {
          color: #fff;
        }

        @media (max-width: 900px) {
          .rounds-grid {
            grid-template-columns: 1fr;
            max-width: 500px;
            margin: 0 auto;
          }
        }

        @media (max-width: 768px) {
          .info-grid {
            grid-template-columns: 1fr;
          }

          .detail-inner {
            padding: 2rem 1.5rem;
          }

          .detail-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
          }

          .detail-card.slide-left,
          .detail-card.slide-right {
            transform: translateY(30px) scale(0.97);
          }
        }
      `}</style>
    </section>
  );
};

export default Rounds;
