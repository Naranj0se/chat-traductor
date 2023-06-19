import { useState, useEffect, useContext } from "react"
import UserContext from "../../../../../context/userContext"
import socket from '../../../../../helpers/socket'

function useListInbox() {
    const [ listInbox, setListInbox ] = useState([])
    const [ currentChat, setCurrentChat ] = useState(null)

    const { user } = useContext(UserContext)
    const { user_data } = user
    const { user_id } = user_data

    useEffect(()=> {
      socket.emit('sending_initial_info', user_id)
      socket.on('sending_initial_info', res => setListInbox(res))
    }, [])

    return { listInbox, setCurrentChat }
}

export default useListInbox