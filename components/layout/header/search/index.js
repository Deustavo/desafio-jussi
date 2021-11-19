import Image from "next/image";
import { useState } from "react";

export default function Search() {
  const [searchWords, setSearchWords] = useState("");

  return<>
    <label className="search-contianer" htmlFor="header-search">
      <input className="paragraph" id="header-search" value={searchWords} onChange={(e) => setSearchWords(e.target.value)}/>
      <label className="placeholder paragraph pink-jussi" htmlFor="header-search">Buscar</label>
      <Image src="/icons/search.svg" alt="search" height={24} width={24}/>
      <div className="dinamic-border-input"/>
    </label>
  </>;
}