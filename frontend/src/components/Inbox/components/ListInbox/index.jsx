import InboxItem from '../InboxItem'
import './ListInbox.css'

import useListInbox from './hooks/useListInbox'

function ListInbox() {

  const { listInbox } = useListInbox()

  return (
    <section className='chatsContainer'>
      <ul>
        { listInbox.map(inbox => <InboxItem key={inbox.id_room} {...inbox}/>) }
      </ul>
    </section>
  );
}

export default ListInbox