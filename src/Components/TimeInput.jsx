import React, { useState } from "react";
import Timer from "./Timer";

const defaultTimerDuration = "15";

const TimeInput = () => {
    const [value, setValue] = useState(defaultTimerDuration)
    
    const handleChange = (e) => {
     setValue(e.target.value)
    }

    const handleClick = (e) => { 
        this.setState({ value: ""})
    }
    return (
        <div>         
            <form>
                <input type="text" value={value} 
                onChange={(e) => { setValue(e.target.value) }}
                onClick={(e) => { setValue(e.target.value) }}/>
            </form>
            <Timer duration={value}></Timer>
        </div>
    )


}

export default TimeInput