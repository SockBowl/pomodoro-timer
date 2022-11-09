import React, { useState, useEffect } from 'react';
import useInterval from './hooks/useInterval';
import CustomizedHeading from './styled-components/CustomizedHeading';
import Slide from '@mui/material/Slide';

function Timer(props) {
  const { initialTime, isRunning, reset, slideIn, direction } = props;
  const [count, setCount] = useState();
  const [delay, setDelay] = useState(null);

  //Change time when new timing prop passed
  useEffect(() => {
    setCount(initialTime);
  }, [reset, initialTime]);

  //Start/stop the timer when isRunning prop is passed
  useEffect(() => {
    if (isRunning) setDelay(1000);
    else setDelay(null);
  }, [isRunning]);

  useInterval(() => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      setDelay(null);
    }
  }, delay);

  const padZero = (number) => {
    if (number < 10) number = '0' + number.toString();
    return number;
  };

  return (
    <Slide
      direction={direction}
      in={slideIn}
      timeout={250}
      mountOnEnter
      unmountOnExit
    >
      <CustomizedHeading variant='h1' component='div'>
        {Math.floor(count / 60)}:{padZero(count % 60)}
      </CustomizedHeading>
    </Slide>
  );
}

export default Timer;
