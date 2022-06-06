import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Listss from "./components/Listss";
import InputForm from "./components/InputForm";

function App() {
  return (
    <Router>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse mx-3" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <Link to="/" className="navbar-brand">
                E-Commerce
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/create" className="nav-link">
                Create Products
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Listss />} />
        <Route path="/create" element={<InputForm />} />
      </Routes>
    </Router>
  );
}

export default App;
