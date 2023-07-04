import React from 'react';

import "../Contacts.css"


function AddContacts({ isAddContactsOpen, toggleAddContacts }) {


  return (
    <div className={`contacts ${isAddContactsOpen ? 'open' : ''}`}>
      <div className="menu-background" onClick={toggleAddContacts}></div>
      <div className="menu-content">
        <div className="contacts-header">
          <div className="contacts-title">Nuevo contacto</div>
        </div>
        <div>
            <label htmlFor="search-user">Usuario:</label>
            <input 
            className="contacts-search Search"
            id='search-user' 
            placeholder="@ejemplo" 
            // value= {searchValue}
            // onChange = {onSearchValueChange}
            />
        </div>
        <div className='user-info'>
            <img className='user-avatar' src="https://www.serebii.net/dungeonrescueteamdx/pokemon/474.png" alt="Avatar" />
            <p className='contact-name'>José Naranjo</p>
        </div>
        <div className="contacts-options">
          <div className='contacts-option hvr-skew-forward'>
            <span className="material-symbols-outlined MenuIcon">
              person_add
            </span>
            <span className='MenuText'>Añadir</span>
          </div>
          <div className='contacts-option cerrar hvr-skew-forward' onClick={toggleAddContacts}>
            <span className="material-symbols-outlined MenuIcon">
              close
            </span>
            <span className='MenuText'>Cerrar</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export { AddContacts };
