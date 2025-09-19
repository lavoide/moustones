import React from 'react';
import type { Stone } from '../types/Stone.js';
import './StoneModal.css';

interface StoneModalProps {
  stone: Stone | null;
  isOpen: boolean;
  onClose: () => void;
}

const StoneModal: React.FC<StoneModalProps> = ({ stone, isOpen, onClose }) => {
  if (!isOpen || !stone) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          ×
        </button>
        <div className="modal-body">
          <div className="modal-image-container">
            <img
              src={stone.image}
              alt={stone.name}
              className="modal-image"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/img/placeholder-stone.jpg';
              }}
            />
          </div>
          <div className="modal-details">
            <h2 className="modal-title">{stone.name}</h2>
            <div className="stone-metadata">
              <div className="metadata-item">
                <span className="metadata-label">Origin:</span>
                <span className="metadata-value">{stone.origin}</span>
              </div>
              <div className="metadata-item">
                <span className="metadata-label">Category:</span>
                <span className="metadata-value">{stone.category}</span>
              </div>
              <div className="metadata-item">
                <span className="metadata-label">Date Acquired:</span>
                <span className="metadata-value">{new Date(stone.dateAcquired).toLocaleDateString()}</span>
              </div>
            </div>
            <div className="stone-description">
              <p>{stone.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoneModal;