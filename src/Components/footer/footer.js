import React from "react";

import "./footer.css";

const Footer = () => {
  return (
    <div className="footer__container">
      <h3 className="titulo" id="contacto">
        Contacto
      </h3>
      <form className="formulario" action="">
          <div className="input__container">
        <input type="text" placeholder="Nombre" name="nombre" required />
        <input type="email" name="email" placeholder="Correo" required />
        </div>
        <textarea name="mensaje" placeholder="Mensaje:" />
        <input type="submit" name="enviar" placeholder="Enviar" className="boton" />
      </form>
    </div>
  );
};

export default Footer;
