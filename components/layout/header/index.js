import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import Search from "./search";
import Hamburguer from "./hamburguer";

/**
 * Controla a animação de esconder e exibir o header 
 */
const hideHeader = () => {
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("layout-header").style.top = "0";
    } else {
      document.getElementById("layout-header").style.top = "-80px";
    }
    prevScrollpos = currentScrollPos;
  }
};

export default function Header() {
  useEffect(() => {
    hideHeader();
  }, [])

  return<>
    <section id="layout-header" className="layout-header">
      <div className="layout-header__container-left">
        <Link href="/"> 
          <a>
            <Image src="/images/layout/logo-jussi.png" alt="logo-jussi" height={36} width={164}/>
          </a>
        </Link>
        <Link href="#our-solutions">
          <a className="paragraph hide-mobile">Nossas soluções</a>
        </Link>
        <Link href="#jussi-session">
          <a className="paragraph hide-mobile">Conheça a Jüssi</a>
        </Link>
      </div>
      <div className="layout-header__container-right hide-mobile">
        <Search />
        <Link href="/">
          <a className="paragraph">Login</a>
        </Link>
        <Image src="/icons/shopping-cart.svg" alt="cart" height={24} width={24}/>
      </div>
      <div className="layout-header__container-mobile">
        <Image src="/icons/search.svg" alt="search" height={24} width={24}/>
        <Hamburguer />
      </div>
    </section>
  </>;
}