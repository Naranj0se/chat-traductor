import UserContext from "./UserContext"
import { useState } from "react"

const UserData = {
    isLogged: false,
    user_data: {
        id_user: "1",
        username: "mycahfrn",
        displayName: "Mikael Fernandez",
        photo_url: "https://www.serebii.net/dungeonrescueteamdx/pokemon/474.png",
        isPremium: true
    }
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