import React, { useState } from 'react';
import type { Stone } from '../types/Stone.js';
import './StoneCard.css';

interface StoneCardProps {
  stone: Stone;
  onClick: () => void;
}

const StoneCard: React.FC<StoneCardProps> = ({ stone, onClick }) => {
  const [imageLoaded, setImageLoaded] = useState(!!stone.image);
  const hasValidData = stone.name && stone.name.trim() !== '';

  return (
    <div
      className={`stone-card ${!hasValidData ? 'stone-card-empty' : ''}`}
      onClick={hasValidData ? onClick : undefined}
    >
      <div className="stone-image-container">
        {imageLoaded && stone.image && (
          <img
            src={stone.image}
            alt={stone.name}
            className="stone-image"
            onError={() => {
              setImageLoaded(false);
            }}
          />
        )}
      </div>
      <div className="stone-label">
        <span className="stone-name">{stone.name || ''}</span>
      </div>
    </div>
  );
};

export default StoneCard;