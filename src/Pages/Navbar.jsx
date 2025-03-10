
import MobMenu from "../components/common/MobMenu";
import DesktopMenu from "../components/common/DesktopMenu";
import { logo } from "../utils/ImgUtils";
import { Menus } from "../utils/MenuUtils";

export default function Navbar() {
  return (
    <header className="z-50 fixed top-0 left-0 py-2 text-[15px]  w-full flex flex-col gap-2 bg-white  shadow-lg">
  
    
      <div className="container">
        <nav className=" px-3.5 flex items-center justify-between w-full max-w-7xl mx-auto ">
          {/* Logo */}
          <div className="flex items-center gap-x-3 relative">
            <img
              src={logo}
              alt="MCS Technology Logo"
              className="p-1 w-[9rem] h-12 shadow rounded-xl transition-all duration-200"
            />
          </div>

          {/* Desktop Menu */}
          <ul className="gap-x-1 lg:flex hidden ">
            {Menus.map((menu) => (
              <DesktopMenu menu={menu} key={menu.name} />
            ))}
          </ul>

         
          {/* Mobile Menu */}
          <div className="lg:hidden z-50">
            <MobMenu Menus={Menus} />
          </div>
        </nav>
      </div>
    </header>
  );
}
