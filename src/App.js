import { useEffect } from 'react';
import './App.css';
import PanesContainer from './PanesContainer';

function calculatePaneSize() {
  const bodyStyles = document.body.style;
  const colWidth = document.querySelector('.col').offsetWidth;
  bodyStyles.setProperty('--pane-width', `${colWidth * .68}px`);
}

function App() {
  useEffect(() => {
    calculatePaneSize();
    window.addEventListener('resize', calculatePaneSize);
    return () => {
      window.removeEventListener('resize', calculatePaneSize)
    }
  }, []);

  return (
    <div className="app">
      <PanesContainer />
    </div>
  );
}

export default App;
