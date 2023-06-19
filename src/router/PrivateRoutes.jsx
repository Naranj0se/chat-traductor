import { useContext } from 'react'
import { Navigate } from 'react-router-dom'

import UserContext from '../context/userContext/UserContext'

function PrivateRoute({ children }) {
    const { user:  {isLogged } } = useContext(UserContext)

    return (isLogged) ? children : <Navigate to="/auth" />
}

export default PrivateRoute