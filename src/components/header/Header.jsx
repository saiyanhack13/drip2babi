import Navbar from "./NavBar";


const Header = ({token, handleToken, setSearch, user }) => {

  return (
    <header className="fixed  w-full h-13 top-0 px-4 md:px-8 z-20 bg-[#fff]" >
        <Navbar side="top"
          token={token}
          user={user} 
          handleToken={handleToken}
          setSearch={setSearch}
        />     
    </header>
    
  )
}

export default Header;