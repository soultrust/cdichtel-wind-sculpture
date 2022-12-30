import React from 'react';

const AnimationControls = ({ animating, setAnimating, side, setSide }) => {
  const handleToggle = () => {
    setAnimating(!animating);
  };

  const handleFlip = () => {
    setSide(!side);
  };

  return (
    <div className="anim-controls">
      <button onClick={handleToggle}>
        {animating ? 'PAUSE' : 'PLAY'}
      </button>
      <button onClick={handleFlip}>
        FLIP
      </button>
    </div>
  );
};

export default AnimationControls;