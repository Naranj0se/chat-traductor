import { useContext } from 'react'
import { Navigate } from 'react-router-dom'

import ChatContext from '../context/ChatContext'

function PrivateRoute({ children }) {
    const { isLogged } = useContext(ChatContext)

    return (isLogged) ? children : <Navigate to="/auth" />
}

export default PrivateRoute