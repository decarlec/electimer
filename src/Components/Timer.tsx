import React from "react";

type TimerProps = {
    buttonText: string
}

type TimerState = {
    value: string,
}

export default class Timer extends React.Component<TimerProps, TimerState>{
    constructor(props: TimerProps){
        super(props);
        this.state = {
            value:props.buttonText
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event: React.MouseEvent){
        this.setState({ value:"Clicked"})
    }

    render(){
        return(
            <div>
                <button onClick={this.handleClick}>{ this.state.value }</button>
            </div>
        )
    }
}