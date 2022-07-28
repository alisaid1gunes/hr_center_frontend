import { useState, createContext } from "react";

const SearchContext = createContext(undefined);

function Context(props) {
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  return (
    <SearchContext.Provider value={{ search, setSearch, open, setOpen }}>
      {props.children}
    </SearchContext.Provider>
  );
}

export { Context, SearchContext };
