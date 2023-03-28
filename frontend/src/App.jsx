import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./views/Login";
import Home from "./views/Home";
import AppNavbar from "./components/AppNavbar";

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
