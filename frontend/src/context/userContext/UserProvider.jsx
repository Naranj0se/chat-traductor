import UserContext from "./UserContext"
import { useState } from "react"

const UserData = {
    isLogged: Boolean(localStorage.getItem('isLogged')) || false,
    user_data: JSON.parse(localStorage.getItem('user_data')) || null
}

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(UserData)

    return(
        <UserContext.Provider value={{user, setUser}}>
            { children }
        </UserContext.Provider>
    )
}

export default UserProvider