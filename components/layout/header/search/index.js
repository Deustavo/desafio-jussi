import React, { useState } from 'react';
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

import { SearchContext } from "../../../../provider/search";
import api from "../../../../services/api";

export default function Search() {
  const {setSearch} = React.useContext(SearchContext);
  const [text, setText] = useState("");
  const router = useRouter();

  /**
   * Atribui o valor pesquisado no input ao context
   * @param {*} search 
   */
  const setTextData = async (search) => {
    let response = [];
    setText(search);

    if (search !== "") {
      let get = await api.get(`people/?search=${search}`);
      response = get.data.results;
    }

    return setSearch({
      data: search,
      response: response,
    });
  };

  return<>
    <section className="search-contianer" htmlFor="header-search">
      <input className="paragraph" id="header-search" value={text} onChange={(e) => setTextData(e.target.value)} placeholder="Buscar"/>
      <Link href={"/search"}>
        <a className="link-icon">
          <Image src="/icons/search.svg" alt="search" height={24} width={24}/>
        </a>
      </Link>
      <div className="dinamic-border-input"/>
    </section>
  </>;
}