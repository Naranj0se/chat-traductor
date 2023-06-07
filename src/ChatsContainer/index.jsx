import React from 'react';
import './ChatsContainer.css'

function ChatsContainer(props) {
  return (
    <section className='chatsContainer'>
      <ul>
        {props.children}
      </ul>
    </section>
  );
}

export { ChatsContainer };