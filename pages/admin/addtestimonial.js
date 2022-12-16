/* eslint-disable @next/next/no-img-element */
import react from "react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
// import { STRAPI_URL } from "../utils/strapi_url";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import Admin from "../../Layouts/Admin";
import TestiMonialFileUploader from "../../components/TestiMonialFileUploader";
export default function ADDTestimonial() {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Testimonial added successfully", {
      position: toast.POSITION.TOP_CENTER,
    });
    router.push("/admin/testimonials");
  };

  const [imgName, setimgName] = useState("");
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

  return (
    <Admin>
      <section className="bg-white dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:py-5">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Add new Testimonial
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
                    Name
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
                    Role
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
                    Image
                  </label>
                  <TestiMonialFileUploader
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
                <div>
                  <label
                    for="planname"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Description
                  </label>
                  <textarea
                    type="text"
                    rows="6"
                    name="planprice"
                    id="planprice"
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
    </Admin>
  );
}
