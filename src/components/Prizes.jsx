import React, { useEffect, useRef, useState } from 'react';

const Prizes = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  const prizes = [
    {
      place: "1st Place",
      amount: "₹3,500",
      medalColor: "#FFD700",
      medalBg: "linear-gradient(135deg, #FFD700, #FFA500)",
      icon: "🏆",
      medal: "🥇",
      rewards: ["Certificate"]
    },
    {
      place: "2nd Place",
      amount: "₹2,500",
      medalColor: "#C0C0C0",
      medalBg: "linear-gradient(135deg, #C0C0C0, #A0A0A0)",
      icon: "🥈",
      medal: "🥈",
      rewards: ["Certificate"]
    },
    {
      place: "3rd Place",
      amount: "₹1,000",
      medalColor: "#CD7F32",
      medalBg: "linear-gradient(135deg, #CD7F32, #A0522D)",
      icon: "🥉",
      medal: "🥉",
      rewards: ["Certificate"]
    }
  ];

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
    <section id="prizes" className="prizes-section" ref={sectionRef}>
      <div className="container">
        <span className="prizes-label">Rewards</span>
        <h2 className="section-title">Prizes & Rewards</h2>
        <p className="prizes-subtitle">
          Compete for a total prize pool of <strong>₹7,000</strong> and recognition in CodeWars 4.0
        </p>

        <div className="prizes-grid">
          {prizes.map((prize, index) => (
            <div
              key={prize.place}
              className={`prize-card ${visible ? 'visible' : ''}`}
              style={{ '--delay': `${index * 0.2}s`, '--medal-color': prize.medalColor }}
            >
              <div className="medal-circle" style={{ background: prize.medalBg }}>
                <span className="medal-icon">{prize.icon}</span>
              </div>
              <h3 className="prize-place">{prize.place}</h3>
              <p className="prize-amount" style={{ color: prize.medalColor }}>{prize.amount}</p>
              <span className="trophy-emoji">{prize.medal}</span>
              <div className="additional-rewards">
                <p className="rewards-label">Additional Rewards:</p>
                {prize.rewards.map((reward) => (
                  <p key={reward} className="reward-item">{reward}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .prizes-section {
          padding: 100px 0;
          background-color: transparent;
        }

        .prizes-label {
          display: block;
          text-align: center;
          color: var(--primary-color);
          font-family: var(--font-mono);
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 3px;
          margin-bottom: 0.8rem;
          font-weight: 500;
        }

        .prizes-subtitle {
          text-align: center;
          color: #bbb;
          font-size: 1.05rem;
          line-height: 1.6;
          margin-bottom: 3.5rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .prizes-subtitle strong {
          color: #fff;
        }

        .prizes-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          max-width: 950px;
          margin: 0 auto;
        }

        .prize-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 16px;
          padding: 2.5rem 2rem;
          text-align: center;
          transition: all 0.5s ease;
          opacity: 0;
          transform: translateY(30px);
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .prize-card.visible {
          opacity: 1;
          transform: translateY(0);
          transition-delay: var(--delay);
        }

        .prize-card:hover {
          transform: translateY(-10px);
          border-color: var(--medal-color);
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
          background: rgba(255, 255, 255, 0.05);
        }

        .medal-circle {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        }

        .medal-icon {
          font-size: 2.2rem;
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));
        }

        .prize-place {
          color: #fff;
          font-size: 1.3rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .prize-amount {
          font-size: 1.8rem;
          font-weight: 800;
          font-family: var(--font-mono);
          margin-bottom: 0.5rem;
        }

        .trophy-emoji {
          font-size: 1.8rem;
          margin-bottom: 1.5rem;
        }

        .additional-rewards {
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          padding-top: 1.2rem;
          width: 100%;
        }

        .rewards-label {
          color: #fff;
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 0.6rem;
        }

        .reward-item {
          color: #999;
          font-size: 0.85rem;
          line-height: 1.8;
        }

        @media (max-width: 768px) {
          .prizes-grid {
            grid-template-columns: 1fr;
            max-width: 350px;
          }
        }
      `}</style>
    </section>
  );
};

export default Prizes;
