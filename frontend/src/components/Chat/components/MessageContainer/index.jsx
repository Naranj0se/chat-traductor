import { useContext, useEffect } from 'react'
import { OtherMessage, OwnMessage } from "../Message";

import { InboxContext } from '../../../../store/context/inbox/inboxContext';
import { UserContext } from '../../../../store/context/user/UserContext';
import { MessageContext, MessageDispatchContext } from '../../../../store/context/message/MessageContext';

import { getMessagesByIdRoom } from '../../../../store/dispatch/MessageDispatch';

import socket from '../../../../helpers/socket';

import './MessageContainer.css'

function MessageContainer() {
  const { isPointed, current_id_room } = useContext(InboxContext)
  const { id } = useContext(UserContext)
  const MessageDispatch = useContext(MessageDispatchContext)
  const { messages, loaded_messages_room } = useContext(MessageContext)

  const isCachedMessages = loaded_messages_room.includes(current_id_room)

  const MessageRef = messages.find(lm => lm.id_room === current_id_room)

  useEffect(() => {
    if(isPointed && !isCachedMessages) {
      socket.emit('messages:getMessagesByIdRoom', current_id_room)
      socket.on('messages:getMessagesByIdRoom', messages => {
        const data = { current_id_room, messages }
        getMessagesByIdRoom(MessageDispatch, data)
      })
    }

    return () => {
      socket.off('messages:getMessagesByIdRoom')
    }
  }, [current_id_room])

  return (
    <section className='messageContainer'>
      <ul>
        { isCachedMessages && MessageRef.Listmessages.map((message) => {

          if(message.id_user === id){
            return <OwnMessage key={message.id} {...message} />
          }
          else return <OtherMessage key={message.id} {...message}/>
          
        })} 
      </ul>
    </section>
  )
}

export { MessageContainer };