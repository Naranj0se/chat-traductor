  import React, {useContext} from 'react';
  
  import { ContactsContainer } from "./ContactsContainer/ContactsContainer"
  import { UserContext } from '../../../../store/context/user/UserContext'

  import "./Contacts.css"


  function Contacts({ isContactsOpen, toggleContacts, toggleAddContacts }) {
  
    const { user_data } = useContext(UserContext)

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
          <ContactsContainer toggleContacts={toggleContacts} type={"contacts"}/>
          <div className="contacts-options">
            <div className='contacts-option hvr-skew-forward' onClick={toggleAddContacts}>
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
  