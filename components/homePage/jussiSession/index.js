import Image from "next/image";
import Button from "../../shared/button"
import { useRouter } from 'next/router'

export default function JussiSession() {
  const router = useRouter();

  /**
   * Navega pata o site da Jussi
   */
  const navigateToJussiSite = () => {
    router.push("https://jussi.com.br/");
  };

  return<>
    <section id="jussi-session" className="jussi-session padding-page">
      <div className="jussi-session__container-left">
        <h2 className="large">Olá, somos<br />a Jüssi</h2>
        <p className="paragraph">A Jüssi é uma agência integrante do grupo global WPP que vem há 10 anos consolidando o pensamento voltado para produtos e resolução de problemas. Nosso área dedicada exclusivamente para Produtos Digitais é organizada em 6 especialidades: Product Managamenet, User Experience Design, SEO, Tecnologia, Agile e User Behavior Analytics.</p>
        <Button text="Conheça a Jüssi" action={navigateToJussiSite}/>
      </div>
      <div className="jussi-session__container-right">
        <Image src="/images/homePage/jussiSession/image-jussi.png" height={"520vw"} width={"700vw"} alt="image-jussi"/>
      </div>
    </section>
  </>;
}