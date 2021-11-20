import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

export const SearchContext = React.createContext({});

export const SearchProvider = (props) =>  {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState({
    data: "",
    response: [],
  });

  useEffect(() => {
    if(search.data !== "")
      router.push("/search");
    else if (router.pathname === "/search")
      router.push("/");
  }, [search]);
  
  return (
    <SearchContext.Provider value={{
      loading,
      setLoading,
      search,
      setSearch
    }}>
      {props.children}
    </SearchContext.Provider>
  );
};