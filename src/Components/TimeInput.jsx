import React, { useState } from "react";
import Timer from "./Timer";

const defaultTimerDuration = "15";

const TimeInput = () => {
    const [value, setValue] = useState(defaultTimerDuration)

    function getDurationInMs(){
        if(value.endsWith("m")){
            return value.replace("m", "") * 60000;
        }
        else{
            return value * 1000;
        }
    }
    
    return (
        <div>         
            <form>
                <input type="text" value={value} 
                onChange={(e) => { setValue(e.target.value) }}
                onClick={(e) => { setValue(e.target.value) }}/>
            </form>
            <Timer duration={getDurationInMs()}></Timer>
        </div>
    )


}

export default TimeInput