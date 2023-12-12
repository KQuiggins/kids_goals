import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./pages/auth/SignIn";
import Register from "./pages/auth/Register";
import Rewards from "./pages/Rewards";
import ChildListPage from "./pages/ChildListPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/rewards" element={<Rewards />} />
        <Route path="/list" element={<ChildListPage />} />

      </Routes>
    </Router>
  );
}

export default App;
