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
import TermsAndConditions from "./components/TermsAndConditions";
import ProfileView from "./views/Profile/ProfileView";
import MyProfileView from "./views/Profile/MyProfileView";

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <div className="flex justify-center">
        <div className="container">
          <BrowserRouter>
            <Routes>
              <Route path="/" exact element={<Landing />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/home" element={<Home />} />
              <Route path="/register/welcomeToApp" element={<WelcomeToApp />} />
              <Route path="/termsAndConditions" element={<TermsAndConditions />} />
              <Route path="/profile" element={<ProfileView />} />
              <Route path="/myprofile" element={<MyProfileView />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
