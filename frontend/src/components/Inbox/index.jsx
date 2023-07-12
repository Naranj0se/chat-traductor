import { useState } from 'react';

import { SearchChat } from "./components/SearchChat";
import { InboxHeader } from "./components/InboxHeader";
import { MenuButton } from "./components/MenuButton";
import ListInbox from "./components/ListInbox";
import { SideMenu } from './components/SideMenu';
import { Contacts } from "./components/Contacts";
import { AddContacts } from "./components/Contacts/AddContacts";

import './Inbox.css'

function Inbox() {
  const [searchValue, setSearchValue] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactsOpen, setIsContactsOpen] = useState(false);
  const [isAddContactsOpen, setIsAddContactsOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const toggleContacts = () => setIsContactsOpen(!isContactsOpen)
  const toggleAddContacts = () => {

    setIsAddContactsOpen(!isAddContactsOpen)
    setIsContactsOpen(false)  
  }

  const searchChatByTitle = (items) => {
    return items.filter((item) => item.displayName.toLowerCase().includes(searchValue.toLowerCase()))
  }
  
  return (
    <section className='inbox'>
      <SideMenu toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} toggleContacts={toggleContacts}/>
      <Contacts toggleContacts={toggleContacts} isContactsOpen={isContactsOpen} toggleAddContacts={toggleAddContacts}/>
      <AddContacts toggleAddContacts={toggleAddContacts} toggleContacts={toggleContacts} isAddContactsOpen={isAddContactsOpen}/>
      <InboxHeader>
        <MenuButton toggleMenu={toggleMenu}/>
        <SearchChat searchValue={searchValue} setSearchValue={setSearchValue}/>
      </InboxHeader>
      <ListInbox searchChatByTitle={searchChatByTitle} searchValue={searchValue}/>
    </section>
  );
}

export { Inbox };