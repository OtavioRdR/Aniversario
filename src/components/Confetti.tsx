import React, { useEffect } from 'react';

const Confetti: React.FC = () => {
  useEffect(() => {
    const colors = ['#FFD700', '#FFA500', '#FF69B4', '#00CED1', '#9370DB'];
    const numConfetti = 50;
    
    const createConfetti = () => {
      const confetti = document.createElement('div');
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      
      confetti.className = 'absolute animate-confetti';
      confetti.style.backgroundColor = randomColor;
      confetti.style.left = Math.random() * 100 + 'vw';
      confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
      confetti.style.opacity = (Math.random() * 0.5 + 0.5).toString();
      confetti.style.width = '10px';
      confetti.style.height = '10px';
      confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
      
      document.getElementById('confetti-container')?.appendChild(confetti);
      
      setTimeout(() => {
        confetti.remove();
      }, 5000);
    };

    const interval = setInterval(() => {
      createConfetti();
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return <div id="confetti-container" className="fixed inset-0 pointer-events-none" />;
};

export default Confetti;