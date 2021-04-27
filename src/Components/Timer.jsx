import React from "react";
import './styles.css';
import { msToTimeFormatted } from '../Helper';
import { evaluate } from 'mathjs';
import dayjs from 'dayjs';

export default class Timer extends React.Component {
    state = {
        running: false,
        start: new Date(),
        end: new Date(),
        remainingTime: 0,
        soundPlaying: false
    }

    tickRate = 100;
    audio = new Audio('bensound-creativeminds.mp3')

    startTimer = () => {
        this.audio.pause();
        this.setState({
            running: true,
            remainingTime: this.props.duration
        })
    }

    stopTimer = () => {
        this.setState({
            running: false,
            remainingTime: 0
        })
    }

    pauseTimer = () => {
        this.setState({
            running: false,
        })
    }

    tick = () => {
        if(this.state.running){
            this.setState({ 
                remainingTime: this.state.remainingTime - this.tickRate
            });
            if (this.state.remainingTime <= 0) {
                this.stopTimer();
                if(window.confirm("Timer is finished", this.audio.play()))
                {
                    this.audio.pause();
                }
            }
        } 
    }



    pauseAudio = () => {
        this.audio.pause();
    }

    componentWillMount = () => {
        this.tick();
    }

    componentDidMount = () => {
        this.intervalId = setInterval(() => this.tick(), 100);
    }

    componentWillUnmount = () => {
        this.intervalId = null;
    }

    render() {
        const toPositiveFilter = (d) => {
            return d.replace("-", "")
        }
        return (
            <div>
                <button onClick={this.startTimer} className="button" >Start</button> <button onClick={this.stopTimer} className="button">Stop</button>
                <p onClick={this.pauseTimer}>{ msToTimeFormatted(this.state.remainingTime) }</p>
            </div>
        )
    }   
}

