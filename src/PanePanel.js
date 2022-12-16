import { useState } from 'react';

const PanePanel = (props) => {
  const side = props.side;
  const [rotationVal, setRotationVal] = useState(0);

  const handleClick = (evt) => {
    if (evt.target.classList.contains('bg-holder')) {
      var st = window.getComputedStyle(evt.target, null);
      var tr = st.getPropertyValue("-webkit-transform") ||
        st.getPropertyValue("-moz-transform") ||
        st.getPropertyValue("-ms-transform") ||
        st.getPropertyValue("-o-transform") ||
        st.getPropertyValue("transform") ||
        "fail...";

        // With rotate(30deg)...
        // matrix(0.866025, 0.5, -0.5, 0.866025, 0px, 0px)
        console.log('Matrix: ' + tr);

        // rotation matrix - http://en.wikipedia.org/wiki/Rotation_matrix

    

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
      console.log(newRotation);
      evt.target.style.transform = `rotate(${newRotation}deg)`;
    }
  }

  return (
    <div className={`pane-panel pane-${props.side}`} onClick={handleClick}>
      <div className="bg-holder"></div>
    </div>
  );
};

export default PanePanel;
  