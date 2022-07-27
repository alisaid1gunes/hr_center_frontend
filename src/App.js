import Main from "./pages/Main";
import Detail from "./pages/Detail";
import New from "./pages/New";
import { Route, Routes } from "react-router-dom";
import {
  Container,
  createMuiTheme,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import DrawerMenu from "./components/DrawerMenu";
import { Context, SearchContext } from "./context/SearchContext";

function App() {
  const theme = createMuiTheme({
    typography: {
      fontFamily: ["Montserrat"].join(","),
    },
  });
  return (
    <div>
      <Context>
        <CssBaseline />
        <DrawerMenu />
        <Container
          maxWidth={false}
          style={{
            background: "#f1f1f1",
            padding: "20px",
            Minwidth: "100vw",
            minHeight: "100vh",
          }}
        >
          <ThemeProvider theme={theme}>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="new" element={<New />} />
              <Route path="detail" element={<Detail />} />
            </Routes>
          </ThemeProvider>
        </Container>
      </Context>
    </div>
  );
}

export default App;
