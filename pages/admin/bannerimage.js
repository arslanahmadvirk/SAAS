/* eslint-disable @next/next/no-img-element */
import react from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
// import { STRAPI_URL } from "../utils/strapi_url";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import AdminFileUploader from "../../components/AdminFileUploader";
import convertImageToBase64 from "../../components/ImageBase64";
import Admin from "../../Layouts/Admin";
export default function Profile() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const router = useRouter();
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

          <div className="mt-5">
            <h1 className="text-black text-center mb-5 text-4xl font-bold">
              Your Banner Image
            </h1>
            <div className="flex mx-auto justify-center mb-12">
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 ml-5 mt-5"
                onClick={() => handleDelete()}
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
    </Admin>
  );
}
