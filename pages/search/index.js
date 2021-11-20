import React from "react";
import Link from "next/link";
import { SearchContext } from "../../provider/search";

export default function SearchPage() {
  const { search } = React.useContext(SearchContext);

  /**
   * Pega o ID do personagem de star wars
   */
  const getIdPeople = (result) => {
    let id = result.url.replace("https://swapi.dev/api/people/", "").replace("/", "");

    return id;
  }

  return<>
    <section id="search-page" className="search-page">
      <h2 className="large">
        resultados para&nbsp;
        <span className="green-jussi">&quot;{search.data}&quot;</span>
      </h2>
      <div className="search-page__container-results">
        {
          search.response.map(result =>
            <Link key={result.name} href={`/search/${getIdPeople(result)}`}>
              <a className="extra-large container-result">
                <span className="result-id">{getIdPeople(result)}.</span>
                <span className="result-name">{result.name}</span>
              </a>
            </Link>
          )
        }
      </div>
    </section>
  </>;
}