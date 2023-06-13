import UserContext from "./UserContext"

const UserData = {
    isLogged: true,
    user_data: {
        user_id: "0VEBC8hSRoVwU0vv8dXb",
        username: "mycahfrn",
        name: "Mikael Fernandez",
        isPremium: true
    },
    current_chat: null
}

const UserProvider = ({ children }) => {
    return(
        <UserContext.Provider value={UserData}>
            { children }
        </UserContext.Provider>
    )
}

export default UserProvider