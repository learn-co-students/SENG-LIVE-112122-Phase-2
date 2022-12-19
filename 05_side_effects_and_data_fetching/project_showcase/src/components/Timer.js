// Deliverable 4: Demonstrate the unmounting and cleanup 
// phase of a component through `useEffect`

    // Return a cleanup function inside the `useEffect` 
    // with a console.log()

    // Open up the devtools to observe when the cleanup 
    // will occur in the stages of a components lifecycles

import { useState, useEffect } from "react";

const Timer = () => {
    
    const [ timerCount, setTimerCount ] = useState(0);
    
    useEffect(() => {
        console.log("useEffect Fired Off!");
        
        setInterval(() => {
            console.log("Interval Fired!");
            
            // setTimerCount(timerCount + 1);

            setTimerCount(prevCount => prevCount + 1);
        }, 1000);
    }, []);

    return (
        <h1>Timer Count: {timerCount}</h1>
    );
}

// function Timer() {
//     return (
//         <h1>Timer Component</h1>
//     );
// };

export default Timer;