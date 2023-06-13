import InboxItem from '../InboxItem';
import useListInbox from './hooks/useListInbox';

import './ChatsContainer.css';

function ChatsContainer(props) {

  const { provitionalsChats } = useListInbox()  

  return (
    <section className='chatsContainer'>
      <ul>
        {provitionalsChats.map( chat => <InboxItem key={provitionalsChats.id_chat} {...chat}/>)}
      </ul>
    </section>
  );
}

export { ChatsContainer };