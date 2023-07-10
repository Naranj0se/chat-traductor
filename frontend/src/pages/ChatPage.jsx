import { Display } from "../components/Display"
import { Inbox } from "../components/Inbox"
import { Chat } from "../components/Chat"

import socket from '../helpers/socket'
import { useEffect, useContext } from 'react'
import { UserContext } from '../store/context/user/UserContext'

function ChatPage() {

  const { user_data: { id } } = useContext(UserContext)

  useEffect(() => {
    socket.emit('initial_loading', id)
  }, [id]);

  return(
    <Display>
      <Inbox />
      <Chat />
    </Display>
  )
}

export default ChatPage