import Main from "./pages/Main";
import Detail from "./pages/Detail";
import New from "./pages/New";
import { Route, Routes, } from "react-router-dom";

function App() {

  return (
    <div >
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="new" element={<New />} />
        <Route path="detail" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
