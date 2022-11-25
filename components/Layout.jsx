import Head from "next/head";
import Link from "next/link";
import React from "react";
import { BsDice5 } from "react-icons/bs";
import { useRouter } from "next/router";

function Layout({ children }) {
  const router = useRouter();
  console.log(router);
  return (
    <>
      <Head>
        <title>Rollery</title>
        <meta name="simple dice roller roll die" content="" />
        <link rel="icon" href="/dice-roll-white.png" />
      </Head>
      <div className="flex flex-col h-screen">
        <nav className="w-full h-20 p-4  bg-gray-900 text-slate-50 text-2xl md:text-3xl flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <BsDice5 className="mr-4" />
            <div className="">Rollery</div>
          </Link>
          <ul className={`flex gap-4 text-lg`}>
            <Link
              href="/one"
              className={router.pathname === "/one" ? "text-green-600" : ""}
            >
              <li>Just One</li>
            </Link>
            <Link
              href="/"
              className={router.pathname === "/" ? "text-green-600" : ""}
            >
              <li>A Lot</li>
            </Link>
          </ul>
        </nav>
        <div className="w-screen h-screen flex flex-col md:flex-row">
          <aside className="h-full w-1/5 hidden md:block"></aside>
          <main className="h-full container mx-auto px-4 flex items-center">
            <div className="flex flex-col h-5/6 w-full mx-auto justify-start items-center gap-10 shadow-xl py-4 bg-gray-900 rounded-lg">
              {children}
            </div>
          </main>
          <aside className="h-full w-1/5 hidden md:block"></aside>
        </div>
        <footer className="bg-gray-900">
          <div className="flex justify-center items-center py-4">
            <div>Copyright &copy;</div>
            <span>
              <a className="mx-1 underline" href="https://www.dakotadavis.me">
                Dakota Davis
              </a>
            </span>
            2022
          </div>
        </footer>
      </div>
    </>
  );
}

export default Layout;
