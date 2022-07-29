import { useState, createContext } from "react";

const AppContext = createContext(undefined);

function Context(props) {
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  return (
    <AppContext.Provider
      value={{
        search,
        setSearch,
        open,
        setOpen,
        snackbarMessage,
        setSnackbarMessage,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export { Context, AppContext };
