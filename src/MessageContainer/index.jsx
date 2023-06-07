import React from 'react';
import './MessageContainer.css'

function MessageContainer(props) {
  return (
    <section className='messageContainer'>
      <ul>
        {props.children}
      </ul>
    </section>
  );
}

export { MessageContainer };