import React from "react";
import './styles.css';
import Moment from 'react-moment';
import moment from 'moment';
import useSound from 'use-sound';

type TimerProps = {
    duration: number
   }

type TimerState = {
    running: boolean
    start: Date 
    end: Date 
    remainingTime: number
}

export default class Timer extends React.Component<TimerProps, TimerState>{
    intervalId : any;
    
    constructor(props: TimerProps){
        super(props);       
        this.state = {
            running: false,
            start: new Date(),
            end: new Date(),
            remainingTime: 0
        }
    }
    

    startTimer = () => {
        var start = new Date();
        this.setState({
            running: true,
            start: start, 
            end: moment(start).add(this.props.duration, 's').toDate()
        })
    }

    stopTimer = () => {
       this.setState({
           running: false,
       }) 
    }

    tick = () => {
        var now = moment(new Date())
        this.setState({
            remainingTime: moment(this.state.end).diff(now)
        })
        if(this.state.running && this.state.remainingTime <= 0)        
        {
            this.stopTimer();
            window.alert("Timer is finished");
        }
    }

    componentWillMount = () =>
    {
        this.tick();
    }
    
    componentDidMount = () => {
        this.intervalId =  setInterval(() => this.tick(), 100);
    }

    componentWillUnmount = () => {
        this.intervalId = null;
    }
    render(){ 
        const toPositiveFilter = (d: string) => {
            return d.replace("-", "")
        }
        return(
            <div>
                <button onClick={this.startTimer} className="button" >Start</button> <button onClick={this.stopTimer} className="button">Stop</button> 
                <p>{ this.state.running ? <Moment durationFromNow filter={toPositiveFilter}>{this.state.end}</Moment> : null }</p>
            </div>
        ) 
    }
}