import React, { useState } from "react";
import "../Auth.css"

const Login = ({ onCreateAccount , show }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar la lógica de autenticación o enviar los datos al servidor
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className={`login-container login ${(!show) ? 'show' : ''}`}>  
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            placeholder="ejemplo@gmail.com"
            type="email"
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
