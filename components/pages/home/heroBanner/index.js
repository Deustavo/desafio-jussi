import Button from "../../../shared/button";
import Card from "../../../shared/card";

export default function HeroBanner() {
  return<>
    <section id="hero-banner" className="padding-page">
      <div className="container-1">
        <span className="extra-large">Criamos<br/>lojas que<br/>vendem mais.</span>
        <p className="paragraph">A Jüssi é especialista na criação de lojas<br/>usando a plataforma VTEX. Precisa criar sua<br/>loja ou migrar de plataforma?</p>
        <Button text="Veja nossas soluções"/>
      </div>
      <div className="container-2">
        <Card className="floating-card image-1" text="Comprar em 12x"/>
        <div className="container-cards">
          <Card className="image-2" text="Mais Detalhes"/>
          <Card className="margin-top-card image-3" text="Adicionar à sacola"/>
        </div>
      </div>
    </section>
  </>;
}