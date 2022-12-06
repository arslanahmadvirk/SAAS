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
export default function Subscriptions() {
  return (
    <User>
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg mb-60">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
            Subscriptions Overview
            <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
              Browse a list of Flowbite products designed to help you work and
              play, stay organized, get answers, keep in touch, grow your
              business, and more.
            </p>
          </caption>
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                Plan Name
              </th>
              <th scope="col" className="py-3 px-6">
                Paid Amount
              </th>
              <th scope="col" className="py-3 px-6">
                Plan Interval
              </th>
              <th scope="col" className="py-3 px-6">
                Payment Status
              </th>
              <th scope="col" className="py-3 px-6">
                Purchase Date
              </th>
              <th scope="col" className="py-3 px-6">
                Expiry
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Apple MacBook Pro 17
              </th>
              <td className="py-4 px-6">Sliver</td>
              <td className="py-4 px-6">Laptop</td>
              <td className="py-4 px-6">$2999</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Microsoft Surface Pro
              </th>
              <td className="py-4 px-6">White</td>
              <td className="py-4 px-6">Laptop PC</td>
              <td className="py-4 px-6">$1999</td>
            </tr>
            <tr className="bg-white dark:bg-gray-800">
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Magic Mouse 2
              </th>
              <td className="py-4 px-6">Black</td>
              <td className="py-4 px-6">Accessories</td>
              <td className="py-4 px-6">$99</td>
            </tr>
          </tbody>
        </table>
      </div>
    </User>
  );
}
