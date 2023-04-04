import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

//Partials
import AppNavbar from "./components/AppNavbar";
import Footer from "./components/Footer";

//Components
import Login from "./views/Auth/Login/Login";
import Register from "./views/Auth/Register/Register";
import Landing from "./views/Home/Landing";
import AccountCreated from "./views/Auth/Register/AccountCreated";
import WelcomeToApp from "./views/Auth/Register/WelcomeToApp";
import Home from "./views/Home/Landing";

function App() {
  return (
    <div className="App">
      <AppNavbar />

      <Routes>
        <Route path="/" exact element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" Component={<Home />} />

        <Route path="/register/accountCreated" element={<AccountCreated />} />

        <Route path="/register/welcomeToApp" element={<WelcomeToApp />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
