import { useState, useEffect, useContext } from "react"
import UserContext from "../../../context/userContext/UserContext"
import socket from '../../../helpers/socket'

function useListInbox() {
    const [ listInbox, setListInbox ] = useState([])
    const [ currentChat, setCurrentChat ] = useState(null)

    const { user: { user_data } } = useContext(UserContext)
    const { id } = user_data

    useEffect(()=> {
      socket.emit('sending_initial_info', id)
      socket.on('sending_initial_info', res => setListInbox(res))
      socket.on('client_message', new_msg => {
        const updatedListBox = listInbox.map(msg => {
          if(new_msg.id_room === msg.id_room) {
            let updatedInbox = ({...msg, message: new_msg.message, id_message: new_msg.id})
            
            if(!(id === new_msg.id_user)) updatedInbox.counter = msg.counter + 1
        
            return updatedInbox
          }
          
          return msg
        })
        setListInbox(updatedListBox)
      })
    }, [])

    function updatedCounted(id_room) {
      const newChat = listInbox.map(inbox => {
        return inbox.id_room === id_room ? ({...inbox, counter: 0}) : inbox
      })
      setListInbox(newChat)
    }

    return { listInbox, setCurrentChat, updatedCounted }
}

export default useListInbox