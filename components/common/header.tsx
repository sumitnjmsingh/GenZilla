"use client";
import NavLink from "./navlinks";
import Link from "next/link";
import { AirVent } from "lucide-react";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const isLoggedIn = false;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="flex justify-between    text-black items-center px-6 py-2 md:px-8 md:py-2 sticky top-0 z-20">
      <div className="flex lg:flex-1">
        <NavLink href="/" className="flex items-center gap-1 lg:gap-2 shrink-0">
          <AirVent className=" h-4 lg:w-6 lg:h-6 text-black hover:rotate-12 transform transition duration-200 ease-in-out z-20" />
          <span className="font-extrabold lg:text-lg text-black z-20">GenZilla</span>
        </NavLink>
      </div>

      <nav className="hidden md:flex gap-6 font-medium md:items-center">
        <NavLink href="#" className="text-black">
          Home
        </NavLink>
        <NavLink href="#" className="text-black ">
          Pricing
        </NavLink>
        <div className="bg-black/90 text-white px-4 py-1.5 rounded-full font-semibold inline-block mx-auto w-24 text-center">
          {isLoggedIn ? (
            <div className="flex gap-2 items-center">
              <div>User</div>
            </div>
          ) : (
            <div>
              <Link href="/sign-in">SignIn</Link>
            </div>
          )}
        </div>
      </nav>

      <button
        className="md:hidden"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-black bg-white " />
        ) : (
          <Menu className="w-6 h-6 text-black bg-white" />
        )}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#24243e] text-center py-4 flex flex-col gap-4 z-30">
          <NavLink href="#">Home</NavLink>
          <NavLink href="#">Pricing</NavLink>
          <div className="bg-black/90 text-white px-4 py-1.5 rounded-full font-semibold inline-block text-center mx-auto w-24">
            {isLoggedIn ? (
              <div className="flex gap-2 items-center">
                <div>User</div>
              </div>
            ) : (
              <div>
                <Link href="/sign-in">SignIn</Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
