import InboxItem from '../InboxItem'
import './ListInbox.css'

import useListInbox from './hooks/useListInbox'

function ListInbox({ searchChatByTitle , searchValue }) {

  const { listInbox } = useListInbox()
  const filteredListInbox = searchChatByTitle(listInbox)

  if (searchValue) { 
    if(filteredListInbox.length < 1){
      return (
        <section className='chatsContainer'>
          <ul>
            <li>
              <p className='not-found-message'>No hay coincidencias.</p>
            </li>
          </ul>
        </section>
      );
    } else {
      return (
        <section className='chatsContainer'>
          <ul>
            { filteredListInbox.map(inbox => <InboxItem key={inbox.id_room} {...inbox}/>) }
          </ul>
        </section>
      );
    }
  } else {
    return (
      <section className='chatsContainer'>
        <ul>
          { listInbox.map(inbox => <InboxItem key={inbox.id_room} {...inbox}/>) }
        </ul>
      </section>
    );
  }


}

export default ListInbox