import ChatContext from "./ChatContext"

const ProvisionalData = {
    user_data: {
        isPremium: true,
        name: "Mikael Fernandez",
        password: "maincra",
        username: "mycahfrn"
    },
    current_chat: null,
}

const ChatValue = {
    isLogged: true,
    user_data: ProvisionalData,
    current_chat: null
}

const UserProvider = ({ children }) => {
    return(
        <ChatContext.Provider value={ChatValue}>
            { children }
        </ChatContext.Provider>
    )
}

export default UserProvider