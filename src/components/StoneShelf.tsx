import React from 'react';
import type { Stone } from '../types/Stone.js';
import StoneCard from './StoneCard.js';
import './StoneShelf.css';

interface StoneShelfProps {
  stones: Stone[];
  onStoneClick: (stone: Stone) => void;
}

const StoneShelf: React.FC<StoneShelfProps> = ({ stones, onStoneClick }) => {
  return (
    <div className="stone-shelf">
      <h1 className="collection-title">My Stone Collection</h1>
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