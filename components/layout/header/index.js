import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import Search from "./search";

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
    <section id="layout-header">
      <div className="container-1">
        <Link href="/"> 
          <a>
            <Image src="/images/layout/logo-jussi.png" alt="logo-jussi" height={36} width={164}/>
          </a>
        </Link>
        <Link href="#our-solutions">
          <a className="paragraph">Nossas soluções</a>
        </Link>
        <Link href="#jussi-session">
          <a className="paragraph">Conheça a Jüssi</a>
        </Link>
      </div>
      <div className="container-2">
        <Search />
        <Link href="/">
          <a className="paragraph">Login</a>
        </Link>
        <Image src="/icons/shopping-cart.svg" alt="cart" height={24} width={24}/>
      </div>
    </section>
  </>;
}