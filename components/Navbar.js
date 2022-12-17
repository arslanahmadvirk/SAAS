/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useEffect, useState } from "react";
import Router, { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";
import { toast } from "react-toastify";
const Navbar = () => {
  const dispatch = useDispatch();
  const [isLoggedin, setisLoggedin] = useState();
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedin) {
      const loginData = localStorage.getItem("isLoggedIn");
      setisLoggedin(loginData);
    }
  });

  const handleLogOut = (e) => {
    e.preventDefault();
    setisLoggedin(false);
    localStorage.removeItem("isLoggedIn");
    router.push("/login");
    toast.success("Logout Successfull", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  return (
    <nav className="px-2 sm:px-4 py-2.5 bg-gray-900 fixed w-full z-20 top-0 left-0  border-gray-600">
      <div className="px-0 md:px-12 flex flex-wrap items-center justify-between  mx-auto">
        <Link href="/" passHref>
          <a href="#" className="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-6 mr-3 sm:h-9"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
              SAAS
            </span>
          </a>
        </Link>
        <div class="flex md:order-2 ">
          {isLoggedin ? (
            <>
              <button
                type="button"
                className="text-white hidden md:flex focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-8 py-2.5 text-center mr-3 md:mr-2 bg-primary-800 hover:bg-primary-900 focus:ring-transparent"
                onClick={(e) => handleLogOut(e)}
              >
                LogOut
              </button>

              <Link href="/user/dashboard" passHref>
                <button
                  type="button"
                  className="text-white  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 bg-primary-800 hover:bg-primary-900 focus:ring-transparent"
                >
                  Dashboard
                </button>
              </Link>
            </>
          ) : (
            <>
              <Link href="/login">
                <button
                  type="button"
                  className="text-white hidden md:flex focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-8 py-2.5 text-center mr-3 md:mr-2 bg-primary-800 hover:bg-primary-900 focus:ring-transparent"
                >
                  Login
                </button>
              </Link>
              <Link href="/register" passHref>
                <button
                  type="button"
                  className="text-white  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 bg-primary-800 hover:bg-primary-900 focus:ring-transparent"
                >
                  Get started
                </button>
              </Link>
            </>
          )}

          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400  focus:ring-transparent"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-default"
        >
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 bg-gray-900 md:bg-gray-900 md:ml-[0px]  lg:ml-[100px] xl:ml-[600px]">
            <Link href="/" passHref>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 rounded hover:bg-primary-800 text-lg md:hover:bg-transparent md:border-0 md:hover:text-green-500 md:p-0 text-white md:dark:hover:bg-transparent"
                >
                  Home
                </a>
              </li>
            </Link>

            <li>
              <a
                href="/#features"
                className="block py-2 pl-3 pr-4 rounded hover:bg-primary-800 text-lg md:hover:bg-transparent md:border-0 md:hover:text-green-500 md:p-0 text-white md:dark:hover:bg-transparent"
              >
                Features
              </a>
            </li>

            <li>
              <a
                href="/#pricing"
                className="block py-2 pl-3 pr-4 rounded hover:bg-primary-800 text-lg md:hover:bg-transparent md:border-0 md:hover:text-green-500 md:p-0 text-white md:dark:hover:bg-transparent"
              >
                Pricing
              </a>
            </li>

            <li>
              <a
                href="/#contact"
                className="block py-2 pl-3 pr-4 rounded hover:bg-primary-800 text-lg md:hover:bg-transparent md:border-0 md:hover:text-green-500 md:p-0 text-white md:dark:hover:bg-transparent"
              >
                Contact
              </a>
            </li>
            {isLoggedin ? (
              <li className="md:hidden">
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 rounded hover:bg-primary-800 text-lg md:hover:bg-transparent md:border-0 md:hover:text-green-500 md:p-0 text-white md:dark:hover:bg-transparent"
                  onClick={(e) => handleLogOut(e)}
                >
                  Logout
                </a>
              </li>
            ) : (
              <Link href="/login" passHref>
                <li className="md:hidden">
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 rounded hover:bg-primary-800 text-lg md:hover:bg-transparent md:border-0 md:hover:text-green-500 md:p-0 text-white md:dark:hover:bg-transparent"
                  >
                    Login
                  </a>
                </li>
              </Link>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
