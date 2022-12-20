import React from "react";
import Header from "../components/Header";
import roket from "../img/roket.png";
import logo from "../img/logo.png";
import Shape from "../img/Shape.png";
import bulan from "../img/bulan.png";
const Signup = () => {
  return (
    <div>
      <div className="flex">
        <div id="left" className="w-2/5 bg-[#1E1E1E]">
          <div>
            <div className="flex items-center p-4">
              <img src={logo} alt="" />
              <h1>Digicoins</h1>
            </div>
          </div>
          <div>
            <img src={roket} alt="roket" />
          </div>
        </div>
        <div id="right" className=" w-3/5">
          <div className="flex gap-4 items-center justify-end flex-row text-white p-4">
            <h1>EN/USD</h1>
            <img src={Shape} alt="" className="w-[10px] h-[10px]" />
            <h1 className="text-2xl">|</h1>
            <img src={bulan} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
