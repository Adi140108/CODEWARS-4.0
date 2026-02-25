import React, { useEffect, useRef, useState } from 'react';

const Roadmap = () => {
    const [visibleItems, setVisibleItems] = useState(new Set());
    const [isRegOpen, setIsRegOpen] = useState(false);
    const itemRefs = useRef([]);

    // Check if registrations are currently open
    useEffect(() => {
        const checkRegStatus = () => {
            const now = new Date();
            const openDate = new Date('2026-02-19T00:00:00+05:30');
            const closeDate = new Date('2026-02-26T23:59:59+05:30');
            setIsRegOpen(now >= openDate && now <= closeDate);
        };
        checkRegStatus();
        const interval = setInterval(checkRegStatus, 60000);
        return () => clearInterval(interval);
    }, []);

    const events = [
        { time: "Feb 19", title: "Online Registrations Open", desc: "Online registration begins! Form your team and secure your spot.", icon: "🚀" },
        { time: "Feb 25, 2:00 AM", title: "Online Registrations Close", desc: "Last day to register online. On-spot registration also available.", icon: "🔒" },
        { time: "Feb 28,09:00 AM", title: "Offline Registration Desk Opens", desc: "Check-in at the venue, collect your badges and get ready!", icon: "📋" },
        { time: "11:00 AM", title: "Inauguration", desc: "Welcome address, rules briefing & team formation", icon: "🎤" },
        { time: "60 MIN", title: "Round 1: Trivia Triumph", desc: "Fast-paced Menti Quiz — speed & accuracy matter!", icon: "⚡" },
        { time: "90 MIN", title: "Round 2: Byte-sized Battle", desc: "Code Golf challenge — shortest code wins!", icon: "⛳" },
        { time: "120 MIN", title: "Round 3: Bug Buster", desc: "Debug, fix & sabotage your opponents' code!", icon: "🐛" },
        { time: "04:00 PM", title: "Valediction", desc: "Prize distribution, certificates & closing ceremony", icon: "🏆" }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = Number(entry.target.dataset.index);
                        setVisibleItems((prev) => new Set([...prev, index]));
                    }
                });
            },
            { threshold: 0.3 }
        );

        itemRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <section id="roadmap" className="section-padding">
            <div className="container">
                <h2 className="section-title">Event Timeline</h2>
                <p className="roadmap-subtitle">Your journey through Code Wars 4.0</p>

                <div className="timeline">
                    <div className="timeline-line"></div>
                    {events.map((event, index) => (
                        <div
                            key={index}
                            className={`timeline-item ${visibleItems.has(index) ? 'visible' : ''}`}
                            data-index={index}
                            ref={(el) => (itemRefs.current[index] = el)}
                            style={{ '--delay': `${index * 0.15}s` }}
                        >
                            <div className="timeline-dot">
                                <span className="dot-icon">{event.icon}</span>
                            </div>
                            <div className={`timeline-content ${index === 0 && isRegOpen ? 'reg-open-card' : ''} ${index === 0 && !isRegOpen ? 'reg-closed-card' : ''}`}>
                                <span className="time">{event.time}</span>
                                {index === 0 && isRegOpen && (
                                    <span className="live-badge">
                                        <span className="live-dot"></span>
                                        LIVE
                                    </span>
                                )}
                                {index === 0 && !isRegOpen && (
                                    <span className="closed-badge">CLOSED</span>
                                )}
                                <h3>{event.title}</h3>
                                <p>{event.desc}</p>
                                <div className="card-glow"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .section-padding {
                    padding: 100px 0;
                    background-color: transparent;
                }

                .roadmap-subtitle {
                    text-align: center;
                    color: #888;
                    font-size: 1.1rem;
                    margin-top: -1rem;
                    margin-bottom: 4rem;
                    letter-spacing: 1px;
                }

                .timeline {
                    max-width: 900px;
                    margin: 0 auto;
                    position: relative;
                    padding: 2rem 0;
                }

                .timeline-line {
                    position: absolute;
                    left: 0;
                    top: 0;
                    height: 100%;
                    width: 3px;
                    background: linear-gradient(
                        to bottom,
                        transparent 0%,
                        var(--primary-color) 10%,
                        var(--secondary-color) 50%,
                        var(--accent-color) 90%,
                        transparent 100%
                    );
                    border-radius: 3px;
                    box-shadow: 0 0 15px rgba(0, 243, 255, 0.3);
                }

                .timeline-item {
                    margin-bottom: 2.5rem;
                    padding-left: 3rem;
                    position: relative;
                    opacity: 0;
                    transform: translateX(-30px);
                    transition: opacity 0.6s ease var(--delay), transform 0.6s ease var(--delay);
                }

                .timeline-item.visible {
                    opacity: 1;
                    transform: translateX(0);
                }

                .timeline-dot {
                    position: absolute;
                    left: -18px;
                    top: 50%;
                    transform: translateY(-50%);
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    background: #111;
                    border: 2px solid var(--primary-color);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 0 20px rgba(0, 243, 255, 0.3);
                    z-index: 2;
                    transition: all 0.3s ease;
                }

                .timeline-item:hover .timeline-dot {
                    transform: translateY(-50%) scale(1.2);
                    box-shadow: 0 0 30px rgba(0, 243, 255, 0.6);
                }

                .dot-icon {
                    font-size: 1.1rem;
                    line-height: 1;
                }

                .timeline-content {
                    background: rgba(255, 255, 255, 0.03);
                    backdrop-filter: blur(5px);
                    padding: 1.5rem 2rem;
                    border-radius: 12px;
                    border: 1px solid rgba(255, 255, 255, 0.06);
                    transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                    position: relative;
                    overflow: hidden;
                }

                .timeline-content:hover {
                    transform: translateX(10px) scale(1.02);
                    border-color: var(--primary-color);
                    background: rgba(255, 255, 255, 0.06);
                    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4);
                }

                .card-glow {
                    position: absolute;
                    top: -50%;
                    left: -50%;
                    width: 200%;
                    height: 200%;
                    background: radial-gradient(circle, rgba(0, 243, 255, 0.05) 0%, transparent 70%);
                    opacity: 0;
                    transition: opacity 0.4s ease;
                    pointer-events: none;
                }

                .timeline-content:hover .card-glow {
                    opacity: 1;
                }

                .time {
                    color: var(--primary-color);
                    font-weight: 700;
                    font-family: var(--font-mono);
                    font-size: 0.9rem;
                    margin-bottom: 0.5rem;
                    display: inline-block;
                    background: rgba(0, 243, 255, 0.08);
                    padding: 0.25rem 0.75rem;
                    border-radius: 20px;
                    letter-spacing: 1px;
                }

                .live-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.4rem;
                    background: rgba(0, 255, 100, 0.1);
                    color: #00ff64;
                    font-size: 0.7rem;
                    font-weight: 700;
                    font-family: var(--font-mono);
                    padding: 0.2rem 0.7rem;
                    border-radius: 20px;
                    border: 1px solid rgba(0, 255, 100, 0.3);
                    letter-spacing: 2px;
                    margin-left: 0.5rem;
                }

                .live-dot {
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    background: #00ff64;
                    animation: blink-green 1.5s ease-in-out infinite;
                    box-shadow: 0 0 6px #00ff64;
                }

                @keyframes blink-green {
                    0%, 100% { opacity: 1; box-shadow: 0 0 6px #00ff64; }
                    50% { opacity: 0.3; box-shadow: 0 0 2px #00ff64; }
                }

                .closed-badge {
                    display: inline-block;
                    background: rgba(255, 80, 80, 0.1);
                    color: #ff5050;
                    font-size: 0.7rem;
                    font-weight: 700;
                    font-family: var(--font-mono);
                    padding: 0.2rem 0.7rem;
                    border-radius: 20px;
                    border: 1px solid rgba(255, 80, 80, 0.3);
                    letter-spacing: 2px;
                    margin-left: 0.5rem;
                }

                .reg-open-card {
                    border-color: rgba(0, 255, 100, 0.25) !important;
                    box-shadow: 0 0 20px rgba(0, 255, 100, 0.08);
                }

                .reg-closed-card {
                    opacity: 0.5;
                }

                .timeline-content h3 {
                    margin: 0.8rem 0 0.5rem;
                    color: #fff;
                    font-size: 1.3rem;
                    letter-spacing: 0.5px;
                }

                .timeline-content p {
                    color: #999;
                    line-height: 1.5;
                    font-size: 0.95rem;
                }

                @media (min-width: 768px) {
                    .timeline-line {
                        left: 50%;
                        transform: translateX(-50%);
                    }

                    .timeline-item {
                        width: 50%;
                        padding-left: 0;
                        margin-bottom: 2rem;
                    }

                    .timeline-item:nth-child(odd) {
                        text-align: right;
                        padding-right: 3.5rem;
                        left: 0;
                        transform: translateX(-30px);
                    }

                    .timeline-item:nth-child(even) {
                        text-align: left;
                        padding-left: 3.5rem;
                        left: 50%;
                        transform: translateX(30px);
                    }

                    .timeline-item.visible:nth-child(odd),
                    .timeline-item.visible:nth-child(even) {
                        transform: translateX(0);
                    }

                    .timeline-item:nth-child(odd) .timeline-dot {
                        left: auto;
                        right: -20px;
                    }

                    .timeline-item:nth-child(even) .timeline-dot {
                        left: -20px;
                    }

                    .timeline-content:hover {
                        transform: scale(1.05);
                    }
                }

                @media (max-width: 767px) {
                    .timeline-item {
                        padding-left: 3.5rem;
                    }

                    .timeline-line {
                        left: 2px;
                    }
                }
            `}</style>
        </section>
    );
};

export default Roadmap;
