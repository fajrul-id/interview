import logo from "../img/logo.png";
import bulan from "../img/bulan.png";
import shape from "../img/Shape.png";
const Header = () => {
  return (
    <div className="h-14 text-[#5899FF] flex justify-between p-4">
      <div className="flex items-center">
        <img src={logo} alt="" />
        <h1>Digicoins</h1>
      </div>
      <div className="flex gap-4 items-center flex-row text-white">
        <h1>EN/USD</h1>
        <img src={shape} alt="" className="w-[10px] h-[10px]" />
        <h1 className="text-2xl">|</h1>
        <img src={bulan} alt="" />
      </div>
    </div>
  );
};

export default Header;
