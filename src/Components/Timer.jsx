import React, { useState, useEffect } from "react";
import './styles.css';
import { evaluate } from 'mathjs';
import dayjs from 'dayjs';

const tickRate = 100;
const audio = new Audio('bensound-creativeminds.mp3');

const Timer = ({ duration }) => {
    const [running, setRunning] = useState(false);
    const [end, setEnd] = useState(dayjs().add(duration, 's'));
    const [remaining, setRemaining] = useState(end.diff(dayjs()));
    

    useEffect(() => {
        const timer = running && setInterval(() => 
        {            
            setRemaining(end.subtract(dayjs()));
            if (remaining <= 0) {
                stopTimer();
                displayTimerPopup();
            }
        }, 100);
        return () => clearInterval(timer);
    }, [remaining, running]);
    
    const startTimer = () => {              
        setEnd(dayjs().add(evaluate(duration), 's'));
        setRunning(true); 
    }

    const stopTimer = () => {
        setRunning(false);
        audio.pause();
    }

    const displayTimerPopup = () => {
        if(window.confirm("Timer is finished", audio.play())){
            audio.pause();
        }
    }

    return (
        <div>
            <button onClick={startTimer} className="button" >Start</button> <button onClick={stopTimer} className="button">Stop</button>
            { running ? <p>{ remaining.toLocaleString() }</p> : null }
        </div>
    );
}

export default Timer