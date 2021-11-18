import Image from "next/image";

export default function Search() {
  return<>
    <div className="search-contianer">
      <span className="placeholder paragraph pink-jussi">Buscar</span>
      <input className="paragraph"/>
      <Image src="/icons/search.svg" alt="search" height={24} width={24}/>
    </div>
  </>;
}