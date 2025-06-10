import NavLink from "./navlinks";
import { AirVent } from "lucide-react";

export default function Header() {
  const isLoggedIn = false;
  return (
    <nav className="container flex items-center justify-between py-4 lg:px-8 px-2 mx-auto">
      <div className="flex lg:flex-1">
        <NavLink href="/" className="flex items-center gap-1 lg:gap-2 shrink-0">
          <AirVent className=" h-4 lg:w-6 lg:h-6 text-gray-900 hover:rotate-12 transform transition duration-200 ease-in-out" />
          <span className="font-extrabold lg:text-lg text-gray-900">
            GenZilla
          </span>
        </NavLink>
      </div>
      <div className="flex lg:justify-center gap-4 lg:gap-12 lg:items-center">
        {!isLoggedIn ? (
          <NavLink href="/#pricing">Pricing</NavLink>
        ) : (
          <NavLink href="/dashboard">Your GenZilla</NavLink>
        )}
      </div>
      <div className="flex lg:justify-end lg:flex-1">
        
          <div>
            <NavLink href="/sign-in">SignIn</NavLink>
          </div>
      </div>
    </nav>
  );
}
