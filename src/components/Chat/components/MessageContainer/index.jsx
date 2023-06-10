import React from 'react';
import './MessageContainer.css'
import { OtherMessage, OwnMessage } from "../Message";

function MessageContainer(props) {
  
  const currentUserId = 1;

  const messages = [
    {
      id_message: 1,
      id_user: 1,
      created_at: "7:00",
      message: "Hola, como estas?",
      sender: "Mikael"
    },
    {
      id_message: 2,
      id_user: 1,
      created_at: "6:00",
      message: "Hola, como estas? 2",
      sender: "Mikael"
    },
    {
      id_message: 3,
      id_user: 1,
      created_at: "5:00",
      message: "Hola, como estas 3?",
      sender: "Mikael"
    },
    {
      id_message: 4,
      id_user: 777,
      created_at: "5:00",
      message: "¡Hola! Estoy bien, gracias. ¿Y tú?",
      sender: "Naranjox"
    },
    {
      id_message: 5,
      id_user: 1,
      created_at: "5:00",
      message: "Bergas negras",
      sender: "Mikael"
    },
    {
      id_message: 6,
      id_user: 1,
      created_at: "7:00",
      message: "Hola, como estas?",
      sender: "Mikael"
    },
    {
      id_message: 7,
      id_user: 1,
      created_at: "6:00",
      message: "Hola, como estas? 2",
      sender: "Mikael"
    },
    {
      id_message: 8,
      id_user: 1,
      created_at: "5:00",
      message: "Hola, como estas 3?",
      sender: "Mikael"
    },
    {
      id_message: 9,
      id_user: 777,
      created_at: "5:00",
      message: "¡Hola! Estoy bien, gracias. ¿Y tú?",
      sender: "Naranjox"
    },
    {
      id_message: 10,
      id_user: 1,
      created_at: "5:00",
      message: "Bergas negras",
      sender: "Mikael"
    },
    {
      id_message: 11,
      id_user: 1,
      created_at: "7:00",
      message: "Hola, como estas?",
      sender: "Mikael"
    },
    {
      id_message: 12,
      id_user: 1,
      created_at: "6:00",
      message: "Hola, como estas? 2",
      sender: "Mikael"
    },
    {
      id_message: 13,
      id_user: 1,
      created_at: "5:00",
      message: "Hola, como estas 3?",
      sender: "Mikael"
    },
    {
      id_message: 14,
      id_user: 777,
      created_at: "5:00",
      message: "¡Hola! Estoy bien, gracias. ¿Y tú?",
      sender: "Naranjox"
    },
    {
      id_message: 15,
      id_user: 1,
      created_at: "5:00",
      message: "Bergas negras",
      sender: "Mikael"
    },

  ]

  return (
    <section className='messageContainer'>
      <ul>
        {messages.map((message) => {

          if(message.id_user === currentUserId){
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