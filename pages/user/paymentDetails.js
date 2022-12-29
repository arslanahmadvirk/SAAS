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
export default function PaymentDetails() {
  const router = useRouter();

  const [payPal, setPaypal] = useState(false);
  const [stripe, setStripe] = useState(false);

  const handleAutomaticRouteStripe = () => {
    router.push("/user/chooseAutomaticStripe");
  };
  const handleManualRouteStripe = () => {
    router.push("/user/paymentMethodStripe");
  };
  const handleAutomaticRoutePaypal = () => {
    router.push("/user/chooseAutomaticPaypal");
  };
  const handleManualRoutePaypal = () => {
    router.push("/user/paymentMethodPaypal");
  };
  return (
    <User>
      <section className="text-gray-600 body-font mb-10 lg:max-w-6xl mx-auto mt-10 ">
        <div className="container px-12 py-0 mb-5 mx-auto">
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 justify-center items-center">
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6 bg-gray-200 cursor-pointer">
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  className=" h-[200px] w-[500px]"
                  src="/paypal1.png"
                />
              </div>
              <div className="flex justify-center">
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 "
                  onClick={() => handleAutomaticRoutePaypal()}
                >
                  Automatic Renew
                </button>
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-7 py-2.5 mr-2 mb-2 "
                  onClick={() => handleManualRoutePaypal()}
                >
                  Manual Renew
                </button>
              </div>
            </div>

            <div className="p-4 md:w-1/3 sm:mb-0 mb-6 bg-gray-200 cursor-pointer">
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  className="h-[200px] w-[500px]"
                  src="/stripe1.png"
                />
              </div>
              <div className="flex justify-center">
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 "
                  onClick={() => handleAutomaticRouteStripe()}
                >
                  Automatic Renew
                </button>
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-7 py-2.5 mr-2 mb-2 "
                  onClick={() => handleManualRouteStripe()}
                >
                  Manual Renew
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </User>
  );
}
