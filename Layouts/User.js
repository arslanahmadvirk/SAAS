import React from "react";
import UserSidebar from "./UserSidebar";
import UserHeader from "./UserHeader";
export default function User({ children }) {
  return (
    <div className="bg-white">
      <div className="mt-12 bg-white mb-2">
        <UserHeader />
      </div>
      <div className="relative md:ml-64 bg-blueGray-100 flex bg-gray-100">
        <UserSidebar />
        <div className=" bg-white mx-auto w-full ">{children}</div>
      </div>
    </div>
  );
}
