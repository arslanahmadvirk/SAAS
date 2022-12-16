/* eslint-disable @next/next/no-img-element */
import react from "react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
// import { STRAPI_URL } from "../utils/strapi_url";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import Admin from "../../Layouts/Admin";
export default function Customers() {
  const router = useRouter();
  const handleRoute = () => {
    router.push("/admin/expiredcustomers");
  };

  return (
    <Admin>
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg mb-60 md:mx-12 mt-5">
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 ml-5 mt-5"
          onClick={() => handleRoute()}
        >
          Expired Customers
        </button>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
            Customers
          </caption>
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                Plan Name
              </th>
              <th scope="col" className="py-3 px-6">
                Customer Name
              </th>
              <th scope="col" className="py-3 px-6">
                Paid Amount
              </th>
              <th scope="col" className="py-3 px-6">
                Payment Status
              </th>
              <th scope="col" className="py-3 px-6">
                Purchased Date
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Pro Plan
              </th>
              <td className="py-4 px-6">Akhin KJ</td>
              <td className="py-4 px-6">$800</td>
              <td className="py-4 px-6">Succeeded</td>
              <td className="py-4 px-6">2022-11-02</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Pro Plan
              </th>
              <td className="py-4 px-6">Akhin KJ</td>
              <td className="py-4 px-6">$800</td>
              <td className="py-4 px-6">Succeeded</td>
              <td className="py-4 px-6">2022-11-02</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Pro Plan
              </th>
              <td className="py-4 px-6">Akhin KJ</td>
              <td className="py-4 px-6">$800</td>
              <td className="py-4 px-6">Succeeded</td>
              <td className="py-4 px-6">2022-11-02</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Pro Plan
              </th>
              <td className="py-4 px-6">Akhin KJ</td>
              <td className="py-4 px-6">$800</td>
              <td className="py-4 px-6">Succeeded</td>
              <td className="py-4 px-6">2022-11-02</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Pro Plan
              </th>
              <td className="py-4 px-6">Akhin KJ</td>
              <td className="py-4 px-6">$800</td>
              <td className="py-4 px-6">Succeeded</td>
              <td className="py-4 px-6">2022-11-02</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Admin>
  );
}
