import React, { useState } from 'react';

const Calificaciones= ({ totalStars = 5, onRate }) => {
  const [rating, setRating] = useState(0);

  const handleClick = (index) => {
    setRating(index);
    onRate(index);
  };

  return (
    <div style={{ display: 'block', cursor: 'pointer' }}>
      {[...Array(totalStars)].map((_, index) => (
        <span
          key={index}
          onClick={() => handleClick(index + 1)}
          style={{ fontSize: '100px', color: index < rating ? '#FF0000FF' : '#ccc' }}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default Calificaciones;
