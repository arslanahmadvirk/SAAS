/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useState } from "react";
import UserSidebar from "./UserSidebar";
import Link from "next/link";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
export default function UserHeader() {
  const [menu, showMenu] = useState(false);
  const [user, showUser] = useState(false);
  const [notifications, showNotifications] = useState(false);
  const router = useRouter();

  const handleLogOut = (e) => {
    e.preventDefault();
    localStorage.removeItem("isLoggedIn");
    router.push("/login");
    toast.success("Logout Successfull", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  return (
    <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-6  dark:bg-gray-800 pt-10 relative shadow-md">
        <div className="flex flex-wrap justify-between items-center ">
          <div className="flex justify-start items-center">
            <button className="hidden p-2 mr-3 text-gray-600 rounded cursor-pointer lg:inline hover:text-gray-900 hover:bg-gray-100  dark:hover:text-white dark:hover:bg-gray-700">
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            <button
              className="p-2 mr-2 text-gray-600 rounded-lg cursor-pointer lg:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              onClick={() => showMenu(!menu)}
            >
              <svg
                aria-hidden="true"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <svg
                aria-hidden="true"
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Toggle sidebar</span>
            </button>
            <a href="#" className="flex mr-4">
              <img
                src="https://flowbite.s3.amazonaws.com/logo.svg"
                className="mr-3 h-8"
                alt="FlowBite Logo"
              />
            </a>
            <form action="#" method="GET" className="hidden lg:block lg:pl-2">
              <label for="topbar-search" className="sr-only">
                Search
              </label>
              <div className="relative mt-1 lg:w-96">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  type="text"
                  name="email"
                  id="topbar-search"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Search"
                />
              </div>
            </form>
          </div>
          <div className="flex items-center lg:order-2 relative">
            <button
              type="button"
              className="hidden sm:inline-flex items-center justify-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-xs px-3 py-1.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
            >
              <svg
                aria-hidden="true"
                className="mr-1 -ml-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>{" "}
              New Widget
            </button>

            <button
              type="button"
              data-dropdown-toggle="notification-dropdown"
              className="p-2 mr-1 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              onClick={() => showNotifications(!notifications)}
            >
              <span className="sr-only">View notifications</span>

              <svg
                aria-hidden="true"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path>
              </svg>
            </button>
            {notifications ? (
              <div className=" sidebar__mobile absolute overflow-hidden z-50 my-4 max-w-sm text-base list-none bg-white rounded divide-y divide-gray-100 shadow-lg dark:divide-gray-600 dark:bg-gray-700">
                <div className="block py-2 px-4 text-base font-medium text-center text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  Notifications
                </div>
                <div>
                  <a
                    href="#"
                    className="flex py-3 px-4 border-b hover:bg-gray-100 dark:hover:bg-gray-600 dark:border-gray-600"
                  >
                    <div className="flex-shrink-0">
                      <img
                        className="w-11 h-11 rounded-full"
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
                        alt="Roberta Casas image"
                      />
                      <div className="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 bg-green-400 rounded-full border border-white dark:border-gray-700">
                        <svg
                          aria-hidden="true"
                          className="w-3 h-3 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="pl-3 w-full">
                      <div className="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400">
                        <span className="font-semibold text-gray-900 dark:text-white">
                          Leslie Livingston
                        </span>{" "}
                        mentioned you in a comment:{" "}
                        <span className="font-medium text-primary-700 dark:text-primary-500">
                          @bonnie.green
                        </span>{" "}
                        what do you say?
                      </div>
                      <div className="text-xs font-medium text-primary-700 dark:text-primary-400">
                        1 hour ago
                      </div>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="flex py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-600"
                  >
                    <div className="flex-shrink-0">
                      <img
                        className="w-11 h-11 rounded-full"
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/robert-brown.png"
                        alt="Robert image"
                      />
                      <div className="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 bg-purple-500 rounded-full border border-white dark:border-gray-700">
                        <svg
                          aria-hidden="true"
                          className="w-3 h-3 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="pl-3 w-full">
                      <div className="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400">
                        <span className="font-semibold text-gray-900 dark:text-white">
                          Robert Brown
                        </span>{" "}
                        posted a new video: Glassmorphism - learn how to
                        implement the new design trend.
                      </div>
                      <div className="text-xs font-medium text-primary-700 dark:text-primary-400">
                        3 hours ago
                      </div>
                    </div>
                  </a>
                </div>
                <a
                  href="#"
                  className="block py-2 text-base font-normal text-center text-gray-900 bg-gray-50 hover:bg-gray-100 dark:bg-gray-700 dark:text-white dark:hover:underline"
                ></a>
              </div>
            ) : null}

            {menu ? (
              <div
                className="sidebar__mobile overflow-hidden z-10 max-w-sm text-base list-none bg-white rounded divide-y divide-gray-100 shadow-lg dark:bg-gray-700 dark:divide-gray-600"
                id="apps-dropdown"
              >
                <div className="grid grid-cols-2 gap-2 p-2">
                  <Link href="/user/dashboard">
                    <a
                      href="#"
                      className="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 group"
                    >
                      <svg
                        aria-hidden="true"
                        className="mx-auto mb-1 w-7 h-7 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <div className="text-sm text-gray-900 dark:text-white">
                        Dashboard
                      </div>
                    </a>
                  </Link>
                  <Link href="/user/subscriptions" passHref>
                    <a
                      href="#"
                      className="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 group"
                    >
                      <svg
                        aria-hidden="true"
                        className="mx-auto mb-1 w-7 h-7 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path>
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <div className="text-sm text-gray-900 dark:text-white">
                        Subscriptions
                      </div>
                    </a>
                  </Link>

                  <Link href="/user/invoices">
                    <a
                      href="#"
                      className="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 group"
                    >
                      <svg
                        aria-hidden="true"
                        className="mx-auto mb-1 w-7 h-7 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm2.5 3a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm6.207.293a1 1 0 00-1.414 0l-6 6a1 1 0 101.414 1.414l6-6a1 1 0 000-1.414zM12.5 10a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <div className="text-sm text-gray-900 dark:text-white">
                        Invoices
                      </div>
                    </a>
                  </Link>
                  <Link href="/user/support" passHref>
                    <a
                      href="#"
                      className="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 group"
                    >
                      <svg
                        aria-hidden="true"
                        className="mx-auto mb-1 w-7 h-7 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <div className="text-sm text-gray-900 dark:text-white">
                        Support Tickets
                      </div>
                    </a>
                  </Link>

                  <a
                    href="#"
                    className="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 group"
                  >
                    <svg
                      aria-hidden="true"
                      className="mx-auto mb-1 w-7 h-7 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <div className="text-sm text-gray-900 dark:text-white">
                      Settings
                    </div>
                  </a>

                  <a
                    className="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 group"
                    onClick={(e) => handleLogOut(e)}
                  >
                    <svg
                      aria-hidden="true"
                      className="mx-auto mb-1 w-7 h-7 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                      ></path>
                    </svg>
                    <div className="text-sm text-gray-900 dark:text-white">
                      Logout
                    </div>
                  </a>
                </div>
              </div>
            ) : null}

            <button
              type="button"
              className="flex mx-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              id="user-menu-button"
              aria-expanded="false"
              data-dropdown-toggle="dropdown"
              onClick={() => showUser(!user)}
            >
              <span className="sr-only">Open user menu</span>
              <img
                className="w-8 h-8 rounded-full"
                src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                alt="user photo"
              />
            </button>
            {user ? (
              <div className="z-50 absolute my-4 top-5 right-0 w-56 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                <div className="py-3 px-4">
                  <span className="block text-sm font-semibold text-gray-900 dark:text-white">
                    Neil sims
                  </span>
                  <span className="block text-sm font-light text-gray-500 truncate dark:text-gray-400">
                    neilsims@company.com
                  </span>
                </div>
                <ul
                  className="py-1 font-light text-gray-500 dark:text-gray-400"
                  aria-labelledby="dropdown"
                >
                  <Link href="/user/profile" passHref>
                    <li>
                      <a className="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white cursor-pointer">
                        My profile
                      </a>
                    </li>
                  </Link>
                </ul>
                <ul
                  className="py-1 font-light text-gray-500 dark:text-gray-400"
                  aria-labelledby="dropdown"
                >
                  <li>
                    <a
                      className="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      onClick={(e) => handleLogOut(e)}
                    >
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </nav>
    </header>
  );
}
