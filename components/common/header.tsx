"use client";
import NavLink from "./navlinks";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, Brain } from "lucide-react";
import { useUser } from "@clerk/nextjs";

export default function Header() {
  const { isSignedIn } = useUser();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="flex justify-between text-black items-center px-6 py-4 md:px-8 md:py-2 sticky top-0 z-20 bg-white brightness-150">
      <div className="flex lg:flex-1">
        <NavLink href="/" className="flex items-center gap-1 lg:gap-2 shrink-0">
          <Brain className=" h-6 lg:w-6 lg:h-6 hover:rotate-12 transform transition duration-200 ease-in-out z-20" />
          <span className="font-extrabold text-lg lg:text-lg z-20 brightness-150">
            GenZilla
          </span>
        </NavLink>
      </div>

      <nav className="hidden md:flex gap-6 font-medium md:items-center">
        <NavLink href="/dashboard" className="">
          Dashboard
        </NavLink>
        <NavLink href="#" className="">
          Pricing
        </NavLink>
        {!isSignedIn && (
        <div className="bg-lime-600 text-black px-4 py-1.5 rounded-full font-semibold inline-block mx-auto w-24 text-center">
          
            <div>
              <Link href="/sign-in">SignIn</Link>
            </div>
          
        </div>
        )}
      </nav>

      <button
        className="md:hidden"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-black bg-white rounded-xs" />
        ) : (
          <Menu className="w-6 h-6 text-black bg-white rounded-xs" />
        )}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#ECDFCC] text-center py-4 flex flex-col gap-4 z-30">
          <NavLink href="/dashboard" className="text-black hover:text-lime-600">Dashboard</NavLink>
          <NavLink href="#" className="text-black hover:text-lime-600">Pricing</NavLink>
          {!isSignedIn && (
          <div className="bg-black/90 text-white px-4 py-1.5 rounded-full font-semibold inline-block text-center mx-auto w-24">
            
              <div>
                <Link href="/sign-in">SignIn</Link>
              </div>
            
          </div>
          )}
        </div>
      )}
    </header>
  );
}
