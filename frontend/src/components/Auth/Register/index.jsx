import React, { useState } from 'react';
import "../Auth.css"

const Register = ({ onCreateAccount , show }) => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [idioma, setIdioma] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes realizar la lógica de registro
  };

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleApellidoChange = (event) => {
    setApellido(event.target.value);
  };

  const handleCorreoChange = (event) => {
    setCorreo(event.target.value);
  };

  const handleContraseñaChange = (event) => {
    setContraseña(event.target.value);
  };

  const handleIdiomaChange = (event) => {
    setIdioma(event.target.value);
  };

  return (
    <div className={`register-container register ${show ? 'show' : ''}`}>
      <div className={`register-background`} onClick={onCreateAccount}></div>
      <div className="register-card login-container">
        <h2>Crear una cuenta</h2>
        <form onSubmit={handleSubmit}>
          <div className='full-name'>
            <div className='form-name'>
              <label htmlFor="nombre">Nombre:</label>
              <input type="text" id="nombre" value={nombre} onChange={handleNombreChange} required />
            </div>
            <div className='form-lastname'>
              <label htmlFor="apellido">Apellido:</label>
              <input type="text" id="apellido" value={apellido} onChange={handleApellidoChange} required />
            </div>
          </div>

          <label htmlFor="correo">Correo electrónico:</label>
          <input type="email" id="correo" value={correo} onChange={handleCorreoChange} required />

          <label htmlFor="contraseña">Contraseña:</label>
          <input
            type="text"
            id="contraseña"
            value={contraseña}
            onChange={handleContraseñaChange}
            required
          />

          <label htmlFor="idioma">Idioma:</label>
          <select className='select-input' id="idioma" value={idioma} onChange={handleIdiomaChange} required>
            <option value="">Seleccione un idioma</option>
            <option value="alemán">alemán</option>
            <option value="búlgaro">búlgaro</option>
            <option value="checo">checo</option>
            <option value="chino">chino</option>
            <option value="coreano">coreano</option>
            <option value="danés">danés</option>
            <option value="eslovaco">eslovaco</option>
            <option value="esloveno">esloveno</option>
            <option value="español">español</option>
            <option value="estonio">estonio</option>
            <option value="finés">finés</option>
            <option value="francés">francés</option>
            <option value="griego">griego</option>
            <option value="húngaro">húngaro</option>
            <option value="indonesio">indonesio</option>
            <option value="inglés">inglés</option>
            <option value="italiano">italiano</option>
            <option value="japonés">japonés</option>
            <option value="letón">letón</option>
            <option value="lituano">lituano</option>
            <option value="neerlandés">neerlandés</option>
            <option value="noruego (bokmål)">noruego (bokmål)</option>
            <option value="polaco">polaco</option>
            <option value="portugués">portugués</option>
            <option value="rumano">rumano</option>
            <option value="ruso">ruso</option>
            <option value="sueco">sueco</option>
            <option value="turco">turco</option>
            <option value="ucraniano">ucraniano</option>
          </select>

          <button type="submit">Registrarse</button>
        </form>
        <a className="toggle-register hvr-skew-forward" onClick={onCreateAccount}>Ya tengo una cuenta</a>
      </div>
    </div>
      
    
  );
};


export { Register };



