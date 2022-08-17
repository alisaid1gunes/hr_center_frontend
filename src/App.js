import Main from "./pages/Main";
import New from "./pages/New";
import { Route, Routes } from "react-router-dom";
import {
  Container,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import {theme} from './theme'
import DrawerMenu from "./components/DrawerMenu/DrawerMenu";
import { Context } from "./context/AppContext";
import Detail from "./pages/Detail";
import Update from "./pages/Update";
import ApplicationProgress from "./pages/ApplicationProgress";

function App() {
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
              <Route path="update" element={<Update />} />
              <Route path="progress" element={<ApplicationProgress />} />
            </Routes>
          </ThemeProvider>
        </Container>
      </Context>
    </div>
  );
}

export default App;
