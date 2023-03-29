import React from "react";
import { FaUnlockAlt } from "react-icons/fa";

const Recoverpassword = () => {
  return (
    <div className="bg-black h-96">
      <form action="">
        <div className="flex flex-col p-8 gap-8 justify-center align-center">
          <FaUnlockAlt className="font-semibold text-6xl self-center " />
          <h3 className="font-semibold text-3xl text-center ">
            Forgot Password?
          </h3>

          <p className="font-semibold text-sm text-center ">
            You can reset your password here.
          </p>

          <input
            className="p-2 rounded-xl px-4 text-lg"
            type="email"
            id="email"
            placeholder="email address"
          />
          <button className="bg-white text-black  py-2 text-xl rounded-xl cursor-pointer w-60 self-center">
            Recover password
          </button>
        </div>
      </form>
    </div>
  );
};

export default Recoverpassword;
