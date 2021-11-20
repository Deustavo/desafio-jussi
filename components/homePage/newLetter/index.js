import { useState } from "react";
import Button from "../../shared/button";

export default function NewLetter() {
  const [email, setEmail] = useState("");

  return<>
    <section id="new-letter">
      <h2 className="large white">receba novidades da nossa área de produtos digitais.</h2>
      <div className="input-container">
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Digite seu e-mail" className="paragraph"/>
        <Button text="Cadastrar" className="text-button"/>
      </div>
    </section>
  </>;
}