import TicketDigit from "./TicketDigit";
import './Ticket.css'

export default function Ticket({ticket}){
    return (
        <>
        <p>Ticket</p>
          <div className="Ticket">
            {ticket.map( (num,idx) => {
                return <TicketDigit num = {num} key = {idx}/>
            })}
         </div>
        </>
    )
}