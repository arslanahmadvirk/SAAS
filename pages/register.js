/* eslint-disable @next/next/no-img-element */
import react from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

import Link from "next/link";
import Router, { useRouter } from "next/router";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length < 8) {
      toast.error("Password should not less than 8 characters!!", {
        position: toast.POSITION.TOP_CENTER,
      });
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      toast.error("Please enter correct email!!", {
        position: toast.POSITION.TOP_CENTER,
      });
    } else {
      const regEmail = localStorage.getItem("RegisterDetails");
      if (regEmail == email) {
        toast.error("Account Already Exist!!", {
          position: toast.POSITION.TOP_CENTER,
        });
      } else {
        localStorage.setItem("RegisterDetails", email);
        toast.success("Account Created Successfully", {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    }
  };

  return (
    <section className="bg-gray-50  mt-12">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 bg-white">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 mt-0 md:mt-12"
        >
          <img
            className="w-8 h-8 mr-2"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
            alt="logo"
          />
          SAAS
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0  ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
              Create a new account
            </h1>
            <form
              onSubmit={(e) => handleSubmit(e)}
              className="space-y-4 md:space-y-6"
              action="#"
            >
              <div>
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Your name
                </label>
                <input
                  type="text"
                  name="text"
                  id="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="john"
                  required
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
              <div>
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="name@company.com"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label
                  for="password"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="flex items-center justify-between">
                <Link href="/login" passHref>
                  <a
                    href="#"
                    className="text-sm font-medium text-primary-600 hover:underline "
                  >
                    Already have account?
                  </a>
                </Link>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
