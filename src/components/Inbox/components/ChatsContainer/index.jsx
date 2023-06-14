import InboxItem from '../InboxItem';
import useListInbox from './hooks/useListInbox';

import './ChatsContainer.css';

function ChatsContainer(props) {

  const { listInbox } = useListInbox()  

  return (
    <section className='chatsContainer'>
      <ul>
        {listInbox.map( chat => <InboxItem key={listInbox.id_chat} {...chat}/>)}
      </ul>
    </section>
  );
}

export { ChatsContainer };