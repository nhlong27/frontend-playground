import React from 'react';

function formatSecondsToTime(seconds: number) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  const formattedTime = `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  return formattedTime;
}

const Timer = () => {
  const [time, setTime] = React.useState(300);
  const [intervalID, setIntervalID] = React.useState<number | null>(null);

  const handleStart = () => {
    const interval = window.setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);
    setIntervalID(interval);
  };
  const handleStop = () => {
    if (intervalID) {
      clearInterval(intervalID);
    }
  };
  const handleReset = () => {
    if (intervalID) {
      window.clearInterval(intervalID);
      setTime(300);
      setIntervalID(null);
    }
  };
  return (
    <div className='flex flex-col'>
      Timer: {formatSecondsToTime(time)}
      <button onClick={() => handleStart()}>Start</button>
      <button disabled={!intervalID} onClick={() => handleStop()}>
        Stop
      </button>
      <button disabled={!intervalID} onClick={() => handleReset()}>
        Reset
      </button>
    </div>
  );
};

export default Timer;
