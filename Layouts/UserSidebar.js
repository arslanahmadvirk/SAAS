import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

// import NotificationDropdown from "components/Dropdowns/NotificationDropdown.js";
// import UserDropdown from "components/Dropdowns/UserDropdown.js";

export default function UserSidebar() {
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
            <Link href="/user/dashboard" passHref>
              <li>
                <a
                  href="#"
                  className={
                    currentRoute === "/user/dashboard"
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
            <Link href="/user/subscriptions">
              <li>
                <a
                  href="#"
                  className={
                    currentRoute === "/user/subscriptions"
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
                  <span className="ml-8">Subscriptions</span>
                </a>
              </li>
            </Link>
            <Link href="/user/unpaidinvoices">
              <li>
                <a
                  href="#"
                  className={
                    currentRoute === "/user/unpaidinvoices"
                      ? "flex items-center p-2 text-base font-normal text-white rounded-lg bg-blue-500"
                      : "flex items-center p-2 text-base font-normal text-gray-900"
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-clock"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                  </svg>

                  <span className="ml-8">Unpaid Invoices</span>
                </a>
              </li>
            </Link>
            <Link href="/user/invoices">
              <li>
                <a
                  href="#"
                  className={
                    currentRoute === "/user/invoices"
                      ? "flex items-center p-2 text-base font-normal text-white rounded-lg bg-blue-500"
                      : "flex items-center p-2 text-base font-normal text-gray-900"
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-clock"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                  </svg>

                  <span className="ml-8">Paid Invoices</span>
                </a>
              </li>
            </Link>
            <Link href="/user/support" passHref>
              <li>
                <a
                  href="#"
                  className={
                    currentRoute === "/user/support"
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
          </ul>
        </div>
      </aside>
    </>
  );
}
