import UploadForm from './UploadForm';

const ImageMenu = ({ setPaneImg, loadDocs, docs }) => {
  return (
    <div className="img-menu">
      {docs && docs.map(doc => (
        <div 
          className="img-wrap" 
          key={doc.id} 
          style={{backgroundImage: `url(${doc.url})`}}
          onClick={() => { setPaneImg(doc.url); }}>
        </div>
      ))}
      <UploadForm loadDocs={loadDocs} />
    </div>
  );
};

export default ImageMenu;