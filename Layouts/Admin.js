import React from "react";
import AdminSidebar from "./AdminSidebar";
import AdminHeader from "./AdminHeader";
export default function Admin({ children }) {
  return (
    <div className="bg-white">
      <div className="mt-12 bg-white mb-2">
        <AdminHeader />
      </div>
      <div className="relative md:ml-64 bg-blueGray-100 flex bg-gray-100">
        <AdminSidebar />
        <div className=" bg-white mx-auto w-full ">{children}</div>
      </div>
    </div>
  );
}
