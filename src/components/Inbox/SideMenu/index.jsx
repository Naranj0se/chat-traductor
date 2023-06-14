import React, {useContext} from 'react';
import "./SideMenu.css"

import UserContext from '../../../context/userContext/UserContext';

function SideMenu({ isMenuOpen, toggleMenu }) {

  const user = useContext(UserContext);
  const { user_data } = user;
  const { name, avatarURL } = user_data;


  // Datos del usuario:
  const userPhoto = avatarURL;
  const userName = name;

  // const handleLogout = () => {
  //   // Lógica para cerrar sesión (puede variar según tu implementación)
  //   
  //   onLogout();
  // };

  return (
    <div className={`side-menu ${isMenuOpen ? 'open' : ''}`}>
      <div className="menu-background" onClick={toggleMenu}></div>
      <div className="menu-content">
        <div className="user-profile">
          <div className="user-photo hvr-grow" style={{ backgroundImage: `url(${userPhoto})` }}></div>
          <div className="user-name">{userName}</div>
        </div>
        <div className="menu-options">
          <div className='option hvr-skew-forward'>
            <span className="material-symbols-outlined MenuIcon">
              contacts
            </span>
            <span className='MenuText'>Contactos</span>
          </div>
          <div className='option hvr-skew-forward'>
            <span className="material-symbols-outlined MenuIcon">
              group_add
            </span>
            <span className='MenuText'>Crear grupo</span>
          </div>
          <div className='option logout hvr-skew-forward'>
            <span className="material-symbols-outlined MenuIcon">
            logout
            </span>
            <span className='MenuText'>Cerrar sesión</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export { SideMenu };
