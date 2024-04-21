import { Link } from "react-router-dom";
import { useState } from "react";
import { LayoutDashboard, LogOut, Search, Settings } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";


const Navbar = ({ token, handleToken, setSearch, user }) => {
  const avatar = user?.account?.avatar?.secure_url;
  const [showSearch, setShowSearch] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Fonction pour fermer le menu
  const closeMenu = () => {
    setMenuOpen(false);
 };
   

  return (
    <nav className="container  flex justify-between pb-3 items-center  mb-[-0.5rem] gap-4 py-[.3rem] w-full px-1 sm:pr-[20rem]">
      <div className="ml-[-13px]">
        <Link to="/">
          <img src="/images/logo1.png" alt="vinted logo" />
        </Link>
      </div>
      

      <div className="hidden md:flex searchbar relative max-w-[250px] grow">
      <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                <Search className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400" />
            </div>
        <input
          type="text"
          placeholder="Recherche des products"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>
      

      {/* Icône de recherche conditionnelle pour les petits écrans */}
      <div className="md:hidden">
      <div className="md:hidden searchbar relative max-w-[113px]">
          <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-2 pointer-events-none">
                <Search className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </div>
          <input
            type="text"
            placeholder="Recherche des products"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </div>
      </div>

      {/* Barre de recherche conditionnelle pour les petits écrans */}
      <div className="flex">
      {showSearch && (
        <div className="md:hidden searchbar relative max-w-[113px] ml-1">
          <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-2 pointer-events-none">
                <Search className="w-3 h-3 text-gray-500 dark:text-gray-400" />
            </div>
          <input
            type="text"
            placeholder="Recherche des products"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </div>
      )}

      <div className="flex">
      <Link to="/publish">
        <button className="  bg-[#77B5FE] text-slate-50 border border-[#77B5FE] mr-[0.1rem]">
          VENDRE
        </button>
      </Link>

      <div className="whitespace-nowrap ml-flex ">
        {token ? (
          <div className="flex items-center bg-white dark:bg-slate-800 text-slate-50 justify-between rounded-full mr-1">
           
            <DropdownMenu open={menuOpen} onOpenChange={setMenuOpen}>
          <DropdownMenuTrigger>
            
              <img
                src={`${avatar ? avatar : "/icons/account.svg"}`}
                alt="user icon"
                width={200}
                height={200}
                className="rounded-full w-8 h-8"
              />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="dropdown-menu-content bg-white border border-black-200 mr-2 rounded-xl dark:bg-slate-800 text-black py-2 px-2 pr-2 " style={{ zIndex: 20 }}>
            <DropdownMenuLabel className="items-center"><span className="text-black">{user?.account?.username}</span></DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onSelect={closeMenu}>
              <Link to="#" className="flex items-center space-x-2 text-[#77B5FE]">
                <LayoutDashboard className="mr-2 h-4 w-4" />
                <span>Mes Produits</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem onSelect={closeMenu}>
              <Link to="/user" className="flex items-center space-x-2 text-[#77B5FE]">
                <Settings className="mr-2 h-4 w-4" />
                <span>Edit Profile</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <button className="flex bt-deco items-center space-x-2 text-[#77B5FE]" onClick={() => {
                handleToken(null);
              }}>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Se deconnecter</span>
              </button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
          </div>
        ) : (
          <>
            <Link to="/signup">
              <button
                className="ml-1 text-[#77B5FE] border border-[#77B5FE] w-[100%] mr-[-5px]"
                
              >{`S'inscire`}</button>
            </Link>
          </>
        )}
      </div>
      </div>

      </div>
    </nav>
  );
};

export default Navbar;
