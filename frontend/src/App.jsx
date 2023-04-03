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
      <div className="">
        <div className="">
          <BrowserRouter>
            <AnimatePresence>
              <Routes>
                <Route
                  path="/"
                  exact
                  element={
                    <motion.div
                      className="page"
                      initial="out"
                      animate="in"
                      exit="out"
                      variants={pageTransition}
                    >
                      <Landing />
                    </motion.div>
                  }
                ></Route>
                <Route
                  path="/login"
                  exact
                  element={
                    <motion.div
                      className="page"
                      initial="out"
                      animate="in"
                      exit="out"
                      variants={pageTransition}
                    >
                      <Login />
                    </motion.div>
                  }
                ></Route>    
                <Route
                  path="/register"
                  exact
                  element={
                    <motion.div
                      className="page"
                      initial="out"
                      animate="in"
                      exit="out"
                      variants={pageTransition}
                    >
                      <Register />
                    </motion.div>
                  }
                ></Route>

                <Route
                  path="/register/accountCreated"
                  exact
                  element={
                    <motion.div
                      className="page"
                      initial="out"
                      animate="in"
                      exit="out"
                      variants={pageTransition}
                    >
                      <AccountCreated/>
                    </motion.div>
                  }
                ></Route>

                <Route
                  path="/register/welcomeToApp"
                  exact
                  element={
                    <motion.div
                      className="page"
                      initial="out"
                      animate="in"
                      exit="out"
                      variants={pageTransition}
                    >
                      <WelcomeToApp/>
                    </motion.div>
                  }
                ></Route>

              </Routes>
            </AnimatePresence>
          </BrowserRouter>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
