import React, { useState } from 'react';

import { SearchChat } from "./components/SearchChat";
import { InboxHeader } from "./components/InboxHeader";
import { MenuButton } from "./components/MenuButton";
import { ChatsContainer } from "./components/ChatsContainer";
import { SideMenu } from './SideMenu';

import './Inbox.css'

function Inbox() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section className='inbox'>
      <SideMenu toggleMenu={toggleMenu} isMenuOpen={isMenuOpen}/>
      <InboxHeader>
        <MenuButton toggleMenu={toggleMenu}/>
        <SearchChat />
      </InboxHeader>
      <ChatsContainer>
        
      </ChatsContainer>
    </section>
  );
}

export { Inbox };