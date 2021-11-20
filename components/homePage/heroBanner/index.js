import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import Button from "../../shared/button";
import Card from "./card";
import { cardsData } from "../../../services/mock/homePage/cards";

export default function HeroBanner() {
  const [cards, setCards] = useState([]);
  const router = useRouter();

  useEffect(() => {
    setCards(cardsData);
  }, []);
  
  /**
   * Navega pata o site da Jussi
   */
   const navigateToSolutions = () => {
    router.push("#jussi-session");
  };

  return<>
    <section id="hero-banner" className="hero-banner padding-page">
      <div className="hero-banner__container-left">
        <span className="extra-large">Criamos<br/>lojas que<br/>vendem mais.</span>
        <p className="paragraph">A Jüssi é especialista na criação de lojas<br/>usando a plataforma VTEX. Precisa criar sua<br/>loja ou migrar de plataforma?</p>
        <Button text="Veja nossas soluções" action={navigateToSolutions} />
      </div>
      <div className="hero-banner__container-right">
        <Card data={cards[0]} />
        <div className="container-cards">
          <Card data={cards[1]} />
          <Card data={cards[2]} />
        </div>
      </div>
    </section>
  </>;
}