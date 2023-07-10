import Contact from '../Contact/index.jsx';
import useListContacts from '../hooks/useListContacts';

import './ContactsContainer.css';

function ContactsContainer(props) {

  const { listContacts } = useListContacts()  

  return (
    <section className='contactsContainer chatsContainer'>
      <ul>
        {listContacts.map( c => <Contact key={c.id} {...c}/>)}
      </ul>
    </section>
  );
}

export { ContactsContainer };