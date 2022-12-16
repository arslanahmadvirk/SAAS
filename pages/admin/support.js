/* eslint-disable @next/next/no-img-element */
import react from "react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
// import { STRAPI_URL } from "../utils/strapi_url";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import Admin from "../../Layouts/Admin";
export default function Support() {
  const [modal, showModal] = useState(false);
  const router = useRouter();
  const handleReply = (e) => {
    e.preventDefault();
    showModal(!modal);
    toast.success("Reply Submitted Successfully", {
      position: toast.POSITION.TOP_CENTER,
    });
  };
  return (
    <Admin>
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg mb-60 md:mx-12 mt-5">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <caption className="p-5 text-lg font-bold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
            All Tickets
          </caption>
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                Subject
              </th>
              <th scope="col" className="py-3 px-6">
                Description
              </th>

              <th scope="col" className="py-3 px-6">
                Reply
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                This is a testing ticket for testing purpose.
              </th>
              <td className="py-4 px-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
                doloribus? Quo illum delectus temporibus ab optio sequi iusto
                nemo, quas id odio at magnam doloribus aliquam itaque minus
                quidem enim.
              </td>

              <td>
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 ml-5 mt-5"
                  onClick={() => showModal(!modal)}
                >
                  Reply
                </button>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                This is a testing ticket for testing purpose.
              </th>
              <td className="py-4 px-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
                doloribus? Quo illum delectus temporibus ab optio sequi iusto
                nemo, quas id odio at magnam doloribus aliquam itaque minus
                quidem enim.
              </td>

              <td>
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 ml-5 mt-5"
                  onClick={() => showModal(!modal)}
                >
                  Reply
                </button>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                This is a testing ticket for testing purpose.
              </th>
              <td className="py-4 px-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
                doloribus? Quo illum delectus temporibus ab optio sequi iusto
                nemo, quas id odio at magnam doloribus aliquam itaque minus
                quidem enim.
              </td>

              <td>
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 ml-5 mt-5"
                  onClick={() => showModal(!modal)}
                >
                  Reply
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {modal ? (
        <>
          <div
            aria-hidden="true"
            className="absolute z-10 w-full p-4 overflow-x-hidden overflow-y-auto inset-0 md:left-[250px] lg:left-[500px] left-[0px]"
          >
            <div className="relative w-full h-full max-w-md md:h-auto">
              {/* Modal Content */}
              <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <button
                  type="button"
                  class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                  onClick={() => showModal(!modal)}
                >
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5"
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
                  <span className="sr-only">Close modal</span>
                </button>
                <div className="px-6 py-6 lg:px-8">
                  <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                    Reply to ticket
                  </h3>
                  <form className="space-y-6" onSubmit={(e) => handleReply(e)}>
                    <div>
                      <label
                        for="email"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Reply
                      </label>
                      <textarea
                        type="text"
                        rows="6"
                        name="email"
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        placeholder=""
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </Admin>
  );
}
