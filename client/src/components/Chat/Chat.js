import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

import InfoBar from '../InfoBar/InfoBar';
import Messages from '../Messages/Messages';
import Input from '../Input/Input';

import './Chat.css';

let socket;

    const Chat = ({ location }) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    // const [users, setUsers] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const ENDPOINT = 'localhost:5000';
    useEffect(() => {
        const { name, room } = queryString.parse(location.search);
        socket = io(ENDPOINT);
        setName(name);
        setRoom(room);
        socket.emit('join', { name, room }, ({ error }) => {
            // alert(error);
        });
        return () => { // unmount function
            socket.emit('disconnect');
            socket.off();
        }
    }, [ENDPOINT, location.search]);

    useEffect(() => {
        socket.on('message', (message) => {
            setMessage([...messages, message]);
        });
        
    }, [messages]);

    // now we are developing useeffect which help for the message 
    // in below we are developing function for sending message

    const sendMessage = (event) => {
        event.preventDefault();
        
        if (message){
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    }

    console.log(message, messages);
    return (
        <div className="outerContainer">
            <div className="container">
                <InfoBar name={name}/>
                <Messages messages={messages}/>
                <Input message={message} setMessage={setMessage} sendMessage={sendMessage}/>
            </div>
        </div>
    )
}
export default Chat;