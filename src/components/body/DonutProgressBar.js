import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'; // Import default styles

const DonutProgressBar = ({ progress }) => {
  const renderText = (value) => (
    <>
      <span>{`${value}%`}</span>
      <br />
      <span className='font-size-smaller'>goal completed</span>
    </>
  );
    return (
  <div style={{ width: 100, height: 100 }}>
    <CircularProgressbar
      value={progress}
      text={renderText(progress)}
      styles={buildStyles({
        pathColor: '#3b5998',
        textColor: '#333',
        trailColor: '#e0e0e0',
        strokeLinecap: 'round',
      })}
    />
  </div>
)};

export default DonutProgressBar;
