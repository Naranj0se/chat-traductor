import { useContext, useEffect } from 'react'
import socket from '../../../../../helpers/socket'

import { InboxContext, InboxDispatchContext } from '../../../../../store/context/inbox/inboxContext'
import { UserContext } from '../../../../../store/context/user/UserContext'
import { MessageDispatchContext } from '../../../../../store/context/message/MessageContext'

import { initialLoadInbox, updatedInboxNewMessage, updatedInboxCounter, updatedInboxCounterByRead, newInbox } from '../../../../../store/dispatch/InboxDispatch'
import { addMessage } from '../../../../../store/dispatch/MessageDispatch'


function useListInbox() {
    const { listInbox } = useContext(InboxContext)
    const dispatch = useContext(InboxDispatchContext)
    const messageDispatch = useContext(MessageDispatchContext)
    const { user_data: { id }} = useContext(UserContext)
    
    useEffect(() => {
        socket.emit('inbox:initial_load', id)
        socket.on('inbox:initial_load', listInbox => initialLoadInbox(dispatch, listInbox))
        socket.on("messages:clientSendMessage", new_msg => {
            updatedInboxNewMessage(dispatch, new_msg)
            addMessage(messageDispatch, new_msg)

            if(!(new_msg.id_user === id)) updatedInboxCounter(dispatch, new_msg.id_room)
        })
        socket.on("messages:readInbox", id_room => {
            updatedInboxCounterByRead(dispatch, id_room)
        })
        socket.on("socket:new_room", id_room => socket.emit("socket:new_listen", id_room))
        socket.on('message:new_inbox', inbox => {
            console.log(inbox)
            newInbox(dispatch, inbox)
        } )


        return () => {
            socket.off("inbox:initial_load")
            socket.off("messages:clientSendMessage")
            socket.off("messages:readInbox")
            socket.off("socket:new_room")
            socket.off("message:new_inbox")
        }
    }, [])

    return { listInbox }
}

export default useListInbox
