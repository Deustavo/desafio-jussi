import React from "react";
import { SearchContext } from "../provider/search";

export default function SearchPage() {
  const { search } = React.useContext(SearchContext);


  return<>
    <section id="search-page">
      <h2 className="large">
        resultados para&nbsp;
        <span className="green-jussi">{search.data}</span>
      </h2>
    </section>
  </>;
}