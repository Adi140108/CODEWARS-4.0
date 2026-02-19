import React, { useEffect, useRef, useState } from 'react';

const Team = () => {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const cardRefs = useRef([]);

  const teamMembers = [
    { name: "Aarjika Lahiri", role: "President", image: "/assets/Aarjika.jpeg", linkedin: "https://www.linkedin.com/in/aarjika-lahiri-471129281/" },
    { name: "Ayush Sikriwal", role: "Vice President", image: "/assets/Ayush.jpeg", linkedin: "https://www.linkedin.com/in/ayush-sikriwal-88b93a203" },
    { name: "Himanshu Agarwal", role: "General Secretary", image: "/assets/Himanshu.jpeg", linkedin: "https://www.linkedin.com/in/himanshu-agarwal-3079b1304/" },
    { name: "Mridul Tiwari", role: "Tech Lead", image: "/assets/Mridul.jpg", linkedin: "https://www.linkedin.com/in/mridul-tiwari-502825291/" },
    { name: "Aditya Singh", role: "Design Head", image: "/assets/Aditya.png", linkedin: "https://www.linkedin.com/in/aditya-kumar-04a1b12b8/" },
    { name: "Harshit Hanabar", role: "Social Media Head", image: "/assets/Harshit.jpg", linkedin: "https://www.linkedin.com/in/harshit-hanabar-a3b203282/" },
    { name: "Prem Piyush", role: "Documentation Head", image: "/assets/Prem.jpeg", linkedin: "https://www.linkedin.com/in/prem-piyush-2185292ab/" },
    { name: "Bhargavi Saraswat", role: "Marketing Head", image: "/assets/Bhargavi.jpeg", linkedin: "https://www.linkedin.com/in/bhargavi-saraswat-441b31274/" },
    { name: "Parvathy S", role: "Public Relations Head", image: "/assets/Parvathy.jpeg", linkedin: "https://www.linkedin.com/in/parvathy-s-a14438281/" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.dataset.index);
            setVisibleCards((prev) => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.15 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="team" className="section-padding">
      <div className="container">
        <h2 className="section-title">Meet The Team</h2>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className={`team-card ${visibleCards.has(index) ? 'visible' : ''}`}
              data-index={index}
              ref={(el) => (cardRefs.current[index] = el)}
              style={{ '--delay': `${index * 0.1}s` }}
            >
              <div className="team-avatar">
                <img
                  src={member.image}
                  alt={member.name}
                  style={member.name === 'Ayush Sikriwal' ? { objectPosition: 'center 15%' } : {}}
                />
              </div>
              <h3 className="team-name">{member.name}</h3>
              <p className="team-role">{member.role}</p>
              <a href={member.linkedin} className="linkedin-btn" target="_blank" rel="noopener noreferrer">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .section-padding {
          padding: 100px 0;
          background-color: transparent;
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          max-width: 1000px;
          margin: 0 auto;
        }

        .team-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 15px;
          padding: 2.5rem 2rem;
          text-align: center;
          opacity: 0;
          transform: translateY(25px);
          transition: all 0.5s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .team-card.visible {
          opacity: 1;
          transform: translateY(0);
          transition-delay: var(--delay);
        }

        .team-card:hover {
          transform: translateY(-8px);
          border-color: var(--primary-color);
          box-shadow: 0 10px 35px rgba(0, 0, 0, 0.5);
          background: rgba(255, 255, 255, 0.05);
        }

        .team-avatar {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          overflow: hidden;
          margin-bottom: 1.5rem;
          border: 3px solid rgba(0, 243, 255, 0.3);
          transition: all 0.4s ease;
          flex-shrink: 0;
        }

        .team-avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          transition: transform 0.4s ease;
        }

        .team-card:hover .team-avatar {
          border-color: var(--primary-color);
          box-shadow: 0 0 25px rgba(0, 243, 255, 0.35);
        }

        .team-card:hover .team-avatar img {
          transform: scale(1.08);
        }

        .team-name {
          color: #fff;
          font-size: 1.15rem;
          margin-bottom: 0.3rem;
          font-weight: 600;
        }

        .team-role {
          color: var(--primary-color);
          font-size: 0.8rem;
          font-family: var(--font-mono);
          letter-spacing: 0.5px;
          margin-bottom: 1rem;
        }

        .linkedin-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #aaa;
          transition: all 0.3s ease;
          text-decoration: none;
          margin-top: auto;
        }

        .linkedin-btn:hover {
          border-color: var(--primary-color);
          color: var(--primary-color);
          box-shadow: 0 0 12px rgba(0, 243, 255, 0.3);
        }

        @media (max-width: 768px) {
          .team-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }

          .team-card {
            padding: 2rem 1.2rem;
          }

          .team-avatar {
            width: 90px;
            height: 90px;
          }
        }

        @media (max-width: 480px) {
          .team-grid {
            grid-template-columns: 1fr;
            max-width: 320px;
          }
        }
      `}</style>
    </section>
  );
};

export default Team;
