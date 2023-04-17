import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function RedirectHome({ children }) {

  const {currentUser} = useSelector((state)=>state.user)

  console.log(currentUser)

  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      navigate("/home");
    } else {
      navigate("/");
    }
  }, [currentUser, navigate]);

  return <>{children}</>;
}
