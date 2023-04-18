import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/App.css";

//Partials
import AppNavbar from "./components/AppNavbar";
import Footer from "./components/Footer";

//Components
import Login from "./views/Auth/Login";
import Register from "./views/Auth/Register";
import Landing from "./views/Home/Landing";
import WelcomeToApp from "./views/Auth/WelcomeToApp";
import Home from "./views/Home/Home";

import RedirectHome from "./components/RedirectHome";
import TermsAndConditions from "./components/TermsAndConditions";
import Recoverpassword from "./components/Recoverpassword";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppNavbar />
        <div className="container w-auto m-auto">
          <Routes>
            <Route
              path="/"
              exact
              element={
                <RedirectHome>
                  <Landing />
                </RedirectHome>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/home"
              element={
                <RedirectHome>
                  <Home />
                </RedirectHome>
              }
            />
            <Route path="/register/welcomeToApp" element={<WelcomeToApp />} />
            <Route path="/tyc" element={<TermsAndConditions />} />
          </Routes>
        </div>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
