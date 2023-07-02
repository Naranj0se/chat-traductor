import { useContext } from "react"
import { InboxContext } from "../../../../store/context/inbox/inboxContext"

import "./ChatHeader.css"

function ChatHeader() {
  const { Pointer } = useContext(InboxContext)

  return (
    <div className="chat-header">
      <h2>{Pointer ? Pointer?.displayName : ""}</h2>
    </div>
  );
};

export { ChatHeader };
