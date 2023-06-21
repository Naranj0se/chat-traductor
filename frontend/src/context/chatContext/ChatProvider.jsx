import ChatContext from "./ChatContext"
import { useState } from "react"

const defaultValue = {
    pointer: false,
    id_room: null
}

const ChatProvider = ({ children }) => {
    const [currentChat, setCurrentChat ] = useState(defaultValue)

    return(
        <ChatContext.Provider value={{currentChat, setCurrentChat}}>
            { children }
        </ChatContext.Provider>
    )
}

export default ChatProvider