/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
export default function Hero() {
  return (
    <section class="bg-gray-900 p-10 md:p-12">
      <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
          <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">
            Best way to start your SAAS project
          </h1>
          <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            From checkout to global sales tax compliance, companies around the
            world use Flowbite to simplify their payment stack.
          </p>
          <div className="space-y-2">
            <Link href="/register" passHref>
              <a
                href="#"
                class="inline-flex items-center justify-center text-sm px-3 py-2 md:px-5 md:py-3 mr-3 md:text-base md:font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-900"
              >
                Get started
                <svg
                  className="md:w-5 md:h-5 w-3 h-3 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </Link>
            <a
              href="#"
              class="inline-flex items-center justify-center text-sm px-6 py-2 md:px-9 md:py-3 mr-3 md:text-base md:font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-900"
            >
              Subscribe
            </a>
          </div>
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img src="/banner.png" alt="mockup" />
        </div>
      </div>
    </section>
  );
}
