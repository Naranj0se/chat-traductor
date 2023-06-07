import React from "react";
import { SearchChat } from "./SearchChat";
import { Inbox } from "./Inbox";
import { InboxHeader } from "./InboxHeader";
import { MenuButton } from "./MenuButton";
import { ChatsContainer } from "./ChatsContainer";
import { Chats } from "./Chats";
import { Chat } from "./Chat";
import { ChatHeader } from "./ChatHeader";
import { Display } from "./Display"
import { MessageContainer } from "./MessageContainer";
import { ChatInput } from "./ChatInput";

function App() {
  return (
  <Display>
    <Inbox>
      <InboxHeader>
        <MenuButton/>
        <SearchChat />
      </InboxHeader>
      <ChatsContainer>
          <Chats/>
          <Chats/>
          <Chats/>
          <Chats/>
          <Chats/>
          <Chats/>
          <Chats/>
          <Chats/>
          <Chats/>
          <Chats/>
          <Chats/>
          <Chats/>
        </ChatsContainer>
    </Inbox>
    <Chat>
      <ChatHeader/>
      <MessageContainer>
        {/* <Message/> */}
      </MessageContainer>
      <ChatInput/>
    </Chat>
  </Display>
  );
}

export default App;
