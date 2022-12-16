import { useState } from 'react';

const PanePanel = (props) => {
  const side = props.side;
  const [rotationVal, setRotationVal] = useState(0);

  const handleClick = (evt) => {
    if (evt.currentTarget.classList.contains('pane-panel')) {
      
      const bgHolder = evt.currentTarget.querySelector('.bg-holder');
      var st = window.getComputedStyle(bgHolder, null);
      var tr = st.getPropertyValue("-webkit-transform") ||
        st.getPropertyValue("-moz-transform") ||
        st.getPropertyValue("-ms-transform") ||
        st.getPropertyValue("-o-transform") ||
        st.getPropertyValue("transform") ||
        "fail...";

      console.log('Matrix: ' + tr);

      var values = tr.split('(')[1];
      values = values.split(')')[0];
      values = values.split(',');
      var a = values[0];
      var b = values[1];
      var c = values[2];
      var d = values[3];

      var scale = Math.sqrt(a*a + b*b);

      // arc sin, convert from radians to degrees, round
      // DO NOT USE: see update below
      var sin = b/scale;
      var angle = Math.round(Math.asin(sin) * (180/Math.PI));

      // works!
      console.log('Rotate: ' + angle + 'deg');

      const newRotation = angle + 90;
      bgHolder.style.transform = `rotateZ(${newRotation}deg)`;
    }
  }

  return (
    <div className={`pane-panel pane-${props.side}`} onClick={handleClick}>
      <div className="bg-holder"></div>
    </div>
  );
};

export default PanePanel;
  