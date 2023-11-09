import React from "react";
import { logoIcon, notIcon, searchIson } from "../images";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className=" dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
          <div className="flex">
            <Link className="flex items-center">
              <img
                src={logoIcon}
                className="h-8 mr-3 "
                alt="Books Logo"
                width={"150px"}
                height={"36px"}
              />
            </Link>

            <form className="w-auto ">
              <div className="relative py-3 pl-8">
                <div className="absolute inset-y-0 left-0  flex items-center pointer-events-none ">
                  <img src={searchIson} alt="" />
                </div>
                <input
                  type="text"
                  id="default-search"
                  className="bg-inherit  w-[260px] text-base outline-none  focus:bg-white py-4 focus:px-14"
                  placeholder="Search for any training you want "
                  required
                />
              </div>
            </form>
          </div>

          <div className="flex items-center md:order-2">
            <button className="mr-[24.6px]">
              <img src={notIcon} alt="" />
            </button>
            <button
              type="button"
              className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              id="user-menu-button"
              aria-expanded="false"
              data-dropdown-toggle="user-dropdown"
              data-dropdown-placement="bottom"
            >
              <img
                className="w-8 h-8 rounded-full"
                src="/docs/images/people/profile-picture-3.jpg"
                alt="user photo"
              />
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-user"
          ></div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
