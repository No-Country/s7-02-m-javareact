import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/App.css";

//Partials
import AppNavbar from "./components/AppNavbar";
import Footer from "./components/Footer";

//Components
import Login from "./views/Auth/Login";
import Register from "./views/Auth/Register";
import Landing from "./views/Home/Landing";
import AccountCreated from "./views/Auth/AccountCreated";
import WelcomeToApp from "./views/Auth/WelcomeToApp";
import Home from "./views/Home/Landing";
import TermsAndConditions from "./components/TermsAndConditions";

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" Component={<Home />} />
          <Route
            path="/register/termsAndConditions"
            element={<TermsAndConditions />}
          ></Route>
          <Route path="/register/accountCreated" element={<AccountCreated />} />
          <Route path="/register/welcomeToApp" element={<WelcomeToApp />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
