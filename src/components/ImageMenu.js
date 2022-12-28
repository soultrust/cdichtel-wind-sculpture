import { useState } from 'react';
import UploadForm from './UploadForm';
import { projectStorage, projectFirestore } from '../firebase/config';
import { doc, deleteDoc } from "firebase/firestore";
import { ref, deleteObject } from "firebase/storage";

const ImageMenu = ({ setPaneImg, loadDocs, docs }) => {
  const [deleteMode, setDeleteMode] = useState(false);

  const handleDelete = (id, url) => {
    if (!window.confirm("Are you sure you want to delete this image?")) {
      return false;
    }
    deleteDoc(doc(projectFirestore, 'images', id));
    const deleteRef = ref(projectStorage, url);

    deleteObject(deleteRef).then(() => {
      loadDocs();
    });
  };

  return (
    <div className="img-menu">
      {docs && docs.map(doc => (
        <div 
          className="img-wrap" 
          key={doc.id} 
          style={{backgroundImage: `url(${doc.url})`}}>
          <div 
            className="delete" 
            onClick={() => handleDelete(doc.id, doc.url)}
            style={{ display: deleteMode ? 'flex' : 'none'}}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
            </svg>
          </div>
          <div 
            className="swap" 
            onClick={() => setPaneImg(doc.url)}
            style={{ display: deleteMode ? 'none' : 'block'}}></div>
        </div>
      ))}
      <UploadForm loadDocs={loadDocs} />
      <div className="delete-mode-btn" onClick={() => setDeleteMode(!deleteMode)}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-dash-lg" viewBox="0 0 16 16">
          <path d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
        </svg>
      </div>
    </div>
  );
};

export default ImageMenu;