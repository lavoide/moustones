import React, { useState, useEffect } from 'react';
import type { Stone } from '../types/Stone.js';
import StoneCard from './StoneCard.js';
import './StoneShelf.css';

interface StoneShelfProps {
  stones: Stone[];
  onStoneClick: (stone: Stone) => void;
}

const StoneShelf: React.FC<StoneShelfProps> = ({ stones, onStoneClick }) => {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const backgroundStyle = {
    background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, #eee8aa 0%, #f5deb3 40%, #fdf5e6 100%)`
  };

  return (
    <div className="stone-shelf" style={backgroundStyle}>
      <h1 className="collection-title">Моя колекція каменів</h1>
      <div className="shelf-container">
        <div className="shelf-wood"></div>
        <div className="stones-grid">
          {stones.map((stone) => (
            <StoneCard
              key={stone.id}
              stone={stone}
              onClick={() => onStoneClick(stone)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StoneShelf;