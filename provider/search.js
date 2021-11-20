import React, { useState } from 'react';

export const SearchContext = React.createContext({});

export const SearchProvider = (props) =>  {
  const [search, setSearch] = useState({
    data: "",
    response: [],
  });
  
  return (
    <SearchContext.Provider value={{search, setSearch}}>
      {props.children}
    </SearchContext.Provider>
  );
};