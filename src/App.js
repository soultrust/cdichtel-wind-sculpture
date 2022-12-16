import { useEffect } from 'react';
import PanesContainer from './PanesContainer';

function calculatePaneSize() {
  const bodyStyles = document.body.style;
  const panesContainerWidth = document.querySelector('.panes-container').offsetWidth;
  bodyStyles.setProperty('--pane-width', `${panesContainerWidth/13 * 1.28}px`);
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
