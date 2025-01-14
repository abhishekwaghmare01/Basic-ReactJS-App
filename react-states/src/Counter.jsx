import { useState } from "react";

function randomNo(){
    console.log("randonNo was executed!");
    
    return Math.random();
}

export default function Counter(){
    let [count,setCount] = useState(randomNo);
    console.log("component was re-rendered")

    let incCount = () => {
        
        // count = count+1;
        setCount((currCount) => {
            return currCount + 1;
        });
        setCount((currCount) => {
            return currCount + 1;
        });
        
    }

    return(
        <div>
            <h3>Count = {count}</h3>
            <button onClick={incCount}>Increase</button>
        </div>
    )
}