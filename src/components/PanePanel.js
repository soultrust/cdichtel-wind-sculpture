import { useState } from 'react';

const PanePanel = ({ side, img }) => {
  const [rotationVal, setRotationVal] = useState(0);

  const handleClick = (evt) => {
    if (evt.currentTarget.classList.contains('pane-panel')) {
      const bgHolder = evt.currentTarget.querySelector('.bg-holder');
      setRotationVal(rotationVal + 90);
    }
  }

  return (
    <div className={`pane-panel pane-${side}`} onClick={handleClick}>
      <div 
        className="bg-holder" 
        style={{ 
          backgroundImage: `url(${img})`, 
          transform: `rotateZ(${rotationVal}deg)`
        }}></div>
    </div>
  );
};

export default PanePanel;
  