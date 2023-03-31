import RegisterForm from "./RegisterForm";

import useMobile from "./../../../hooks/useMobile";
import { registerViewPic } from "../../../assets/images";

const Register = () => {
  return (
    <div className="w-full min-h-fit  flex max-md:flex-col justify-around items-center bg-white border-solid border-2  px-[2rem] pt-[5rem]">
      <div className="w-3/6 max-md:w-full relative">
        <img
          src={registerViewPic}
          alt="register-view-pic"
          style={{ width: "100%", zIndex: "-10", borderRadius: "20px" }}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: "40px",
            color: "#fff",
            padding: "10px",
            borderRadius: "5px",
            textAlign: "center",
            width: "90%",
            wordBreak: "keep-all",
          }}
        >
          <h1>
            Mayor<strong> seguridad, comodidad y confianza</strong> en cada
            viaje.
          </h1>
        </div>
      </div>
      <div className="col-span-12 md:col-span-6 flex items-center w-3/6 max-md:w-screen p-7 justify-center">
        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;
