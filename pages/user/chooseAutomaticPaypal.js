import React from "react";
import { useRouter } from "next/router";
import User from "../../Layouts/User";

const ChooseAutomatic = () => {
  const router = useRouter();

  const handleAutomaticRoutePaypal = () => {
    router.push("/user/paymentMethodPaypal");
  };

  return (
    <User>
      <div className="w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full flex justify-center mt-10">
        <div className="relative w-full h-full max-w-2xl md:h-auto">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Select Number of Repetition
              </h3>
            </div>

            <div className="p-6 space-y-6">
              <select
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>2 Months</option>
                <option value="3M">3 Months</option>
                <option value="4M">4 Months</option>
              </select>
            </div>

            <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={() => handleAutomaticRoutePaypal()}
              >
                Make Payment
              </button>
            </div>
          </div>
        </div>
      </div>
    </User>
  );
};

export default ChooseAutomatic;
