import React from 'react';
import './Inbox.css'

function Inbox(props) {
  return (
    <section className='inbox'>
      {props.children}
    </section>
  );
}

export { Inbox };