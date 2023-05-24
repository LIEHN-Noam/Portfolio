import "./FormStyles.css";

import React from "react";

const Form = () => {
  return (
    <div className="form">
      <form>
        <label>Votre nom</label>
        <input type="text" placeholder="Nom & Prénom"></input>
        <label>Votre e-mail</label>
        <input type="email" placeholder="quelquun@mail.truc"></input>
        <label>Le sujet</label>
        <input type="text" placeholder="Je prie que ça soit une offre de stage..."></input>
        <label>Message</label>
        <textarea rows="6" placeholder="Entrez votre message ici" />
        <button className="btn">Envoyer</button>
      </form>
    </div>
  );
};

export default Form;
