import React from 'react';
import Moment from 'react-moment';
import TimeInput from './TimeInput';
import Timer from './Timer';

type MainFormState = {
    durationInput: string, 
    count: number,
    currentDateTime: Date
}

export class MainForm extends React.Component<{ message: string}, MainFormState>{
    state: MainFormState = {
        durationInput:"",
        count: 0,
        currentDateTime: new Date()
    }
    intervalId : any;

    render(){
        return(
            <div>
                <div onClick={() => this.increment(1)}>
                    {this.state.count}
                </div>
                <TimeInput ></TimeInput>
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