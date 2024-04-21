import { Link } from "react-router-dom";

const HeroReady = () => {
 return (
    <>
      <div className="text-xl text-center sm:text-left tracking-tight sm:text-2xl sm:tracking-normal ml-2 overflow-hidden text-overflow-ellipsis whitespace-nowrap">
        <span>
          Prêts à optimisez vos ventes?
          <br /> ShopTonDrip est entièrement <br/> dédié à la vente de vêtements <br/> et
          accessoirs de mode.
        </span>
      </div>
      <Link
        to="/publish"
        className="w-full flex justify-center sm:justify-start"
      >
        <button className="bg-[#77B5FE] text-slate-50 w-[85%] sm:w-44 h-10 mt-6 text-xl sm:text-sm">
          Commencer à vendre
        </button>
      </Link>
    </>
 );
};

export default HeroReady;
