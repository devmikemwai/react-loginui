import { useState } from "react";
import bg from "../assets/mybg.gif";
import "../index.css"; 

export default function Login() {
  const [isLogIn, setIsLogIn] = useState(true);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      {/* Outer container with background */}
      <div
        className="relative w-3/4 h-5/6 bg-slate-400 rounded-lg shadow-lg overflow-hidden bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${bg})` }}
      >
        {/* 2-column grid used only for layout reference */}
        <div className="grid grid-cols-2 w-full h-full">
          <div></div>
          <div></div>
        </div>

        {/* SLIDING FORM CONTAINER */}
        <div
          className={`absolute top-0 w-1/2 h-full bg-white shadow-lg transition-all duration-500 ease-in-out ${
    isLogIn ? "left-0 rounded-l-lg" : "left-1/2 rounded-r-lg"
  } flex flex-col items-center justify-center px-8`}
        >
          <h1 className="text-4xl font-bold mb-4">{isLogIn ? "Log in" : "Sign Up"}</h1>
          <form className="w-5/6">
            <label className="block mb-2 text-sm font-bold text-gray-700">Email</label>
            <input type="email" className="w-full focus:border-primary focus:outline-none p-2 rounded-md" />
            <label className="block mb-2 text-sm font-bold text-gray-700">Password</label>
            <input type="password" className="w-full focus:border-primary focus:outline-none p-2 rounded-md" />
            {!isLogIn && (
              <>
                <label className="block mb-2 text-sm font-bold text-gray-700">Confirm Password</label>
                <input type="password" className="w-full focus:border-primary  focus:outline-none p-2 rounded-md" />
              </>
            )}
            <input
              type="submit"
              value={isLogIn ? "Log in" : "Create Account"}
              className="bg-primary w-full text-white px-4 py-2 rounded mt-4 cursor-pointer hover:bg-secondary transition duration-200"
            />
          </form>
          <p className="mt-4 text-sm ">
            {isLogIn ? (
              <>
                Don't have an account?{" "}
                <button onClick={() => setIsLogIn(false)} className="text-secondary underline">
                  Sign Up
                </button>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <button onClick={() => setIsLogIn(true)} className="text-secondary underline">
                  Log In
                </button>
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
