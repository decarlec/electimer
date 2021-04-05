import React from "react";
import './styles.css';
import Moment from 'react-moment';
import moment from 'moment';
import { evaluate } from 'mathjs';

export default class Timer extends React.Component {
    state = {
        running: false,
        start: new Date(),
        end: new Date(),
        remainingTime: 0,
        soundPlaying: false
    }

    audio = new Audio('bensound-creativeminds.mp3')

    startTimer = () => {
        this.audio.pause();
        var start = new Date();
        this.setState({
            running: true,
            start: start,
            end: moment(start).add(evaluate(this.props.duration), 's').toDate()
        })
    }

    stopTimer = () => {
        //this.audio.play();
        this.setState({
            running: false,
        })
    }

    tick = () => {
        var now = moment(new Date())
        this.setState({ 
            remainingTime: moment(this.state.end).diff(now)
        })
        if (this.state.running && this.state.remainingTime <= 0) {
            this.stopTimer();
            window.confirm("Timer is finished", this.audio.play());
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
                <p>{this.state.running ? <Moment durationFromNow filter={toPositiveFilter}>{this.state.end}</Moment> : null}</p>
            </div>
        )
    }
}