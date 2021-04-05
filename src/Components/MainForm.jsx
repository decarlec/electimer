import React from 'react';
import TimeInput from './TimeInput';

export class MainForm extends React.Component{
    
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