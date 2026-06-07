import { SlPlane } from "react-icons/sl";
import { FiHome } from "react-icons/fi";
import { IoPricetagOutline } from "react-icons/io5";
import { LuUser } from "react-icons/lu";
import { Link } from "react-router-dom";

const Header = () => {
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
          className="flex flex-row items-center gap-2 p-2 rounded-sm text-(--heading) cursor-pointer hover:text-(--indigo) text-md"
        >
          <FiHome />
          <span className="max-md:hidden">Home</span>
        </Link>
        <Link
          to="/offers"
          className="flex flex-row items-center gap-2 p-2 rounded-sm text-(--heading) cursor-pointer hover:text-(--indigo) text-md"
        >
          <IoPricetagOutline />
          <span className="max-md:hidden">Offers</span>
        </Link>
        <Link
          to="/profile"
          className="flex flex-row items-center gap-2 p-2 rounded-sm text-(--heading) cursor-pointer hover:text-(--indigo) text-md"
        >
          <LuUser />
          <span className="max-md:hidden">Profile</span>
        </Link>
      </ul>
    </header>
  );
};

export default Header;
