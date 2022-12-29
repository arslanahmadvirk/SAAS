/* eslint-disable @next/next/no-img-element */
import react from "react";
import { useEffect, useState, Fragment } from "react";
import axios from "axios";
import { toast } from "react-toastify";
// import { STRAPI_URL } from "../utils/strapi_url";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import AdminFileUploader from "../../components/AdminFileUploader";
import convertImageToBase64 from "../../components/ImageBase64";
import { Transition, Dialog } from "@headlessui/react";

import Admin from "../../Layouts/Admin";
export default function Profile() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const router = useRouter();
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }
  const [imgName, setimgName] = useState(
    "https://saas-ochre.vercel.app/banner.png"
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

  const handleDelete = () => {
    setimgName("https://saas-ochre.vercel.app/banner.png");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Account Updated Successfully", {
      position: toast.POSITION.TOP_CENTER,
    });
  };
  return (
    <Admin>
      <section className="bg-white">
        <div className="flex flex-col items-center justify-center px-6 py-5 mx-auto lg:py-0 bg-white mb-12">
          <AdminFileUploader
            placeholder={imgName ? imgName : "Click here to upload"}
            accept={["image/jpeg", "image/png", "image/bmp"]}
            maxFiles={1}
            image={imgName}
            maxSize={1000000}
            onDrop={(acceptedFiles, rejectedFiles) =>
              onDrop(acceptedFiles, rejectedFiles, "Image")
            }
          />
          <div className="flex mx-auto justify-center mb-10">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 ml-5 mt-5"
            >
              Submit
            </button>
          </div>

          <div className="mt-5">
            <h1 className="text-black text-center mb-5 text-4xl font-bold">
              Your Banner Image
            </h1>
            <div className="flex mx-auto justify-center mb-12">
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 ml-5 mt-5"
                onClick={() => setIsOpen(true)}
              >
                Delete Banner Image
              </button>
            </div>
            <img
              className="w-[300px] h-[300px] md:w-[700px] md:h-[500px] rounded-lg"
              src={imgName}
              alt="image description"
            />
          </div>
        </div>
      </section>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full  max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-center text-gray-900"
                  >
                    Do you really want to delete this item?
                  </Dialog.Title>

                  <div className="mt-4 space-x-4 flex justify-center">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={() => {
                        handleDelete();
                        closeModal();
                      }}
                    >
                      Delete
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Cancel
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </Admin>
  );
}
