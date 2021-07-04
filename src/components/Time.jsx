import { useState } from 'react';

const Time = () => {
  // time state
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  //
  const updateTime = () => {
    setTime(new Date().toLocaleTimeString());
  };
  setTimeout(updateTime, 1000);
  return <h1>{time}</h1>;
};

export default Time;
