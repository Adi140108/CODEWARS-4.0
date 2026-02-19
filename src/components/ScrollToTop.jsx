import React, { useState, useEffect } from 'react';

const ScrollToTop = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 400);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <button
                className={`scroll-top-btn ${visible ? 'show' : ''}`}
                onClick={scrollToTop}
                aria-label="Scroll to top"
            >
                ↑
            </button>

            <style jsx>{`
        .scroll-top-btn {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.6);
          border: 1px solid var(--primary-color);
          color: var(--primary-color);
          font-size: 1.4rem;
          cursor: pointer;
          z-index: 999;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.3s ease;
          pointer-events: none;
          backdrop-filter: blur(10px);
          box-shadow: 0 0 15px rgba(0, 243, 255, 0.2);
        }

        .scroll-top-btn.show {
          opacity: 1;
          transform: translateY(0);
          pointer-events: auto;
        }

        .scroll-top-btn:hover {
          background: var(--primary-color);
          color: #000;
          box-shadow: 0 0 25px rgba(0, 243, 255, 0.6);
          transform: translateY(-3px);
        }
      `}</style>
        </>
    );
};

export default ScrollToTop;
