import React, { useEffect, useRef, useState } from 'react';

const Rules = () => {
  const [visibleSections, setVisibleSections] = useState(new Set());
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.dataset.index);
            setVisibleSections((prev) => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const generalRules = [
    { icon: "👥", title: "Team Size", desc: "Max 2 members per team. Solo participation is also allowed." },
    { icon: "📊", title: "Scoring", desc: "Scores from all rounds accumulate to determine the final winners." },
    { icon: "⚔️", title: "Matchups", desc: "Round 2 features 1v1 matchups where teams compete for points." },
    { icon: "🏁", title: "Victory", desc: "Round 3 winner determined by debugging speed & accuracy." }
  ];

  const violations = [
    { title: "Plagiarism", desc: "Unauthorized collaboration or external help will result in disqualification." },
    { title: "Team Disruption", desc: "Disrupting another team (outside of Round 3 bug injection) will lead to immediate disqualification." },
    { title: "Unfair Debugging", desc: "Deleting code instead of fixing it will result in penalty points or disqualification." }
  ];

  const restrictions = [
    { icon: "🚫", text: "No AI tools — ChatGPT, Copilot, etc." },
    { icon: "🚫", text: "No internet browsing or StackOverflow" },
    { icon: "🚫", text: "No unauthorized communication between teams" },
    { icon: "🚫", text: "No deletion of code during sabotage — only inject bugs" },
    { icon: "✅", text: "Sabotage ONLY during Bug Injection phase in Round 3" }
  ];

  return (
    <section id="rules" className="section-padding">
      <div className="container">
        <h2 className="section-title">Rules of Engagement</h2>

        {/* General Rules */}
        <div
          className={`rules-group ${visibleSections.has(0) ? 'visible' : ''}`}
          data-index="0"
          ref={(el) => (sectionRefs.current[0] = el)}
        >
          <h3 className="group-title">General Rules</h3>
          <div className="rules-grid">
            {generalRules.map((rule, i) => (
              <div
                key={i}
                className={`rule-item card-anim ${visibleSections.has(0) ? 'card-in' : ''}`}
                style={{ '--i': i }}
              >
                <span className="rule-icon">{rule.icon}</span>
                <h4>{rule.title}</h4>
                <p>{rule.desc}</p>
                <div className="card-accent"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Fair Play & Violations */}
        <div
          className={`rules-group ${visibleSections.has(1) ? 'visible' : ''}`}
          data-index="1"
          ref={(el) => (sectionRefs.current[1] = el)}
        >
          <h3 className="group-title">Fair Play & Violation Consequences</h3>
          <div className="violations-grid">
            {violations.map((v, i) => (
              <div
                key={i}
                className={`violation-card card-anim ${visibleSections.has(1) ? 'card-in' : ''}`}
                style={{ '--i': i }}
              >
                <div className="warning-stripe"></div>
                <h4>{v.title}</h4>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Restrictions */}
        <div
          className={`rules-group ${visibleSections.has(2) ? 'visible' : ''}`}
          data-index="2"
          ref={(el) => (sectionRefs.current[2] = el)}
        >
          <h3 className="group-title">Restrictions & Permissions</h3>
          <div className="restrictions-list">
            {restrictions.map((r, i) => (
              <div
                key={i}
                className={`restriction-item card-anim ${visibleSections.has(2) ? 'card-in' : ''} ${r.icon === '✅' ? 'res-allowed' : 'res-blocked'}`}
                style={{ '--i': i }}
              >
                <div className="res-stripe"></div>
                <span className="restriction-icon">{r.icon}</span>
                <p>{r.text}</p>
              </div>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        .section-padding {
          padding: 100px 0;
          background-color: transparent;
        }

        .rules-group {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          padding: 3rem;
          margin-bottom: 3rem;
          backdrop-filter: blur(5px);
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.7s ease;
        }

        .rules-group.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .group-title {
          color: #fff;
          font-size: 1.6rem;
          margin-bottom: 2rem;
          text-align: center;
          font-family: var(--font-mono);
          letter-spacing: 1px;
          position: relative;
          padding-bottom: 1rem;
        }

        .group-title::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 3px;
          background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
          border-radius: 3px;
        }

        /* Shared card entrance animation */
        .card-anim {
          opacity: 0;
          transform: translateY(25px) scale(0.95);
        }

        .card-anim.card-in {
          animation: cardSlideIn 0.6s ease forwards;
          animation-delay: calc(var(--i) * 0.13s + 0.2s);
        }

        @keyframes cardSlideIn {
          from {
            opacity: 0;
            transform: translateY(25px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        /* General Rules Grid */
        .rules-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1.5rem;
        }

        .rule-item {
          background: rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          padding: 2rem 1.5rem;
          text-align: center;
          position: relative;
          overflow: hidden;
          transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
        }

        .rule-item:hover {
          transform: translateY(-8px) scale(1.03) !important;
          border-color: var(--primary-color);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.5), 0 0 15px rgba(0, 243, 255, 0.1);
        }

        .rule-item:hover .card-accent {
          height: 100%;
        }

        .rule-item:hover .rule-icon {
          transform: scale(1.3) rotate(5deg);
        }

        .card-accent {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 3px;
          height: 0;
          background: var(--primary-color);
          box-shadow: 0 0 10px var(--primary-color);
          transition: height 0.4s ease;
          border-radius: 3px;
        }

        .rule-icon {
          font-size: 2.2rem;
          display: block;
          margin-bottom: 1rem;
          transition: transform 0.4s ease;
        }

        .rule-item h4 {
          color: #fff;
          font-size: 1.1rem;
          margin-bottom: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .rule-item p {
          color: #999;
          font-size: 0.9rem;
          line-height: 1.5;
        }

        /* Violations Grid */
        .violations-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
        }

        .violation-card {
          background: rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          padding: 2rem 1.5rem;
          position: relative;
          overflow: hidden;
          transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
        }

        .warning-stripe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 3px;
          background: linear-gradient(90deg, #ff4444, #ff8800);
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .violation-card:hover .warning-stripe {
          opacity: 1;
        }

        .violation-card:hover {
          transform: translateY(-8px) scale(1.03) !important;
          border-color: rgba(255, 68, 68, 0.4);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.5), 0 0 15px rgba(255, 68, 68, 0.1);
        }

        .violation-card h4 {
          color: #fff;
          font-size: 1.2rem;
          margin-bottom: 0.8rem;
          font-weight: 700;
        }

        .violation-card p {
          color: #999;
          font-size: 0.9rem;
          line-height: 1.5;
        }

        /* Restrictions */
        .restrictions-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1rem;
        }

        .restriction-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          background: rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 10px;
          padding: 1.2rem 1.5rem;
          position: relative;
          overflow: hidden;
          transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
        }

        .res-stripe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 3px;
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .res-blocked .res-stripe {
          background: linear-gradient(90deg, #ff4444, #ff8800);
        }

        .res-allowed .res-stripe {
          background: linear-gradient(90deg, #00ff64, #00e5ff);
        }

        .restriction-item:hover .res-stripe {
          opacity: 1;
        }

        .res-blocked:hover {
          transform: translateY(-6px) scale(1.02) !important;
          border-color: rgba(255, 68, 68, 0.4);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.5), 0 0 20px rgba(255, 68, 68, 0.15);
        }

        .res-allowed:hover {
          transform: translateY(-6px) scale(1.02) !important;
          border-color: rgba(0, 255, 100, 0.4);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.5), 0 0 20px rgba(0, 255, 100, 0.15);
        }

        .restriction-icon {
          font-size: 1.4rem;
          flex-shrink: 0;
          transition: transform 0.3s ease;
        }

        .restriction-item:hover .restriction-icon {
          transform: scale(1.3);
        }

        .restriction-item p {
          color: #ccc;
          font-size: 0.95rem;
          line-height: 1.4;
        }

        @media (max-width: 768px) {
          .rules-group {
            padding: 2rem 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Rules;
