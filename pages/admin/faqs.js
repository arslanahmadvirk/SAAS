/* eslint-disable @next/next/no-img-element */
import react from "react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
// import { STRAPI_URL } from "../utils/strapi_url";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import Admin from "../../Layouts/Admin";
export default function FAQs() {
  const router = useRouter();

  const handleRouteEdit = () => {
    router.push("/admin/editfaqs");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Question added successfully", {
      position: toast.POSITION.TOP_CENTER,
    });
  };
  return (
    <Admin>
      <section className="bg-white dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:py-5">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Fequently Asked Question
              </h1>
              <form
                onSubmit={(e) => handleSubmit(e)}
                className="space-y-4 md:space-y-6"
                action="#"
              >
                <div>
                  <label
                    for="planname"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Question
                  </label>
                  <input
                    type="text"
                    name="planname"
                    id="planname"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder=""
                    required
                  />
                </div>

                <div>
                  <label
                    for="planname"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Answer
                  </label>
                  <input
                    type="text"
                    name="description"
                    id="description"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder=""
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg mb-60 md:mx-12 mt-5">
        <div className="px-2 py-2">
          <label className="inline-flex relative items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>
        </div>

        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                Question
              </th>
              <th scope="col" className="py-3 px-6">
                Answer
              </th>

              <th scope="col" className="py-3 px-6">
                Action
              </th>
              <th scope="col" className="py-3 px-6">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Lorem ipsum?
              </th>
              <td className="py-4 px-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas ullam eum porro nesciunt excepturi, in nostrum
                cupiditate, adipisci, laudantium id accusantium nam aperiam
                placeat optio. Earum iure necessitatibus doloribus nostrum?
              </td>

              <td>
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 ml-5 mt-5"
                  onClick={() => handleRouteEdit()}
                >
                  Edit
                </button>
              </td>
              <td>
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 ml-5 mt-5"
                >
                  Delete
                </button>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Lorem ipsum?
              </th>
              <td className="py-4 px-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas ullam eum porro nesciunt excepturi, in nostrum
                cupiditate, adipisci, laudantium id accusantium nam aperiam
                placeat optio. Earum iure necessitatibus doloribus nostrum?
              </td>

              <td>
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 ml-5 mt-5"
                  onClick={() => handleRouteEdit()}
                >
                  Edit
                </button>
              </td>
              <td>
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 ml-5 mt-5"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Admin>
  );
}
