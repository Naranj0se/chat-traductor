import { useEffect, useState, useContext } from 'react';

import { SearchChat } from "./components/SearchChat";
import { InboxHeader } from "./components/InboxHeader";
import { MenuButton } from "./components/MenuButton";
import { ChatsContainer } from "./components/ChatsContainer";
import { SideMenu } from './components/SideMenu';
import { Contacts } from "./components/Contacts";

import './Inbox.css'

function Inbox() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactsOpen, setIsContactsOpen] = useState(false);
  

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const toggleContacts = () => setIsContactsOpen(!isContactsOpen)
  
  return (
    <section className='inbox'>
      <SideMenu toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} toggleContacts={toggleContacts}/>
      <Contacts toggleContacts={toggleContacts} isContactsOpen={isContactsOpen}/>
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