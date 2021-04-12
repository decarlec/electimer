import React, { useState, useEffect, setInterval, clearInterval, } from "react";
import './styles.css';
import Moment from 'react-moment';
import moment from 'moment';
import { evaluate } from 'mathjs';

const initialState = { 
    running: false,
    start: new Date(),
    end: new Date(),
    remainingTime: 0,
    soundPlaying: false
}

const Timer = ({ duration }) => {
    const [timerState, setTimerState] = useState(initialState)

    const audio = new Audio('bensound-creativeminds.mp3')

    const startTimer = () => {
        var start = new Date();
        setTimerState({
            running: true,
            start: start,
            end: moment(start).add(evaluate(duration), 's').toDate()
        })
    }

    const stopTimer = () => {
        setTimerState({ running: false})
    }

    useEffect(() => {
        const interval = setInterval(() => {
          setTimerState(...timerState, remainingTime });
        }, 1000);
        return () => clearInterval(interval);
      }, []);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         var now = moment(new Date())
    //         setTimerState({
    //             remainingTime: moment(timerState.end).diff(now)
    //         })
            
    //         if (timerState.running && timerState.remainingTime <= 0) {
    //             stopTimer();
    //             window.confirm("Timer is finished", audio.play());
    //         }

    //         return () => clearInterval(interval)
    //     }, 100)
    // })



    const pauseAudio = () => {
        this.audio.pause();
    }

    const toPositiveFilter = (d) => {
        return d.replace("-", "")
    }

    return (
        <div>
            <button onClick={startTimer} className="button" >Start</button> <button onClick={stopTimer} className="button">Stop</button>
            <p>{timerState.running ? <Moment durationFromNow filter={toPositiveFilter}>{timerState.end}</Moment> : null}</p>
        </div>
    )
}

export default Timer