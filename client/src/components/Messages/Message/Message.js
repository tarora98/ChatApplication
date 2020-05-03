import React from 'react';

import './Message.css';

const Message=({message:{user,text},name}) =>{
    let isSentByCurrentUser=false;
    const trimmedName=name.trim().toLowerCase();
    if(user=== trimmedName){
        isSentByCurrentUser=true;
    }
    return(
        isSentByCurrentUser?(
            <div className="messageContainer">
                <p className="sendText">{trimmedName}</p>
                <div className="messageBox ">
                    <p className="messageText">{text}</p>
                </div>
            </div>
        ) :
        (
            <div className="messageContainer">
            <div className="messageBox backgroundLight">
                <p className="messageText colorDark">{text}</p>
            </div>
            <p className="sendText pl-10">{user}</p>
        </div>
        )
    )
        }
export default Message;