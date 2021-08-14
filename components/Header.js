import React from "react";
import Image from "next/image";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UserIcon,
} from "@heroicons/react/solid";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md  md:px-10 p-5 md:shadow-sm ">
      {/* logo */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto ">
        <Image
          src="https://cdn.worldvectorlogo.com/logos/airbnb.svg"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      {/* search */}
      <div className="flex items-center md:border-2 rounded-full py-2 ">
        <input
          type="text"
          placeholder="start your search"
          className="flex-grow pl-5 text-gray-400 bg-transparent outline-none"
        />
        <SearchIcon className="hidden md:inline-flex bg-red-400 h-8 rounded-full p-2 md:mx-2  cursor-pointer " />
      </div>
      {/* right side */}
      <div className="flex items-center justify-end space-x-4 ">
        <p className="hidden md:inline-block cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6" />
        <div className="flex border-2 rounded-full p-2 shadow-sm space-x-2">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
    </header>
  );
};

export default Header;
