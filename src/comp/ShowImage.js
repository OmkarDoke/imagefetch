import React from 'react';

const ShowImage = ({ source, toggle, onClose }) => {
  const modalStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    display: toggle ? 'block' : 'none',
  };

  const imageStyles = {
    display: {toggle},
    margin: '0 auto',
    maxHeight: '80%',
    maxWidth: '80%',
  };

  return (
    <div style={modalStyles} onClick={onClose}>
      <div>
        <img src={source} alt="Full Screen" style={imageStyles} onClick={onClose}/>
      </div>
    </div>
  );
};

export default ShowImage;
