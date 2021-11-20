import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import api from "../../services/api";

export default function SearchId() {
  const [people, setPeople] = useState({});
  const route = useRouter();
  
  useEffect(() => {
    getPeople();
  }, []);

  /**
   * Pega as informações da pessoa na API
   * @param {String} id 
   */
  const getPeople = async () => {
    const response = await api.get(`people/${route.query.id}`);

    setPeople(response.data);
  }

  return<>
    <section id="search-id-page" className="search-id-page padding-page">
      <h2 className="extra-large">
        {people["name"]}
      </h2>
      {
        Object.keys(people).map(key => {
          return <div key={key} className="item-people">
            <p className="paragraph dark-gray">{key}</p>
            <p className="paragraph item-people__key-text">{people[key]}</p>
          </div>
        }
        )
      }
    </section>
  </>;
}