import React from 'react';

const PhotosCollection = (props) => {
  return (
    <>
      <div
        onClick={props.openViewer}
        className='w-32 h-32 md:w-48 flex flex-col md:h-48'
      >
        <div className='w-full h-full overflow-hidden  rounded-lg'>
          <img
            src={props.image[0]}
            alt='menu'
            className='w-full h-full transform transition duration-400 rounded-lg hover:scale-110'
          />
        </div>
        <div>
          <strong>{props.menuTitle}</strong>
          <p>{props.pages} Pages</p>
        </div>
      </div>
    </>
  );
};

export default PhotosCollection;
