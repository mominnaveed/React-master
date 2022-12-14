import React, { useState, useEffect } from 'react';

const ShowHide = () => {
  const [show, setShow] = useState(false);

  return <>
    <button className='btn' onClick={() => setShow(!show)}>
      Hide/Show
    </button>
    {show && <Item />}
  </>
};
const Item = () => {
  const [size, setSize] = useState(window.innerWidth)
  const checkSize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener('resize', checkSize)
    return () => {
      window.removeEventListener('resezie', checkSize)
    }
  }, []);
  return (
    <div style={{ marginTop: '2rem' }}>
      <h1>Window</h1>
      <h2>size : {size} Px</h2>
    </div>
  );
};

export default ShowHide;
