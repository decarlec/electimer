import React from 'react';
import Moment from 'react-moment';
import TimeInput from './TimeInput';
import Timer from './Timer';

type MainFormState = {
    durationInput: string, 
    currentDateTime: Date
}

export class MainForm extends React.Component<{ message: string}, MainFormState>{
    state: MainFormState = {
        durationInput:"",
        
        currentDateTime: new Date()
    }
    intervalId : any;
    
    render(){
        return(
            <div>
                <TimeInput ></TimeInput>
            </div>
        )
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