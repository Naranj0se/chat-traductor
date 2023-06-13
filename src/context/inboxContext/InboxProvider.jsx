import InboxContent from "./inboxContent"

const InboxProvider = ({ children }) => {

    

    return(
        <InboxContent.Provider value={UserData}>
            { children }
        </InboxContent.Provider>
    )
}

export default InboxProvider