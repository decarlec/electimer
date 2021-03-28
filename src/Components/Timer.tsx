import React from "react";
import './styles.css';
import Moment from 'react-moment';
import moment from 'moment';

type TimerProps = {
    duration: number
   }

type TimerState = {
    running: boolean
    start: number 
    end: number 
    remainingTime: number
}

export default class Timer extends React.Component<TimerProps, TimerState>{
    intervalId : any;
    
    constructor(props: TimerProps){
        super(props);       
        this.state = {
            running: false,
            start: 0,
            end: 0,
            remainingTime: 0
        }
    }
    

    startTimer = () => {
        var start = new Date().getTime();
        this.setState({
            running: true,
            start: start, 
            end: start + this.props.duration * 1000 
        })
    }

    stopTimer = () => {
       this.setState({
           running: false,
           start: 0, 
           end: 0
       }) 
    }

    tick = () => {
        this.setState({
            remainingTime: this.state.end - new Date().getTime()
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
        return(
            <div>
                <button onClick={this.startTimer} className="button" >Start</button> <button onClick={this.stopTimer} className="button">Stop</button> 
                <p>{ this.state.running ? <Moment format="YYYY/mm/dd hh:mm:ss">{this.state.remainingTime}</Moment> : null }</p>
                <p>{ this.state.running ? this.state.remainingTime/1000 : null }</p>
            </div>
        ) 
    }
}