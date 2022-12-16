/* eslint-disable @next/next/no-img-element */
import react from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
// import { STRAPI_URL } from "../utils/strapi_url";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import FileUploader from "../../components/FileUploader";
import convertImageToBase64 from "../../components/ImageBase64";
import Admin from "../../Layouts/Admin";
export default function Profile() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const router = useRouter();
  const [imgName, setimgName] = useState(
    "https://flowbite.com/docs/images/people/profile-picture-5.jpg"
  );
  const onDrop = (acceptedFiles, rejectedFiles, imgName) => {
    if (rejectedFiles.length > 0) {
      toast.error("Upload only 1 image and size limit is 1Mb!!", {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    } else if (acceptedFiles) {
      convertImageToBase64(acceptedFiles[0], (result, success) => {
        if (success) {
          setimgName(result);
          //   uploadImage(result, (url, success) => {
          //     if (success) {
          //       handleData("photoUrl", `${url}`);
          //       setimgName(acceptedFiles[0].name);
          //     }
          //   });
        }
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Account Updated Successfully", {
      position: toast.POSITION.TOP_CENTER,
    });
  };
  return (
    <Admin>
      <section className="bg-gray-50">
        <div className="flex flex-col items-center justify-center px-6 py-5 mx-auto lg:py-0 bg-white mb-12">
          <div>
            <div className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700">
              Jese Leos
              <div className="tooltip-arrow" data-popper-arrow></div>
            </div>

            <FileUploader
              placeholder={imgName ? imgName : "Click here to upload"}
              accept={["image/jpeg", "image/png", "image/bmp"]}
              maxFiles={1}
              image={imgName}
              maxSize={1000000}
              onDrop={(acceptedFiles, rejectedFiles) =>
                onDrop(acceptedFiles, rejectedFiles, "Image")
              }
            />
          </div>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0  ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                Enter your details
              </h1>
              <form
                onSubmit={(e) => handleSubmit(e)}
                className="space-y-4 md:space-y-6"
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

                <button
                  type="submit"
                  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                >
                  Update
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Admin>
  );
}
