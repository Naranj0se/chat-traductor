import React from 'react';
import { SearchChat } from "./components/SearchChat";
import { InboxHeader } from "./components/InboxHeader";
import { MenuButton } from "./components/MenuButton";
import { ChatsContainer } from "./components/ChatsContainer";
import { Chats } from "./components/Chats";

import './Inbox.css'

function Inbox() {
  return (
    <section className='inbox'>
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
    </section>
  );
}

export { Inbox };