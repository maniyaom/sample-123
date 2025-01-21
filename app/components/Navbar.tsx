import React from "react";
import Image from "next/image";
import { SignInButton, UserButton, useAuth } from "@clerk/nextjs";

const Navbar = () => {
  const { isSignedIn } = useAuth();
  return (
    <nav className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Image src="/logo-192x192.png" width={40} height={40} alt="Logo" />
            <span className="ml-2 text-xl font-bold text-gray-900">
              SecureCheck API
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900">
              Features
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900">
              Pricing
            </a>
            <a href="#docs" className="text-gray-600 hover:text-gray-900">
              Documentation
            </a>
            {!isSignedIn && <SignInButton mode="modal">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                Get Started
              </button>
            </SignInButton>}
            {isSignedIn && <UserButton />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
