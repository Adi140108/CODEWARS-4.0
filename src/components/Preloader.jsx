import React, { useEffect, useState } from 'react';

const Preloader = ({ onComplete }) => {
  const [isZooming, setIsZooming] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Start zooming after a brief delay
    const zoomTimeout = setTimeout(() => {
      setIsZooming(true);
    }, 500);

    // Start exit transition after zoom is mostly complete
    const exitTimeout = setTimeout(() => {
      setIsExiting(true);
    }, 2000);

    // Call onComplete to unmount the preloader
    const completeTimeout = setTimeout(() => {
      if (onComplete) onComplete();
    }, 3200); // Increased to allow 2.5s transition + 0.5s start delay to finish

    return () => {
      clearTimeout(zoomTimeout);
      clearTimeout(exitTimeout);
      clearTimeout(completeTimeout);
    };
  }, [onComplete]);

  return (
    <div className={`preloader-overlay ${isExiting ? 'exit' : ''}`}>
      <div className={`logo-container ${isZooming ? 'zoom' : ''}`}>
        <img
          src="/assets/BigSoc Logo White.png"
          alt="Big O Society"
          className="preloader-logo"
        />
        <div className="logo-glow"></div>
      </div>

      <style>{`
        .preloader-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #000;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 10000;
          transition: opacity 0.8s ease-in-out, visibility 0.8s;
        }

        .preloader-overlay.exit {
          opacity: 0;
          visibility: hidden;
        }

        .logo-container {
          position: relative;
          width: 320px;
          height: 320px;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: transform 2.5s cubic-bezier(0.7, 0, 0.4, 1), opacity 2s ease;
          transform: scale(0.6);
          opacity: 0;
          animation: logoEntrance 0.8s forwards ease-out;
          transform-origin: center 54%; /* Adjusted to hit the exact center of the inner 'O' */
        }

        @keyframes logoEntrance {
          from { 
            transform: scale(0.4); 
            opacity: 0; 
          }
          to { 
            transform: scale(0.8); 
            opacity: 1; 
          }
        }

        .logo-container.zoom {
          transform: scale(500); /* Extreme scale to truly pass through the 'O' */
          opacity: 0; /* Fade out as it zooms through for a seamless transition */
        }

        .preloader-logo {
          width: 100%;
          height: 100%;
          object-fit: contain;
          position: relative;
          z-index: 2;
        }

        .logo-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 150%;
          height: 150%;
          background: radial-gradient(circle, rgba(0, 243, 255, 0.25) 0%, transparent 70%);
          z-index: 1;
          border-radius: 50%;
          animation: pulseGlow 2s infinite alternate;
        }

        @keyframes pulseGlow {
          from { transform: translate(-50%, -50%) scale(0.8); opacity: 0.3; }
          to { transform: translate(-50%, -50%) scale(1.1); opacity: 0.7; }
        }
      `}</style>
    </div>
  );
};

export default Preloader;
