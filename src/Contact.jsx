import { ActionButton } from "./ActionButton"

export const Contact = () =>{
    const handleSendMessage =() =>{
        alert("sending your message");
    };
    return(
        <div><h2>Contact us</h2>
        <ActionButton text="send message" onClick={handleSendMessage}/>
        </div>
    )
}