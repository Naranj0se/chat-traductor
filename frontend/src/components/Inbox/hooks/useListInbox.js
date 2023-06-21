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
    }, [])

    return { listInbox, setCurrentChat }
}

export default useListInbox