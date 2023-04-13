import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function RedirectHome({ children }) {
  // const user = "pepe@test.com";
  const user = null;
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/home");
    } else {
      navigate("/");
    }
  }, [user, navigate]);

  return <>{children}</>;
}
