import { BrowserRouter, Route, Routes } from "react-router-dom";
import FirstBank from "./pages/account-upgrade";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route element={<ProtectedRoute />}> */}
        <Route path="/" element={<FirstBank />} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
