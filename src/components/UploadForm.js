import React, { useState } from 'react';
import { projectStorage, projectFirestore } from '../firebase/config';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { collection, addDoc } from 'firebase/firestore';

const UploadForm = ({ loadDocs }) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [file, setFile] = useState(null);

  const types = ['image/png', 'image/jpeg', 'image/gif', 'image/svg+xml'];

  const uploadImage = (file) => {
    const storageRef = ref(projectStorage, file.name);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on('state_changed', (snapshot) => {
      let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      setProgress(percentage);
    }, (err) => {
      setError(err);
    }, () => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        addDoc(collection(projectFirestore, 'images'), { url: downloadURL });
        loadDocs();
        setFile(null);
      });
    })
  };

  const changeHandler = (e) => {
    let selected = e.target.files[0];
    
    if (selected && types.includes(selected.type)) {
      console.log('selected set file');
      setFile(selected);
      uploadImage(selected);
      setError('');
    } else {
      setFile(null);
      setError('Please select an image file (png, jpg, gif, svg)');
    }
  };

  return (
    <>
      <label htmlFor="file-upload" className="file-upload">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
        </svg>
        <input type="file" onChange={changeHandler} id="file-upload" />
      </label>
      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div>{file.name}</div>}
        {file && <div className="progress-bar" style={{ width: progress + '%' }}></div>}
      </div>
    </>
  );
};

export default React.memo(UploadForm);