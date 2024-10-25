import React, { useState } from 'react';
import { Dropzone } from 'react-dropzone';
import { Crop } from 'react-image-crop';

const ImageBackgroundChanger = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });

  const handleDrop = (acceptedFiles) => {
    setSelectedImage(acceptedFiles[0]);
  };

  const handleCrop = (crop) => {
    setCrop(crop);
  };

  const handleResize = () => {
    // Implement image resizing logic here
  };

  return (
    <div>
      <Dropzone onDrop={handleDrop}>
        {({ getRootProps, getInputProps, isDragActive }) => (
          <div {...getRootProps()} className="dropzone">
            <input {...getInputProps()} />
            {
              isDragActive ? <p>Drop the image here ...</p> : <p>Drag 'n' drop or click to select an image</p>
            }
          </div>
        )}
      </Dropzone>
      {selectedImage && (
        <Crop src={selectedImage} crop={crop} onChange={handleCrop} />
      )}
      <button onClick={handleResize}>Resize Image</button>
    </div>
  );
};

export default ImageBackgroundChanger;