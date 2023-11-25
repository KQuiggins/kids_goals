import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./pages/auth/SignIn";
import Register from "./pages/auth/Register";
import Rewards from "./pages/Rewards";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/rewards" element={<Rewards />} />
      </Routes>
    </Router>
  );
}

export default App;
