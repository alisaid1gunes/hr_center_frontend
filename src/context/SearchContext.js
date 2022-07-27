import { useState, createContext } from "react";

const SearchContext = createContext(undefined);

function Context(props) {
  const [search, setSearch] = useState("");
  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {props.children}
    </SearchContext.Provider>
  );
}

export { Context, SearchContext };
