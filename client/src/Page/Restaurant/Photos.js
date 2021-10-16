import React, { useState } from 'react';
import PhotosCollection from '../../Components/restaurant/PhotosCollection';
import ImageViewer from 'react-simple-image-viewer';

const Photos = () => {
  const [photos, setPhotos] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const closeViewer = () => setIsMenuOpen(false);
  const openViewer = () => setIsMenuOpen(true);
  return (
    <>
      {isMenuOpen && (
        <ImageViewer
          src={photos}
          currentIndex={currentImage}
          disableScroll={false}
          closeOnClickOutside={true}
          onClose={closeViewer}
        />
      )}
      <div className='flex flex-wrap gap-2'>
        {photos.map((photo) => (
          <PhotosCollection image={photo} openViewer={openViewer} />
        ))}
      </div>
    </>
  );
};

export default Photos;
