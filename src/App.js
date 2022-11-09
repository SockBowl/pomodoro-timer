import React, { useState } from 'react';
import Tab from '@mui/material/Tab';
import Timer from './Timer';
import CustomizedRowContainer from './styled-components/CustomizedRowContainer';
import CustomizedButton from './styled-components/CustomizedButton';
import CustomizedTabs from './styled-components/CustomizedTabs';
import './App.css';

function App() {
  const [time, setTime] = useState(1500);
  const [reset, setReset] = useState(false);
  const [isRunning, setIsRunning] = useState(false);

  const handleChange = (event, newTime) => {
    setTime(newTime);
    setIsRunning(false);
  };

  const handlePause = () => {
    setIsRunning((prev) => !prev);
    setReset(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setReset(true);
  };

  return (
    <div className='App'>
      <CustomizedTabs
        value={time}
        onChange={handleChange}
        aria-label='timer options tabs'
      >
        <Tab label='Study' value={1500} />
        <Tab label='Break' value={300} />
      </CustomizedTabs>
      <CustomizedRowContainer>
        <Timer
          initialTime={1500}
          isRunning={time === 1500 ? isRunning : false}
          reset={reset}
          slideIn={time === 1500 ? true : false}
          direction={'right'}
        />
        <Timer
          initialTime={300}
          isRunning={time === 300 ? isRunning : false}
          reset={reset}
          slideIn={time === 300 ? true : false}
          direction={'left'}
        />
      </CustomizedRowContainer>
      <CustomizedRowContainer>
        <CustomizedButton size='large' onClick={handlePause}>
          {isRunning ? 'Pause' : 'Start'}
        </CustomizedButton>
        <CustomizedButton size='large' onClick={handleReset}>
          Reset
        </CustomizedButton>
      </CustomizedRowContainer>
    </div>
  );
}

export default App;
