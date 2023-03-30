import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

//Components
import Login from "./views/Auth/Login/Login";
import Register from "./views/Auth/Register/Register";
import Home from "./views/Home/Home";
import AppNavbar from "./components/AppNavbar";


//Framer motion
import { AnimatePresence, motion } from "framer-motion";

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
            <Home />
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
            <Login/>
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
        </Routes>
      </AnimatePresence>
      </BrowserRouter>
    </div>
  );
}

export default App;
