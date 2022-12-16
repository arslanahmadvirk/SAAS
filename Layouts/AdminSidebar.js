import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

// import NotificationDropdown from "components/Dropdowns/NotificationDropdown.js";
// import UserDropdown from "components/Dropdowns/UserDropdown.js";

export default function AdminSidebar() {
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  const router = useRouter();
  const currentRoute = router.pathname;
  return (
    <>
      <aside className="hidden md:flex w-60" aria-label="Sidebar">
        <div className="overflow-y-auto py-4 px-3 bg-gray-100 dark:bg-gray-800">
          <ul className="space-y-3">
            <li>
              <a
                href="#"
                className="flex items-center p-4 text-lg justify-center text-white text-center font-bold rounded-3xl bg-blue-500"
              >
                <span className="text-center">SAAS</span>
              </a>
            </li>
            <Link href="/admin/dashboard" passHref>
              <li>
                <a
                  href="#"
                  className={
                    currentRoute === "/admin/dashboard"
                      ? "flex items-center p-2 text-base font-normal text-white rounded-lg bg-blue-500 "
                      : "flex items-center p-2 text-base font-normal text-gray-900"
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-inbox-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4.98 4a.5.5 0 0 0-.39.188L1.54 8H6a.5.5 0 0 1 .5.5 1.5 1.5 0 1 0 3 0A.5.5 0 0 1 10 8h4.46l-3.05-3.812A.5.5 0 0 0 11.02 4H4.98zm-1.17-.437A1.5 1.5 0 0 1 4.98 3h6.04a1.5 1.5 0 0 1 1.17.563l3.7 4.625a.5.5 0 0 1 .106.374l-.39 3.124A1.5 1.5 0 0 1 14.117 13H1.883a1.5 1.5 0 0 1-1.489-1.314l-.39-3.124a.5.5 0 0 1 .106-.374l3.7-4.625z" />
                  </svg>
                  <span className="ml-8">Dashboard</span>
                  <span className="inline-flex justify-center items-center px-8 ml-3 text-sm font-medium text-gray-800"></span>
                </a>
              </li>
            </Link>
            <Link href="/admin/plans">
              <li>
                <a
                  href="#"
                  className={
                    currentRoute === "/admin/plans"
                      ? "flex items-center p-2 text-base font-normal text-white rounded-lg bg-blue-500"
                      : "flex items-center p-2 text-base font-normal text-gray-900"
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-star"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                  </svg>
                  <span className="ml-8">Plans</span>
                </a>
              </li>
            </Link>
            <Link href="/admin/bannerimage">
              <li>
                <a
                  href="#"
                  className={
                    currentRoute === "/admin/bannerimage"
                      ? "flex items-center p-2 text-base font-normal text-white rounded-lg bg-blue-500"
                      : "flex items-center p-2 text-base font-normal text-gray-900"
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-image"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                    <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z" />
                  </svg>

                  <span className="ml-8">Banner Image Upload</span>
                </a>
              </li>
            </Link>
            <Link href="/admin/faqs">
              <li>
                <a
                  href="#"
                  className={
                    currentRoute === "/admin/faqs"
                      ? "flex items-center p-2 text-base font-normal text-white rounded-lg bg-blue-500"
                      : "flex items-center p-2 text-base font-normal text-gray-900"
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-list-ul"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
                    />
                  </svg>

                  <span className="ml-8">FAQs</span>
                </a>
              </li>
            </Link>
            <Link href="/admin/features">
              <li>
                <a
                  href="#"
                  className={
                    currentRoute === "/admin/features"
                      ? "flex items-center p-2 text-base font-normal text-white rounded-lg bg-blue-500"
                      : "flex items-center p-2 text-base font-normal text-gray-900"
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-geo-alt"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                  </svg>

                  <span className="ml-8">Features</span>
                </a>
              </li>
            </Link>
            <Link href="/admin/footer">
              <li>
                <a
                  href="#"
                  className={
                    currentRoute === "/admin/footer"
                      ? "flex items-center p-2 text-base font-normal text-white rounded-lg bg-blue-500"
                      : "flex items-center p-2 text-base font-normal text-gray-900"
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-card-heading"
                    viewBox="0 0 16 16"
                  >
                    <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
                    <path d="M3 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0-5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-1z" />
                  </svg>

                  <span className="ml-8">Footer</span>
                </a>
              </li>
            </Link>
            <Link href="/admin/support" passHref>
              <li>
                <a
                  href="#"
                  className={
                    currentRoute === "/admin/support"
                      ? "flex items-center p-2 text-base font-normal text-white rounded-lg bg-blue-500"
                      : "flex items-center p-2 text-base font-normal text-gray-900"
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-send"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
                  </svg>
                  <span className="ml-8">Support Tickets</span>
                </a>
              </li>
            </Link>
            <Link href="/admin/customers">
              <li>
                <a
                  href="#"
                  className={
                    currentRoute === "/admin/customers"
                      ? "flex items-center p-2 text-base font-normal text-white rounded-lg bg-blue-500"
                      : "flex items-center p-2 text-base font-normal text-gray-900"
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-person-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    <path
                      fill-rule="evenodd"
                      d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                    />
                  </svg>

                  <span className="ml-8">Customers</span>
                </a>
              </li>
            </Link>
            <Link href="/admin/testimonials">
              <li>
                <a
                  href="#"
                  className={
                    currentRoute === "/admin/testimonials"
                      ? "flex items-center p-2 text-base font-normal text-white rounded-lg bg-blue-500"
                      : "flex items-center p-2 text-base font-normal text-gray-900"
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-person-square"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12z" />
                  </svg>

                  <span className="ml-8">Testimonials</span>
                </a>
              </li>
            </Link>
          </ul>
        </div>
      </aside>
    </>
  );
}
