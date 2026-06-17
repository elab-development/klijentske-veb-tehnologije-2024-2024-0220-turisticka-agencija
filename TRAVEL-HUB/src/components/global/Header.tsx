import { SlPlane } from "react-icons/sl";
import { FiHome } from "react-icons/fi";
import { IoPricetagOutline } from "react-icons/io5";
import { LuUser } from "react-icons/lu";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <header className="w-full h-17 flex flex-row items-center justify-between px-5 md:px-20 py-2.5 shadow bg-(--white) fixed top-0 z-50">
      <div className="flex flex-row items-center gap-4">
        <span className="p-3 rounded-full text-(--white) text-lg sm:text-2xl bg-(--indigo)">
          <SlPlane />
        </span>
        <p className="text-(--heading) text-lg sm:text-2xl font-semibold">
          Travel Hub
        </p>
      </div>
      <ul className="flex flex-row items-center gap-3">
        <Link
          to="/home"
          className={`flex flex-row items-center gap-2 py-2 px-3 rounded-lg text-(--heading) cursor-pointer hover:text-(--indigo) text-md ${location.pathname === "/home" ? "bg-(--bg-login) text-(--indigo)" : ""}`}
        >
          <FiHome />
          <span className="max-md:hidden">Home</span>
        </Link>
        <Link
          to="/offers"
          className={`flex flex-row items-center gap-2 py-2 px-3 rounded-lg text-(--heading) cursor-pointer hover:text-(--indigo) text-md ${location.pathname === "/offers" ? "bg-(--bg-login) text-(--indigo)" : ""}`}
        >
          <IoPricetagOutline />
          <span className="max-md:hidden">Offers</span>
        </Link>
        <Link
          to="/profile"
          className={`flex flex-row items-center gap-2 py-2 px-3 rounded-lg text-(--heading) cursor-pointer hover:text-(--indigo) text-md ${location.pathname === "/profile" ? "bg-(--bg-login) text-(--indigo)" : ""}`}
        >
          <LuUser />
          <span className="max-md:hidden">Profile</span>
        </Link>
      </ul>
    </header>
  );
};

export default Header;
