import React from 'react'

const Revision = () => {
  const [timer, setTimer] = React.useState(300)
  const [intervalID, setIntervalID] = React.useState<NodeJS.Timeout | null>(null)
  React.useEffect(()=>{
    if (timer <=0 && intervalID){
      clearInterval(intervalID)
    }
  }, [timer])
  console.log('outside'+timer)
  const handleStart = () => {
        const interval = setInterval(()=>{
          console.log('inside'+timer)
          console.log(typeof(timer))
          setTimer(prev=>prev-60)
        }, 1000)
        setIntervalID(interval)
  }
  const handleStop = () => {
    if (intervalID) {
      clearInterval(intervalID)
    }
  }
  const handleReset = () => {
    if (intervalID) {
      handleStop()
      setIntervalID(null)
      setTimer(300)
    }
  }
  return (
    <div>
      {Math.floor(timer/60)}:{timer%60 > 9 ? timer%60 : '0'+ timer%60}
    <button onClick={()=>handleStart()}>Start</button>
    <button onClick={()=>handleStop()}>Stop</button>
    <button onClick={()=>handleReset()}>Reset</button>
    </div>
  )
}

export default Revision