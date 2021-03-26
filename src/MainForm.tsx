import React, { createRef } from 'react';
import Moment from 'react-moment';
import './App.css';

type MainFormState = {
    count: number,
    currentDateTime: Date
}

type TimeInputProps = {
    defaultTimerDuration: string
}

type TimeInputState = {
    value: string,
}


export class TimeInput extends React.Component<TimeInputProps, TimeInputState>{
    private instanceRef = createRef<HTMLInputElement>();

    constructor(props: TimeInputProps){
        super(props);
        this.state = { value: props.defaultTimerDuration }
        this.handleChange = this.handleChange.bind(this);
    }
    state: TimeInputState = {
        value: "time..."
    }

    handleChange(e: React.ChangeEvent<HTMLInputElement>){
        this.setState({ value: e.target.value })
    }

    handleClick(e: MouseEvent){
        this.setState({ value:""});
    }

    render(){
        return(
            <div>         
                <form>
                    <input type="text" value={this.state.value} onChange={this.handleChange} ref={this.instanceRef} />
                </form>
            </div>
        )
    }
}

export class Timer extends React.Component<{}, {}>{

}

export class MainForm extends React.Component<{ message: string}, MainFormState>{
    state: MainFormState = {
        count: 0,
        currentDateTime: new Date()
    }
    intervalId : any;

    render(){
        return(
            <div>
                <div onClick={() => this.increment(1)}>
                    {this.props.message} {this.state.count}
                </div>
                <TimeInput defaultTimerDuration="15" ></TimeInput>
                <Moment format="YYYY/MM/DD hh:mm:ss"></Moment>
            </div>

        )

    }
    increment = (amt: number) => {
        this.setState((state) => ({
            count: state.count + amt
        }));
    }

    tick(){
        this.setState(
            {
                currentDateTime: new Date()
            }
        )
    }

    componentWillMount = () =>
    {
        this.tick();
    }
    
    componentDidMount = () => {
        this.intervalId =  setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount = () => {
        this.intervalId = null;
    }

}