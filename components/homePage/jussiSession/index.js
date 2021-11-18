import Image from "next/image";
import Button from "../../shared/button"

export default function JussiSession() {
  return<>
    <section id="jussi-session" className="padding-page">
      <div className="container-1">
        <h2 className="large">Olá, somos<br />a Jüssi</h2>
        <p className="paragraph">A Jüssi é uma agência integrante do grupo global WPP que vem há 10 anos consolidando o pensamento voltado para produtos e resolução de problemas. Nosso área dedicada exclusivamente para Produtos Digitais é organizada em 6 especialidades: Product Managamenet, User Experience Design, SEO, Tecnologia, Agile e User Behavior Analytics.</p>
        <Button text="Conheça a Jüssi"/>
      </div>
      <div className="container-2">
        <Image src="/images/homePage/jussiSession/image-jussi.png" height={"520vw"} width={"700vw"} alt="image-jussi"/>
      </div>
    </section>
  </>;
}