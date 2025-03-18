import { Link } from "react-router-dom";

const HeroReady = () => {
 return (
    <>
      <div className="text-xl text-center sm:text-left tracking-tight sm:text-1xl sm:tracking-normal ml-1 overflow-hidden text-overflow-ellipsis whitespace-nowrap">
        <span>
          Optimisez vos ventes!
          <br />Le <b>DRIP</b> à la <b>PORTEE DE TOUS</b>
          <br /><b>ShopTonDrip</b> est une Marketplace<br/> dédiée à la vente de vêtements <br/> et
          accessoirs de mode (VINTAGE et autres...).
        </span>
      </div>
      <div className=" sm:ml-[30%]  justify-center items-center sm:justify-start">
      <Link
        to="/publish"
        className="w-full flex justify-center items-center sm:justify-start"
      >
        <button className="bg-black  text-slate-50 w-[85%] sm:w-44 h-10 mt-6 text-xl sm:text-sm">
          Commencer à vendre
        </button>
      </Link>
      </div>
    </>
 );
};

export default HeroReady;
