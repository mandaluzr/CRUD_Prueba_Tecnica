import React from "react";

import "./footer.css";

const Footer = () => {
  return (
    <div className="footer__container">
      <h3 className="footer__title" id="contacto">
        Si les gusta mi CRUD, pueden contactarme a través del siguiente formulario
      </h3>
      <form className="formulario" action="">
          <div className="input__container">
        <input type="text" placeholder="Nombre" name="nombre" required />
        <input type="email" name="email" placeholder="Correo" required />
        </div>
        <textarea name="mensaje" placeholder="Mensaje:" />
        <input type="submit" name="enviar" placeholder="Enviar" className="enviar__button" />
      </form>
    </div>
  );
};

export default Footer;
