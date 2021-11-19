import Image from "next/image";

export default function LogoBar() {
  return<>
    <section id="logo-bar">
      <span className="paragraph title">Nossas principais lojas VTEX</span>
      <span className="arrow">&#8594;</span>
      <Image className="logo" src="/images/homePage/logoBar/logo-brastemp.png" alt="logo-brastemp" height={24} width={156} />
      <Image src="/images/homePage/logoBar/logo-compracerta.png" alt="logo-compracerta" height={21} width={180} />
      <Image src="/images/homePage/logoBar/logo-consul.png" alt="logo-consul" height={38} width={88} />
      <Image src="/images/homePage/logoBar/logo-thebar.png" alt="logo-thebar" height={38} width={130} />
    </section>
  </>;
}
