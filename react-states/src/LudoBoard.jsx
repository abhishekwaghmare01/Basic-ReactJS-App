import { useState } from "react";

export default function LudoBoard(){

     let [moves,setMoves] = useState({blue:0, yellow:0,green:0,red:0});

     let updateBlue = () =>{
        console.log(`moves.blue = ${moves.blue}`);
        // setMoves({...moves, blue: moves.blue+1});

        //use Callback method
        setMoves((preMoves)=>{
            return {...preMoves, blue : preMoves.blue + 1};
        })
     }

     let updateYellow = ()=>{
        setMoves((preMoves) =>{
            return {...preMoves, yellow : preMoves.yellow + 1};
        })
     }

     let updateGreen = ()=>{
        setMoves((preMoves)=>{
            return {...preMoves, green : preMoves.green + 1};
        })
     }

    return(
        <div>
            <h3>Game Begins!</h3>
            <div className="board">

                <p >Blue moves = {moves.blue}</p>
                <button style={{backgroundColor:"blue"}} onClick={updateBlue}>+1</button>

                <p>Yellow moves =  {moves.yellow}</p>
                <button style={{backgroundColor:"yellow", color:"black"}} onClick={updateYellow}>+1</button>

                <p>Green moves =  {moves.green}</p>
                <button style={{backgroundColor:"green"}} onClick={updateGreen}>+1</button>

                <p>Red moves =  {moves.red}</p>
                <button style={{backgroundColor:"red" }} >+1</button>

            </div>
        </div>
    )
}