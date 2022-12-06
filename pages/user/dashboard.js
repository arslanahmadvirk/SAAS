/* eslint-disable @next/next/no-img-element */
import react from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
// import { STRAPI_URL } from "../utils/strapi_url";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../redux/authSlice";
import User from "../../Layouts/User";
export default function Dashboard() {
  return (
    <User>
      <section className="text-gray-600 body-font mb-10">
        <div className="container px-12 py-0 mb-5 mx-auto">
          <div className="flex flex-col">
            <div className="h-1 bg-gray-200 rounded overflow-hidden">
              <div className="w-24 h-full bg-green-500"></div>
            </div>
            <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
              <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">
                Space The Final Frontier
              </h1>
              <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
                Street art subway tile salvia four dollar toast bitters selfies
                quinoa yuccie synth meditation iPhone intelligentsia prism tofu.
                Viral gochujang bitters dreamcatcher.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            <Link href="/user/subscriptions" passHref>
              <div className="p-4 md:w-1/3 sm:mb-0 mb-6 bg-gray-200 cursor-pointer">
                <div className="rounded-lg h-64 overflow-hidden">
                  <img
                    alt="content"
                    className="object-cover object-center h-full w-full"
                    src="/subscription.png"
                  />
                </div>
                <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
                  Subscriptions
                </h2>
                <p className="text-base leading-relaxed mt-2">
                  Swag shoivdigoitch literally meditation subway tile tumblr
                  cold-pressed. Gastropub street art beard dreamcatcher neutra,
                  ethical XOXO lumbersexual.
                </p>
              </div>
            </Link>
            <Link href="/user/invoices" passHref>
              <div className="p-4 md:w-1/3 sm:mb-0 mb-6 bg-gray-200 cursor-pointer">
                <div className="rounded-lg h-64 overflow-hidden">
                  <img
                    alt="content"
                    className="object-cover object-center h-full w-full"
                    src="/invoice.png"
                  />
                </div>
                <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
                  Invoices
                </h2>
                <p className="text-base leading-relaxed mt-2">
                  Swag shoivdigoitch literally meditation subway tile tumblr
                  cold-pressed. Gastropub street art beard dreamcatcher neutra,
                  ethical XOXO lumbersexual.
                </p>
              </div>
            </Link>
            <Link href="/user/support" passHref>
              <div className="p-4 md:w-1/3 sm:mb-0 mb-6 bg-gray-200 cursor-pointer">
                <div className="rounded-lg h-64 overflow-hidden">
                  <img
                    alt="content"
                    className="object-cover object-center h-full w-full"
                    src="/support.png"
                  />
                </div>
                <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
                  Support Tickets
                </h2>
                <p className="text-base leading-relaxed mt-2">
                  Swag shoivdigoitch literally meditation subway tile tumblr
                  cold-pressed. Gastropub street art beard dreamcatcher neutra,
                  ethical XOXO lumbersexual.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </User>
  );
}
