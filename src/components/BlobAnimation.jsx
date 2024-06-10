import React, { useEffect } from 'react';
import './BlobAnimation.css';

const BlobAnimation = () => {
  useEffect(() => {
    const blobs = document.querySelectorAll('.blob');

    blobs.forEach(blob => {
      const duration = Math.random() * (8000 - 4000) + 4000; // Durasi acak antara 4 dan 8 detik
      const scale = Math.random() * (1.2 - 0.8) + 0.8; // Skala acak antara 0.8 dan 1.2
      const x = Math.random() * (50 - -50) + -50; // Pergerakan horizontal acak antara -50px dan 50px
      const y = Math.random() * (50 - -50) + -50; // Pergerakan vertikal acak antara -50px dan 50px

      blob.animate(
        [
          { transform: 'scale(1) translate(0, 0)' },
          { transform: `scale(${scale}) translate(${x}px, ${y}px)` },
          { transform: 'scale(1) translate(0, 0)' }
        ],
        {
          duration: duration,
          iterations: Infinity,
          easing: 'ease-in-out',
          direction: 'alternate'
        }
      );
    });
  }, []);

  return (
    <div className="blob-container">
      <div className="blob"></div>
      <div className="blob"></div>
      <div className="blob"></div>
    </div>
  );
};

export default BlobAnimation;
