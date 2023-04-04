import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

//Components
import Login from "./views/Auth/Login/Login";
import Register from "./views/Auth/Register/Register";
import Landing from "./views/Home/Landing";
import AppNavbar from "./components/AppNavbar";
import Footer from "./components/Footer";

//Framer motion
import { AnimatePresence, motion } from "framer-motion";

//Components
import AccountCreated from "./views/Auth/Register/AccountCreated";
import WelcomeToApp from "./views/Auth/Register/WelcomeToApp";

const pageTransition = {
  in: {
    opacity: 1,
  },

  out: {
    opacity: 0,
  },
};



function App() {
  return (
    <div className="App">
      <AppNavbar />
  
              <Routes>
                <Route
                  path="/"
                  exact
                  element={
         
                      <Landing />
                
                  }
                ></Route>
                <Route
                  path="/login"
                  element={
           
                      <Login />
         
                  }
                ></Route>    
                <Route
                  path="/register"
                  element={
         
                      <Register />
            
                  }
                ></Route>

                <Route
                  path="/register/accountCreated"
                  element={
              
                      <AccountCreated/>
                
                  }
                ></Route>

                <Route
                  path="/register/welcomeToApp"
                  element={
            
                      <WelcomeToApp/>
                
                  }
                ></Route>

              </Routes>
      
 
      <Footer />
    </div>
  );
}

export default App;
