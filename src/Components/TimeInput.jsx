import React from "react";
import Timer from "./Timer";

const defaultTimerDuration = "15";

export default class TimeInput extends React.Component{

    constructor(props){
        super(props);
        this.state = { value: defaultTimerDuration }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(e){
     this.setState({ value: e.target.value })
    }

    handleClick(e){ 
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
                <Timer duration={this.state.value} /*clickHandler={this.handleBtnClick}*/ ></Timer>
            </div>
        )
    }
}