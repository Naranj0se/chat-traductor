import Contact from '../Contact/index.jsx';
import useListContacts from '../hooks/useListContacts';

import './ContactsContainer.css';

function ContactsContainer(props) {

  const { toggleContacts, type, contactsToAdd, setContactsToAdd, toggleCreateGroup } = props

  const { listContacts } = useListContacts()  

  return (
    <section className='contactsContainer chatsContainer'>
      <ul>
        {listContacts.map( c => <Contact type={type} toggleContacts={toggleContacts} contactsToAdd={contactsToAdd} setContactsToAdd={setContactsToAdd} toggleCreateGroup={toggleCreateGroup} key={c.id} {...c}/>)}
      </ul>
    </section>
  );
}

export { ContactsContainer };