import Ticket from "./Ticket";
import { generateRandom, Sum, isEqual} from "./lotteryHelper1";
import { useState } from "react";

export default function Lottery({n, winningSum}){
    let [ticket,setTicket] = useState(generateRandom(3));
    let isWinning = Sum(ticket) === winningSum;
    //let isWinning = isEqual(ticket)

    let regenerateTicket = () => {
        setTicket(generateRandom(n));
    }

    let myStyle = {border : "1px solid pink", borderRadius : "14px", padding : "0 10px 0 10px" ,width : "220px" ,height : "310px"}
    return (
        <div style={myStyle} className="Lottery">
            <h2>Lottery Game</h2>
            <Ticket ticket={ticket}/>
            <br></br>
            
            <button onClick={regenerateTicket}>Regenerate</button>
            <p>{isWinning ? "Congratulations! You Won..." : "Try Again"}</p>
        </div>
    )
}