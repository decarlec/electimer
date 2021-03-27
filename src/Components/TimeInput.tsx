import React, { createRef } from "react";

type TimeInputProps = {
    defaultTimerDuration: string
}

type TimeInputState = {
    value: string,
}

export default class TimeInput extends React.Component<TimeInputProps, TimeInputState>{
    private instanceRef = createRef<HTMLInputElement>();

    constructor(props: TimeInputProps){
        super(props);
        this.state = { value: props.defaultTimerDuration }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    state: TimeInputState = {
        value: "time..."
    }

    handleChange(e: React.ChangeEvent<HTMLInputElement>){
        this.setState({ value: e.target.value })
    }

    handleClick(e: React.MouseEvent<HTMLInputElement>){
        this.setState({ value: ""})
    }

    render(){
        return(
            <div>         
                <form>
                    <input type="text" value={this.state.value} 
                    onChange={this.handleChange}
                    onClick={this.handleClick}
                    ref={this.instanceRef} />
                </form>
            </div>
        )
    }
}