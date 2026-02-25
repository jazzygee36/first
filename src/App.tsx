import { BrowserRouter, Route, Routes } from "react-router-dom";
import FirstBank from "./pages/first";
import ProtectedRoute from "./auth/protected-route";
import HomePage from "./pages/home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/first" element={<FirstBank />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
