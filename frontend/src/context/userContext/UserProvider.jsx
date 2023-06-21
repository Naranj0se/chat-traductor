import UserContext from "./UserContext"
import { useState } from "react"

const UserData = {
    isLogged: false,
    user_data: null
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