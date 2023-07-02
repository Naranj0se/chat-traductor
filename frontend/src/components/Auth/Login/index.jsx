import { useState, useContext } from "react"
import socket from "../../../helpers/socket"

import { UserDispatchContext } from "../../../store/context/user/UserContext"

import "../Auth.css"

const Login = ({ onCreateAccount , show }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const setUser = useContext(UserDispatchContext)
  
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
        localStorage.setItem('isLogged', true)
        localStorage.setItem('user_data', JSON.stringify(body.user))
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
