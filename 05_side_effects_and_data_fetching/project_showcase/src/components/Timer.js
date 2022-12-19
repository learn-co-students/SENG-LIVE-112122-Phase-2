// Deliverable 4: Demonstrate the unmounting and cleanup 
// phase of a component through `useEffect`

    // Return a cleanup function inside the `useEffect` 
    // with a console.log()

    // Open up the devtools to observe when the cleanup 
    // will occur in the stages of a components lifecycles

import { useState, useEffect } from "react";

const Timer = () => {
    
    console.log("Component Rendered!");

    const [ timerCount, setTimerCount ] = useState(0);

    const handleClick = () => console.log("Page Clicked!");

    useEffect(() => {
        console.log("useEffect Fired Off!");

        document.addEventListener("click", handleClick);
        
        let intervalId = setInterval(() => {
            console.log("Interval Fired!");
            
            

            // console.log(intervalId);

            // setTimerCount(timerCount + 1);

            setTimerCount(prevCount => prevCount + 1);
        }, 1000);

        const clearEverything = () => {
            
            // Clear Out of Our setInterval
            clearInterval(intervalId);

            // Remove Event Listener
            document.removeEventListener("click", handleClick);
        }

        // Clean Up Function
        return () => { 
            
            console.log("Clean Up Fired!");

            clearEverything();
        };
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