import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./pages/auth/SignIn";
import Register from "./pages/auth/Register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
