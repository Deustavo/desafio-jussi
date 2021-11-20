import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { socialData } from '../../../services/mock/layout/social';

export default function Footer() {
  const [social, setSocial] = useState([]);

  useEffect(() => {
    setSocial(socialData);
  }, []);

  /**
   * Verifica de existe o valor social.imageSource
   * @returns {Boolean} 
   */
  const haveImageSource = (data) => {
    return data && data.imageSource ? true : false
  };

  return<>
    <section id="layout-footer" className="layout-footer">
      <div className="layout-footer__container-left">
        <Image src="/images/layout/wpp-company.png" alt="search" height={28} width={144}/>
      </div>
      <div className="layout-footer__container-right">
        {social.map(s =>
          <Link key={s.id} href={s.link}> 
            <a>
              {haveImageSource(s) && <Image src={s.imageSource} alt={`social${s.id}`} height={32} width={32}/>}
            </a>
          </Link>
        )}
      </div>
    </section>
  </>;
}