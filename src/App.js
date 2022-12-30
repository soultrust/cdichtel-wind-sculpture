import { useEffect, useState } from 'react';
import PanesContainer from './components/PanesContainer';
import ImageMenu from './components/ImageMenu';
import AnimationControls from './components/AnimationControls';
import { collection, getDocs } from 'firebase/firestore'; 
import { projectFirestore } from './firebase/config';

function calculatePaneSize() {
  const bodyStyles = document.body.style;
  const panesContainerWidth = document.querySelector('.panes-container').offsetWidth;
  bodyStyles.setProperty('--pane-width', `${panesContainerWidth/13 * 1.28}px`);
}

function App() {
  const [paneImg, setPaneImg] = useState(null);
  const [docs, setDocs] = useState([]);
  const [animating, setAnimating] = useState(true);
  const [side, setSide] = useState(true);

  useEffect(() => {
    calculatePaneSize();
    window.addEventListener('resize', calculatePaneSize);
    return () => {
      window.removeEventListener('resize', calculatePaneSize)
    }
  }, []);

  const loadDocs = () => {
    let documents = [];
    
    getDocs(collection(projectFirestore, 'images'))
      .then((snap) => {
        snap.forEach(doc => {
          documents.push({ ...doc.data(), id: doc.id })
        });
        setDocs(documents);
      });
  }

  useEffect(() => {
    loadDocs();
  }, []);

  return (
    <div className="app">
      <PanesContainer paneImg={paneImg} animating={animating} side={side} />
      <ImageMenu setPaneImg={setPaneImg} loadDocs={loadDocs} docs={docs} />
      <AnimationControls 
        animating={animating} 
        setAnimating={setAnimating} 
        side={side} 
        setSide={setSide} 
      />
    </div>
  );
}

export default App;
