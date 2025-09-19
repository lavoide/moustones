import React from 'react';
import type { Stone } from '../types/Stone.js';
import './StoneCard.css';

interface StoneCardProps {
  stone: Stone;
  onClick: () => void;
}

const StoneCard: React.FC<StoneCardProps> = ({ stone, onClick }) => {
  return (
    <div className="stone-card" onClick={onClick}>
      <div className="stone-image-container">
        <img
          src={stone.image}
          alt={stone.name}
          className="stone-image"
          onError={(e) => {
            (e.target as HTMLImageElement).src = '/img/placeholder-stone.jpg';
          }}
        />
      </div>
      <div className="stone-label">
        <span className="stone-name">{stone.name}</span>
      </div>
    </div>
  );
};

export default StoneCard;