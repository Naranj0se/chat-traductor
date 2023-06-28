import React, { useContext, useEffect } from 'react';
import './MessageContainer.css'
import { OtherMessage, OwnMessage } from "../Message";
import UserContext from '../../../../context/userContext/UserContext';
import ChatContext from '../../../../context/chatContext/ChatContext';
import socket from '../../../../helpers/socket';
import { useState } from 'react';

function MessageContainer({ messages, setMessages }) {
  const { user: { user_data: { id } } } = useContext(UserContext)
  const { currentChat } = useContext(ChatContext)
  const { pointer, id_room } = currentChat 

  useEffect(() => {
    if(id_room) {
      socket.emit('loading_message', id_room)
      socket.on('loading_message', messages => setMessages(messages))

      socket.on('client_message', msg => {
        setMessages(messages => [...messages, msg])
      })
    }
  }, [id_room]) 

  return (
    <section className='messageContainer'>
      <ul>
        {messages.map((message) => {

          if(message.id_user== id){
            return <OwnMessage key={message.id_message} {...message} />
          }
          else{
            return <OtherMessage key={message.id_message} {...message}/>
          }
        })}
      </ul>
    </section>
  );
}

export { MessageContainer };