import Head from "next/head";
import React from "react";
import { BsDice5 } from "react-icons/bs";

function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Dice Roller</title>
        <meta name="simple dice roller roll die" content="" />
        <link rel="icon" href="/dice-roll-white.png" />
      </Head>
      <div className="flex flex-col h-screen">
        <nav className="h-20 bg-gray-900 text-slate-50 text-3xl w-full flex justify-start items-center p-4 ">
          <BsDice5 className="mr-4" />
          <div>Dice Roller</div>
        </nav>
        <div className="w-screen h-screen flex">
          <aside className="h-full w-1/5"></aside>
          <main className="h-full container mx-auto px-4 flex items-center">
            <div className="flex flex-col h-5/6 w-2/3 mx-auto justify-start items-center gap-10 shadow-xl py-4 bg-gray-900 rounded-lg">
              {children}
            </div>
          </main>
          <aside className="h-full w-1/5"></aside>
        </div>
        <footer className="bg-gray-900">
          <div className="flex justify-center items-center py-4">
            Copyright &copy; Dakota Davis 2022
          </div>
        </footer>
      </div>
    </>
  );
}

export default Layout;
