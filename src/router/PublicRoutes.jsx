import { useContext } from 'react'
import { Navigate } from 'react-router-dom'

import ChatContext from '../context/ChatContext'

function PublicRoute ({ children }) {
    const { isLogged } = useContext(ChatContext)
    alert(isLogged)
    
    return (!isLogged) ? children : <Navigate to="/" />
}

export default PublicRoute