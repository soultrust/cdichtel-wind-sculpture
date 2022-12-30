import React from 'react';

const AnimationControls = ({ animating, setAnimating }) => {
  const handleToggle = () => {
    setAnimating(!animating);
  };

  return (
    <div>
      <button onClick={handleToggle}>
        toggle antimation
      </button>
    </div>
  );
};

export default AnimationControls;