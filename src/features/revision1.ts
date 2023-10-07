
(()=>{
  let timerComp = document.getElementById('timer')
  let display = document.createElement('p')
  let startBtn = document.createElement('button')
  startBtn.textContent = 'Start'
  startBtn.addEventListener('click', handleStart)
  let stopBtn = document.createElement('button')
  stopBtn.textContent = 'Stop'
  stopBtn.addEventListener('click', handleStop)
  let resetBtn = document.createElement('button')
  resetBtn.textContent = 'Reset'
  resetBtn.addEventListener('click', handleReset)

  let timer = 300
  let interval: null | NodeJS.Timeout = null
  if (timerComp){
    timerComp.appendChild(display).textContent='5:00'
    timerComp.appendChild(startBtn)
    timerComp.appendChild(stopBtn)
    timerComp.appendChild(resetBtn)
  }
  
  function handleStart () {
    interval = setInterval(()=>{
      // if (timer <=0 && interval) clearInterval(interval)
      console.log('inside'+timer)
      timer -= 60;
      display.textContent = `${Math.floor(timer/60)}:${timer%60 > 9 ? timer%60 : '0'+ timer%60}`
    }, 1000)
  }
  function handleStop () {
    if (interval){
      clearInterval(interval)
    }
  }
  function handleReset () {
    if (interval) {
      handleStop()
      interval = null
      timer = 300
      display.textContent = `${Math.floor(timer/60)}:${timer%60 > 9 ? timer%60 : '0'+ timer%60}`
    }
  }
})()