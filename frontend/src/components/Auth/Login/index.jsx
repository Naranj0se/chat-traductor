import React, { useState, useContext } from "react";
import "../Auth.css"
import socket from "../../../helpers/socket"
import UserContext from "../../../context/userContext/UserContext";


const Login = ({ onCreateAccount , show }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext)

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };


  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = { username: email, password }
    // Aquí puedes realizar la lógica de autenticación o enviar los datos al servidor
    socket.emit('auth:login', body)
    socket.on('auth:login', body => {
      if(body.status === "ok") {
        setUser({
          isLogged: true,
          user_data: body.user
        })
      }
    })
  };


  return (
    <div className={`login-container login ${(!show) ? 'show' : ''}`}>  
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nombre de Usuario:</label>
          <input
            placeholder="JohnDoe"
            type="text"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button className="hvr-fade" type="submit">Login</button>
      </form>
      <div className="additional-options">
        {/* <a href="#">Forgot Password?</a> */}
        <a className="toggle-register hvr-skew-forward" onClick={onCreateAccount}>Crear una cuenta</a>
      </div>
    </div>
  );
};

export { Login };
