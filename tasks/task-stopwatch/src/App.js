import React, {useState} from "react"
import StopwatchView from './Components/StopwatchView'
import StopwatchBtn from './Components/StopwatchBtn'
import './App.css'

function Stopwatch() {
  const [time, setTime] = useState({ms:0, s:0, m:0, h:0})
  const [interv, setInterv] = useState()
  const [status, setStatus] = useState(0)
  //not start = 0
  //start = 1
  //pause = 2

  const start = () => {
    tick()
    setStatus(1)
    setInterv(setInterval(tick, 10))
  }

  var updateMs = time.ms
  var updateS = time.s
  var updateM = time.m
  var updateH = time.h

  const tick = () => {
    if(updateM === 60) {
      updateH++
      updateM = 0
    }

    if(updateS === 60) {
      updateM++
      updateS = 0
    }

    if(updateMs === 100) {
      updateS++
      updateMs = 0
    }

    updateMs++
    return setTime({ms:updateMs, s:updateS, m:updateM, h:updateH})
  };

  const stop = () => {
    clearInterval(interv)
    setStatus(0)
  }

  const reset = () => {
    clearInterval(interv)
    setStatus(0)
    setTime({ms:0, s:0, m:0, h:0})
  }

  // const resume = () => start()

  return (
    <div className="stopwatch">
      <StopwatchView time={time} />
      <StopwatchBtn status={status} reset={reset} /*resume={resume}*/ stop={stop} start={start} />
    </div>
  )
}

export default Stopwatch