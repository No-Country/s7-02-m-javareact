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

// import RedirectHome from "./components/RedirectHome";
import RedirectHome from "./components/RedirectHome";
import TermsAndConditions from "./components/TermsAndConditions";
import WhereToDrive from "./views/WhereToDrive/WhereToDrive";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppNavbar />
        <div>
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
<<<<<<< HEAD
              <Route path="/termsAndConditions" element={<TermsAndConditions />}/>
              <Route path="/driver" element={<WhereToDrive/>}/>
=======
              <Route
                path="/termsAndConditions"
                element={<TermsAndConditions />}
              />
>>>>>>> a6b151fddbde02ef2615716933f5b1f15e3bc96c
            </Routes>
          </div>
        </div>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
