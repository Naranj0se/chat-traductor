  import React, {useContext} from 'react';
  import "./Contacts.css"
  
  import { ContactsContainer } from "./ContactsContainer/ContactsContainer"
  import UserContext from '../../../../context/userContext/UserContext';
  
  function Contacts({ isContactsOpen, toggleContacts }) {
  
    const user = useContext(UserContext);
    const { user: {user_data} } = user;
    const { name, avatarURL } = user_data;
  

  
    return (
      <div className={`contacts ${isContactsOpen ? 'open' : ''}`}>
        <div className="menu-background" onClick={toggleContacts}></div>
        <div className="menu-content">
          <div className="contacts-header">
            <div className="contacts-title">Contactos</div>
          </div>
          <input 
            className="contacts-search Search" 
            placeholder="Buscar" 
            // value= {searchValue}
            // onChange = {onSearchValueChange}
          />
          <ContactsContainer />
          <div className="contacts-options">
            <div className='contacts-option hvr-skew-forward'>
              <span className="material-symbols-outlined MenuIcon">
                person_add
              </span>
              <span className='MenuText'>Añadir contacto</span>
            </div>
            <div className='contacts-option cerrar hvr-skew-forward' onClick={toggleContacts}>
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
  
  export { Contacts };
  