import React, { useEffect, useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { SearchContext } from "../../../../provider/search";
import api from "../../../../services/api";

export default function Search() {
  const {search, setSearch} = React.useContext(SearchContext);
  const [text, setText] = useState('');
  
  useEffect(() => {
    console.log(search);
  }, [])

  const setTextData = async (parametro) => {
    setText(parametro);
    // let response = await api.get(`people/?search=${parametro}`);
    let response = {
      data: parametro,
      response: [{
        id: 1,
        nome: "Oswaldo"
      }],
    }

    setSearch(response);
  };

  return<>
    <label className="search-contianer" htmlFor="header-search">
      <input className="paragraph" id="header-search" value={text} onChange={(e) => setTextData(e.target.value)} placeholder="Buscar"/>
      <Link href={"/search"}>
        <a className="link-icon">
          <Image src="/icons/search.svg" alt="search" height={24} width={24}/>
        </a>
      </Link>
      <div className="dinamic-border-input"/>
    </label>
  </>;
}