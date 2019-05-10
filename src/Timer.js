import React, { Component } from 'react';
import './Timer.css';


    const    inputedTime = 1800000,
            second=Math.floor((inputedTime/1000)%60),
            minute=Math.floor((inputedTime/1000/60)%60),
            hour=Math.floor(inputedTime/(1000*60*60)%24)
            
class Timer extends Component {
    constructor() {
        super(); 
      
      };

  render() { 
      return ( 
        <div >
            <div className="time">
                 <span className="hour">
                          {hour<10 ? '0'+hour : hour}
                 </span>
                :<span className="minutes">
                         {minute<10 ? '0'+minute : minute}
                </span>
                :<span className="seconds">
                          {second<10 ? '0'+ second : second}
                </span>
            </div>

            <div className="indicators">
                <span className="indicat">Hour</span>
                <span className="indicat minute">Minute</span>
                <span className="indicat">Second</span>
            </div>

        </div>
       );
  }
}
export default Timer;
