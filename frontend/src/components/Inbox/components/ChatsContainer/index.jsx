import InboxItem from '../InboxItem';
import useListInbox from '../../hooks/useListInbox';

import './ChatsContainer.css';

function ChatsContainer(props) {

  const { listInbox, setCurrentChat, updatedCounted } = useListInbox()  

  return (
    <section className='chatsContainer'>
      <ul>
        {listInbox.map( chat => <InboxItem key={chat.id_room} {...chat} updatedCounted={updatedCounted}setCurrentChat={setCurrentChat}/>)}
      </ul>
    </section>
  );
}

export { ChatsContainer };