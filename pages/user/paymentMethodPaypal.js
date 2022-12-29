/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import User from "../../Layouts/User";
import { useState } from "react";
export default function PaymentMethodPaypal() {
  const [option, setOption] = useState("card");

  return (
    <User>
      <div className="min-w-screen bg-white flex items-center justify-center px-5 pb-10 pt-10 lg:max-w-lg mx-auto">
        <div className="w-full mx-auto rounded-lg bg-white shadow-lg p-5 text-gray-700">
          <div className="w-full pt-1 pb-5">
            <div className="bg-indigo-500 text-white overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg flex justify-center items-center">
              <i className="mdi mdi-credit-card-outline text-3xl"></i>
            </div>
          </div>
          <div className="mb-10">
            <h1 className="text-center font-bold text-xl uppercase">
              Secure payment info
            </h1>
          </div>
          <div className="mb-3 flex -mx-2 justify-center">
            <div className="px-2">
              <label for="type2" className="flex items-center cursor-pointer">
                <img
                  src="https://www.sketchappsources.com/resources/source-image/PayPalCard.png"
                  className="w-20 h-12"
                />
              </label>
            </div>
          </div>

          <>
            <div className="mb-3">
              <label className="font-bold text-sm mb-2 ml-1">
                Enter paypal email
              </label>
              <div>
                <input
                  className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                  placeholder="Johnsmith@company.com"
                  type="text"
                />
              </div>
            </div>
          </>

          <div>
            <button className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">
              <i className="mdi mdi-lock-outline mr-1"></i> PAY NOW
            </button>
          </div>
        </div>
      </div>
    </User>
  );
}
