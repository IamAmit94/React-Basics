import React, { useState, useEffect } from 'react';
// UseEffect will be called everytime when the page renders

const UseEffectDemo = () => {
  const [seconds, setSeconds] = useState(0);
// 
  // Effect to start the timer
  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    // Cleanup function to stop the timer when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, []); // Empty dependency array to run the effect only once

  return (
    <div>
      Timer: {seconds} seconds
    </div>
  );
};

export default UseEffectDemo;
