import React from 'react';

const Line = ({ whiteLine, blackLine }) => {
  const lineStyle = {
    border: 'none',
    borderTop: whiteLine ? '0.2vh dotted white' : '0.1vh solid black',
    height: '0',
    marginTop: '3vh',
    width: whiteLine ? '100vw' : '40vw',
  };

  return (
    <div>
      <hr className='Line' style={lineStyle} />
    </div>
  );
};

export default Line;
