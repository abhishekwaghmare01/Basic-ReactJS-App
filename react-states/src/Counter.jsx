import { useState } from "react";
export default function Counter(){
    let [count,setCount] = useState(0);

    let incCount = () => {
        count = count+1;
        setCount(count);
        // console.log(count);
        
    }

    return(
        <div>
            <h3>Count = {count}</h3>
            <button onClick={incCount}>Increase</button>
        </div>
    )
}