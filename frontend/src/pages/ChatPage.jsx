import { Display } from "../components/Display"
import { Inbox } from "../components/Inbox"
import { Chat } from "../components/Chat"

function ChatPage() {
  return(
    <Display>
      <Inbox />
      <Chat />
    </Display>
  )
}

export default ChatPage