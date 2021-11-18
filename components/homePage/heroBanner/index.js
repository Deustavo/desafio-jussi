import { useEffect, useState } from "react";
import Button from "../../shared/button";
import Card from "./card";
import { cardsData } from "../../../mock/homePage/cards";

export default function HeroBanner() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(cardsData);
  }, []);

  return<>
    <section id="hero-banner" className="padding-page">
      <div className="container-1">
        <span className="extra-large">Criamos<br/>lojas que<br/>vendem mais.</span>
        <p className="paragraph">A Jüssi é especialista na criação de lojas<br/>usando a plataforma VTEX. Precisa criar sua<br/>loja ou migrar de plataforma?</p>
        <Button text="Veja nossas soluções"/>
      </div>
      <div className="container-2">
        <Card data={cards[0]} />
        <div className="container-cards">
          <Card data={cards[1]} />
          <Card data={cards[2]} />
        </div>
      </div>
    </section>
  </>;
}