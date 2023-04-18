import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function RedirectHome({ children }) {
  // const {currentUser} = useSelector((state)=>state.user)

  const user = "pepe@test.com";
  // const user = null;
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/home");
    } else {
      navigate("/");
    }
  }, [currentUser, navigate]);

  return <>{children}</>;
}
