import React, { useState } from "react";
import Timer from "./Timer";

const defaultTimerDuration = "15";

const TimeInput = () => {
    const [value, setValue] = useState(defaultTimerDuration)
    
    return (
        <div>         
            <form>
                <input type="text" value={value} 
                onChange={(e) => { setValue(e.target.value) }}
                onClick={(e) => { setValue("") }}/>
            </form>
            <Timer duration={value}></Timer>
        </div>
    )


}

export default TimeInput