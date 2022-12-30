import React from 'react';

const AnimationControls = ({ animating, setAnimating }) => {
  const handleToggle = () => {
    setAnimating(!animating);
  };

  return (
    <div className="anim-controls">
      <button onClick={handleToggle}>
        {animating ? 'PAUSE' : 'PLAY'}
      </button>
    </div>
  );
};

export default AnimationControls;