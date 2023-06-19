import Contact from '../Contact/index.jsx';
import useListContacts from '../hooks/useListContacts';

import './ContactsContainer.css';

function ContactsContainer(props) {

  const { listContacts } = useListContacts()  

  return (
    <section className='contactsContainer chatsContainer'>
      <ul>
        {listContacts.map( chat => <Contact key={chat.user_id} {...chat}/>)}
      </ul>
    </section>
  );
}

export { ContactsContainer };