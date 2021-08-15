import React, { useState } from "react";
import Image from "next/image";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/dist/client/router";

const Header = ({ placeholder }) => {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState("1");

  const router = useRouter();

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const resetInput = () => {
    setSearchInput("");
  };

  const search = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuests,
      },
    });
  };

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md  md:px-10 p-5 md:shadow-sm ">
      {/* logo */}
      <div
        className="relative flex items-center h-10 cursor-pointer my-auto "
        onClick={() => router.push("/")}
      >
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
          value={searchInput}
          type="text"
          placeholder={placeholder || "start your search"}
          onChange={(e) => setSearchInput(e.target.value)}
          className="flex-grow pl-5 placeholder-text-gray-400 bg-transparent outline-none overflow-hidden"
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
      {/* search */}
      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
          />
          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl flex-grow font-semibold">
              Number of Guests
            </h2>
            <UsersIcon className="h-5 " />
            <input
              type="number"
              className="w-12 pl-2 outline-none text-red-400 text-semibold"
              value={noOfGuests}
              onChange={(e) => setNoOfGuests(e.target.value)}
              min={1}
            />
          </div>
          <div className="flex">
            <button className="flex-grow text-red-400" onClick={search}>
              Search
            </button>
            <button className="flex-grow text-gray-400" onClick={resetInput}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
