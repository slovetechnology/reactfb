import axios from "axios";
import "bootstrap/dist/css/bootstrap.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Friends from "./Pages/Friends";
import Home from "./Pages/Home";
import Login from "./Pages/Login";


axios.defaults.baseURL = "http://127.0.0.1:8000";
function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
