import React from "react"

function StopwatchBtn(props) {
  return (
    <div className="stopwatch_btns">
      {(props.status === 0) ? 
        <button className="stopwatch_btn" onClick={props.start}>Start</button> 
        : ""
      }
      
      {(props.status === 1) ?
        <div>
          <button className="stopwatch_btn" onClick={props.stop}>Stop</button>
        </div>
        : ""
      }

      {/*{(props.status === 2) ?
        <div>
          <button className="stopwatch_btn" onClick={props.resume}>Resume</button>
          <button className="stopwatch_btn" onClick={props.reset}>Reset</button>
        </div>
        : ""
      }*/}
      <button className="stopwatch_btn" onClick={props.reset}>Reset</button>
    </div>
  )
}

export default StopwatchBtn